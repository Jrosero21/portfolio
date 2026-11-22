// Local test server: node dev-server.mjs  (reads OPENAI_API_KEY / PUSHOVER_* from the environment)
import http from 'node:http';
import { POST, OPTIONS } from './api/chat.js';

http
  .createServer(async (req, res) => {
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const request = new Request(`http://localhost${req.url}`, {
      method: req.method,
      headers: req.headers,
      body: req.method === 'POST' ? Buffer.concat(chunks) : undefined,
    });
    const response = req.method === 'OPTIONS' ? await OPTIONS(request) : await POST(request);
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(await response.text());
  })
  .listen(3001, () => console.log('twin api on http://localhost:3001/api/chat'));
