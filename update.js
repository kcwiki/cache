const { spawnSync } = require('child_process')
const { map } = require('bluebird')
const { outputFileSync, outputJsonSync } = require('fs-extra')
const { keys, toPairs, fromPairs, sortBy } = require('lodash')
const fetch = require('node-fetch')

const lastModified = require('./last-modified.json')

const update = async () => {
  let modified = false
  await map(keys(lastModified), async url => {
    const res = await fetch(url, { headers: { 'if-modified-since': lastModified[url] } })
    if (res.status === 200) {
      outputFileSync(url.replace('http://203.104.209.7/', ''), await res.buffer())
      lastModified[url] = res.headers.get('last-modified')
      modified = true
      console.log(`update : ${url}, ${lastModified[url]}`)
    } else if (res.status !== 304) {
      console.log(`${res.status}    : ${url}`)
    }
  })
  return modified
}

const main = async () => {
  console.log(`start  : ${new Date().toISOString()}`)
  try {
    if (await update()) {
      outputJsonSync('last-modified.json', fromPairs(sortBy(toPairs(lastModified), e => e[0])), { spaces: 2 })
      spawnSync('./push.sh', [])
    }
    console.log(`finish : ${new Date().toISOString()}`)
  } catch (e) {
    console.log(`error  : ${e.toString()}`)
  }
  setTimeout(main, 10 * 60 * 1000)
}

main()

// TODO: sed -i -e s/http:/https:/g kcscontents/news/index.html
