// staticTest.vue
import img from '@/assets/logo.png' // 返回图片资源路径
// import demo from './demo.tsx?url' // 显式加载资源为一个 URL
// import test from '@/test/test?raw' // 以字符串形式加载资源
// import Worker from '@/test/worker?worker' // 如果是计算量很大的代码，可以使用 worker ，开启新的线程加载，与主线程通信
import jsonText from '../../tsconfig.json' // 读取 json 文件
console.log('静态图片--', img)
// console.log('显式加载资源的url--', demo)
// console.log('以字符串形式加载资源--', `类型${typeof test}`, test)
console.log('读取json--', jsonText)

// const worker = new Worker()
// worker.onmessage = function (e) {
//   console.log('worker监听---', e)
// }
