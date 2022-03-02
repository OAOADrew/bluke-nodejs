// const fs = require('fs');
// const { resolve } = require('path');
// const path = require('path');

// // function getFileContent(filename, callback) {
// //   // 数据文件的绝对路径
// //   const fullFilename = path.resolve(__dirname, 'data', filename);

// //   fs.readFile(fullFilename, (err, data) => {
// //     if (err) {
// //       console.error(err);
// //       return;
// //     }

// //     callback(
// //       JSON.parse(data.toString())
// //     );
// //   });
// // }


// // // 回掉地狱
// // getFileContent('a.json', (aData) => {
// //   console.log('aData', aData);
// //   getFileContent(aData.next, (bData) => {
// //     console.log('bData', bData);
// //     getFileContent(bData.next, (cData) => {
// //       console.log('cData', cData);
// //     })
// //   });
// // });

// // promise 实现
// function getFileContent(filename) {
//   const promise = new Promise((resolve, reject) => {
//     // 数据文件的绝对路径
//     const fullFilename = path.resolve(__dirname, 'data', filename);

//     fs.readFile(fullFilename, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }

//       resolve(
//         JSON.parse(data.toString())
//       );
//     });
//   });
//   return promise;
// }

// getFileContent('a.json').then((aData) => {
//   console.log('aData', aData)
//   return getFileContent(aData.next);
// }).then((bData) => {
//   console.log('bData', bData);
//   return getFileContent(bData.next);
// }).then((cData) => {
//   console.log('cData', cData);
// })

function fid(n) {
  if(n<=1) {
    return n;
  }
  return fid(n-1)+fid(n-2);
}

const value = fid(2);
console.log(value);