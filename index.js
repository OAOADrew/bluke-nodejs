const http = require('http');
const querystring = require('querystring');

// 创建服务器
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  const query = querystring.parse(url.split('?')[1]);

  // 响应数据
  const responseData = {
    method,
    url,
    path,
    query
  }

  res.setHeader('Content-Type', 'application/json')
  
  if (method === 'GET') {
    res.end(
      JSON.stringify(responseData)
    )
  }
  
  if (method === 'POST') {
    let postData = '';
    // 流 stream
    req.on('data', chunk => {
      postData += chunk.toString();
    })

    req.on('end', () => {
      console.log('postData', postData);
      responseData.postData = postData;
      res.end(
        JSON.stringify(responseData)
      )
    })

    console.log('post data content type', req.headers['content-type'])
  }
});

server.listen(5001, () => {
  console.log('server running at port 5001ssq');
})