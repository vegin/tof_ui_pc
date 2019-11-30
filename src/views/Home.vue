<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <el-button type='primary' @click="getData">el-button</el-button>
    <p class="test">再测试一下</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods:{
    getData(){
      this.$api.testAddress().then(res=>{
        console.log(res.data);
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/element-variables.scss';
.test{
  color:$--color-primary;
}
</style>