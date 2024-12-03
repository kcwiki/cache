// seems more stable
const fetch = require('node-fetch')

export default async (req, res) => {
  try {
    const url = `http://w00g.kancolle-server.com/${decodeURIComponent(req.url.split('?url=')[1])}`
    const subReq = await fetch(url, { headers: { 'if-modified-since': req.headers['if-modified-since'] } })
    res.writeHead(subReq.status, { 'last-modified': subReq.headers.get('last-modified') })
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
