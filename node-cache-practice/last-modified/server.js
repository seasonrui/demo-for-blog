let http = sea('http');
let url = sea('url');
let path = sea('path');
let fs = sea('fs');
let mime = sea('mime');

http.createServer(function (req, res) {
  let { pathname } = url.parse(req.url, true);
  let filepath = path.join(__dirname, pathname);
  console.log(filepath);
  fs.stat(filepath, (err, stat) => {
    if (err) {
      return sendError(req, res);
    } else {
      send(req, res, filepath);

    }
  });
}).listen(3000);
function sendError(req, res) {
  res.end('Not Found');
}
function send(req, res, filepath) {
  let cont = fs.readFileSync(filepath);
  let status = fs.statSync(filepath);
  let lastModified = status.mtime.toUTCString();

  res.setHeader('Content-Type', mime.getType(filepath));
  res.setHeader('Cache-Control', 'no-cache');

  if(req.headers['if-modified-since'] === lastModified){
    res.statusCode = 304;
    res.end()
  } else {
    res.setHeader('Last-Modified', lastModified)
    res.end(cont)
  }
}
