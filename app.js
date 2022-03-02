// 服务器业务代码

const handleBlogRoute = require('./src/routes/blog');
const querystring = require('querystring');

// 处理POST数据
const getPostData = () => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
      return;
    }

    if (req.headers['content-type'] !== 'application/json') {
      resolve({});
      return;
    }

    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString();
    });

    req.on('end', () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
}

const serverHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const url = req.url;
  req.path = url.split('?')[0];

  //解析 query
  req.query = querystring.parse(url.split('?')[1]);

  const blogData = handleBlogRoute(req, res);
  if (blogData) {
    res.end(
      JSON.stringify(blogData)
    );
    return;
  }

  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('404 Not Found');
  res.end();
}

module.exports = serverHandler;