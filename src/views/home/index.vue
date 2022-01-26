<template>
  <div class="child-box">
    <h2 class="title-h2">home 组件</h2>
    <h2 class="title-h2">
      current:
      {{ counter.count }}
    </h2>
    <h2 class="title-h2">
      name:
      {{ name }}
    </h2>
    <h2 @click="updateState">点击更新state</h2>
  </div>
</template>
<script lang="ts">
import { computed, onMounted } from 'vue'
import { useCounterStore, useUserStore } from '@/store/counter'
export default {
  name: 'UserHome',
  setup() {
    const counter = useCounterStore()
    // 一下三种改变stae属性值方法
    counter.count++ // 直接改变
    counter.$patch({
      count: counter.count + 1
    }) // 同步更新
    counter.increment() // function更新

    const userInfo = useUserStore()
    const obj = { job: '' }
    const name = computed(() => userInfo.getName) // 计算属取值
    userInfo.increment()

    const updateState = () => {
      userInfo.$state.name = 'update name'
      userInfo.$state.age = 200
      console.log(userInfo)
    }

    onMounted(() => {
      console.log(counter.count)
    })

    return {
      counter,
      name,
      userInfo,
      updateState
    }
  }
}
</script>
<style lang="scss" scoped>
/* 验证sass */
.child-box {
  .title-h2 {
    /* 验证全局scss变量 */
    color: $theme-color;
  }
  h3 {
    color: aquamarine;
  }
}
</style>
