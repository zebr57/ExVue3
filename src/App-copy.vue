<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import HelloChild from './components/HelloChild.vue'
export default defineComponent({
  components: {
    HelloWorld,
    HelloChild
  },
  provide() {
    return {
      user: computed(() => this.name)
    }
  },
  setup(props) {
    const name = ref('huahua wang')
    return {
      name
    }
  },
  methods: {
    handleChange(val: string) {
      console.log('a', val)
    }
  }
})
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"></HelloWorld>
  <HelloChild msg="childcomps" @childClick="handleChange" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
