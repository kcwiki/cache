// seems more stable
const fetch = require('node-fetch')

export default async (req, res) => {
  try {
    const url = `http://203.104.209.7/${decodeURIComponent(req.url.split('?')[1])}`
    const subReq = await fetch(url, { headers: { 'if-modified-since': req.headers['if-modified-since'] } })
    res.writeHead(subReq.status, subReq.headers)
    if (subReq.ok) {
      for await (const chunk of subReq.body) {
        res.write(chunk)
      }
    }
    res.end()
  } catch (err) {
    console.error(err.toString())
    res.writeHead(500)
    res.end()
  }
}
