<template>
  <div class="child-box">
    <h2 class="title-h2">children 组件</h2>
    <h3 @click="handleClick">
      msg:
      {{ msg }}
    </h3>
    <!-- <h3>themsg: {{ themsg }}</h3>
    <h3 @click="update">昵称: {{ upo.name }}</h3>
    <h3 @click="update">粉丝: {{ fans.name }}</h3>
    <h2>计算属性</h2>
    <h3>{{ fullName1 }}</h3>
    <h3>{{ fullName2 }}</h3>
    <h3>{{ fullname3 }}</h3> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watch, watchEffect, computed } from 'vue'

export default defineComponent({
  name: 'HelloChild',
  props: ['msg'],
  emits: ['childClick'],
  inject: ['user'],
  beforeCreate() {
    console.log('beforeCreate')
  },
  setup(props, ctx) {
    // 组件还没创建就已经执行了, 且只执行一次,
    // 所以无法使用this 调用vue实例中的属性：data/computed/props
    // 其实所有的composition API相关回调函数中也都不可以
    console.log('setup run ')

    /* 定义响应式数据 */
    const themsg = ref('abcc')
    const upo = ref({
      name: '一条小团团',
      age: 18
    })
    console.log(upo)
    const name = ref('xioamig')
    const fans = reactive({
      name: '王花花',
      age: 18,
      sex: '男',
      zone: {
        zoneName: '黑色玫瑰',
        gameName: '一介莽夫',
        lv: '铂金V'
      }
    })
    const user = reactive({
      firstName: '王',
      lastName: '花花'
    })
    /** 计算属性 */
    // getter
    const fullName1 = computed(() => {
      console.log('fullname')
      return user.firstName + '-' + user.lastName
    })
    // getter setter
    const fullName2 = computed({
      get() {
        console.log('get fullname')
        return user.firstName + '-' + user.lastName
      },
      set(value: string) {
        console.log('set fullname')
        const name = value.split('-')
        user.firstName = name[0]
        user.lastName = name[1]
      }
    })
    /* 监听属性 */
    const fullname3 = ref('1')
    // watch(
    //   user,
    //   () => {
    //     console.log('watch user')
    //     fullname3.value = user.firstName + '-' + user.lastName
    //   },
    //   {
    //     // immediate: true,
    //     deep: true,
    //   }
    // )

    // watch(fullname3, (value) => {
    //   console.log('watch fullname3')
    //   const names = value.split('-')
    //   user.firstName = names[0]
    //   user.lastName = names[1]
    // })

    watch([() => user.firstName, () => user.lastName, fullname3], (values) => {
      console.log('监听多个数据', values)
    })

    const update = () => {
      themsg.value = 'cbaa'
      upo.value.name = '一条小团团粉丝'
      fans.name = '梨花'
      user.firstName = '李'
      fullname3.value = 'what`s up'
      console.log(upo, 'upo')
      console.log(fans, 'fans')
    }
    const handleClick = () => {
      ctx.emit('childClick', '我是子组件传递的值')
    }
    return {
      themsg,
      upo,
      fans,
      fullName1,
      fullName2,
      fullname3,
      update,
      handleClick
    }
  },
  created() {
    console.log(this.user.value)

    // 验证环境变量
    import.meta.env.VITE_ENV = 'stage'
    console.log(import.meta.env, '-- env')

    // 验证配置别名
    import('@/assets/logo.png').then((res) => {
      console.log(res)
    })

    // 验证静态资源的使用
    import('@/utils/use-static.js')
  }
})
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
