import { createPinia } from 'pinia'
// 引入持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()
// 使用方式
store.use(piniaPluginPersistedstate)

export default store
