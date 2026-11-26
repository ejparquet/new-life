import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]); if (urlPath === '/' ) urlPath = '/index.html'; else if (!path.extname(urlPath)) urlPath += '.html';
  const filePath = path.join(__dirname, urlPath);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(err.code === 'ENOENT' ? 404 : 500);
      res.end(err.code === 'ENOENT' ? 'Not Found' : 'Server Error');
      return;
    }
    // Range requests (needed for smooth video streaming/looping)
    const range = req.headers.range && /bytes=(\d*)-(\d*)/.exec(req.headers.range);
    if (range) {
      const start = range[1] ? parseInt(range[1], 10) : 0;
      const end = range[2] ? Math.min(parseInt(range[2], 10), data.length - 1) : data.length - 1;
      res.writeHead(206, { 'Content-Type': contentType, 'Content-Range': `bytes ${start}-${end}/${data.length}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1, 'Cache-Control': 'max-age=3600' });
      res.end(data.subarray(start, end + 1));
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType, 'Accept-Ranges': 'bytes', 'Content-Length': data.length });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
