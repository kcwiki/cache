const { spawnSync } = require('child_process')
const { map } = require('bluebird')
const { outputFileSync, outputJsonSync } = require('fs-extra')
const { keys, toPairs, fromPairs, sortBy } = require('lodash')
const fetch = require('node-fetch')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const lastModified = require('./last-modified.json')

const update = async (n = 1, s = 0) => {
  let modified = false
  for (let i = 0; i < n; ++i) {
    await map(keys(lastModified), async url => {
      const path = url.replace('http://w00g.kancolle-server.com/', '')
      const useUrl = process.env.EDGE ? `${process.env.EDGE}${new URL(url).pathname.slice(1)}` : url
      const res = await fetch(useUrl, { headers: { 'if-modified-since': lastModified[url] } })
      if (res.status === 200) {
        const data = path === 'kcscontents/news/index.html' ? (await res.text()).replace('http://', 'https://') : await res.buffer()
        outputFileSync(path, data)
        if (res.headers.get('last-modified')) {
          lastModified[url] = res.headers.get('last-modified')
        }
        modified = true
        console.log(`update : ${url}, ${lastModified[url]}`)
      } else if (res.status !== 304) {
        console.log(`${res.status}    : ${url}`)
      }
    })
    await sleep(s * 1000)
  }
  return modified
}

const main = async () => {
  console.log(`start  : ${new Date().toISOString()}`)
  try {
    if (process.env.EDGE ? await update(5, 5) : await update()) {
      outputJsonSync('last-modified.json', fromPairs(sortBy(toPairs(lastModified), e => e[0])), { spaces: 2 })
      if (!process.env.EDGE) {
        spawnSync('./push.sh', [])
      }
    }
  } catch (err) {
    console.log(`error  : ${err.toString()}`)
  }
  console.log(`finish : ${new Date().toISOString()}`)
  if (process.argv[2]) {
    process.exit()
  }
  setTimeout(main, 10 * 60 * 1000)
}

main()
