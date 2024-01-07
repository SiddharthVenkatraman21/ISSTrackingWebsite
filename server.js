import { fileURLToPath } from 'url';
import { dirname } from 'path';
import httpServer from 'http-server';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use('/', express.static(__dirname));
app.use('/api', createProxyMiddleware({ target: 'https://api.n2yo.com', changeOrigin: true }));

const server = httpServer.createServer({
    root: __dirname,
    default: 'index.html',  // Specify the default document
});
server.listen(5500, () => {
    console.log('Server is running on http://127.0.0.1:5500/');
});
