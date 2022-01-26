// 通过 defineStore 定义一个仓库
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
export const useUserStore = defineStore('info', {
  state: () => {
    return {
      name: '王花花',
      age: 18
    }
  },
  getters: {
    getName: (state) => state.name + 'getters'
  },
  actions: {
    increment() {
      this.name += 'actions'
      this.age += 1
    }
  },

  // 开启数据缓存   https://github.com/prazdevs/pinia-plugin-persistedstate
  persist: {
    key: 'user',
    storage: sessionStorage, // 存储位置
    paths: ['name'], // 用于部分持久化状态的点表示法路径数组，表示不会持久化任何状态（默认为并保留整个状态）
    overwrite: true
  }
})
