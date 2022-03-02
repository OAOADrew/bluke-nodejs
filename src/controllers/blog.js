// 博客相关方法

const getList = (author, keyword) => {
  // 应该从数据库里去那数据
  // 先返回假数据
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      author: '小晴',
      createdAt: 1645463725592
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      author: '小张',
      createdAt: 1645463843509
    },
    {
      id: 3,
      title: '标题3',
      content: '内容3',
      author: '小陈',
      createdAt: 1645463865764
    },
    {
      id: 4,
      title: '标题4',
      content: '内容4',
      author: '小柏',
      createdAt: 1645463874248
    }
  ]
}

// 获取博客详情数据
const getDetail = (id) => {
  // 先返回假数据
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    author: 'zhangsan',
    createdAt: 1645463874248
  }
}

module.exports = {
  getList,
  getDetail
}