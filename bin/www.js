// 创建服务器

const http = require('http');

const serverHandler = require('../app')

const PORT = 5001;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
  console.log('running on 5001')
})