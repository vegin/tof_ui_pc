<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-button type='primary' @click="changeTheme">el-button</el-button>
    <p :style="{'color':Theme.primaryColor}">测试theme</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Theme from '../theme/index.js'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      Theme
    }
  },
  methods:{
    changeTheme:()=>{
      Theme.set('default')
    }
  }
}
</script>
