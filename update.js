const { spawnSync } = require('child_process')
const { createServer } = require('http')
const { map } = require('bluebird')
const { readFileSync, outputFileSync, outputJsonSync } = require('fs-extra')
const { keys, toPairs, fromPairs, sortBy } = require('lodash')
const fetch = require('node-fetch')

let updatePeriod = 10

const lastModified = require('./last-modified.json')

const update = async () => {
  let modified = false
  await map(keys(lastModified), async url => {
    const res = await fetch(url, { headers: { 'if-modified-since': lastModified[url] } })
    if (res.status === 200) {
      const path = url.replace('http://203.104.209.7/', '')
      const data = path === 'kcscontents/news/index.html' ? (await res.text()).replace('http://', 'https://') : await res.buffer()
      outputFileSync(path, data)
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
  } catch (e) {
    console.log(`error  : ${e.toString()}`)
  }
  console.log(`finish : ${new Date().toISOString()}`)
  setTimeout(main, updatePeriod * 60 * 1000)
}

createServer((req, res) => {
  try {
    if (req.headers['authorization'] !== process.env.AUTHORIZATION) {
      res.end()
      return
    }
    if (req.url === '/period') {
      res.write(`${updatePeriod}\n`)
    } else if (req.url === '/log') {
      res.write(`${readFileSync('/tmp/log')}\n`)
    } else if (req.url.match(/^\/period\/[1-9]\d?$/)) {
      updatePeriod = +req.url.match(/^\/period\/([1-9]\d?)$/)[1]
      res.write(`${updatePeriod}\n`)
    }
    res.end()
  } catch (e) {
    console.log(`error  : ${e.toString()}`)
    res.end()
  }
}).listen(8080)

main()

// TODO: automatically reduce updatePeriod around MaintenanceInfo.EndDateTime?

// TODO: sed -i -e s/http:/https:/g kcscontents/news/index.html
