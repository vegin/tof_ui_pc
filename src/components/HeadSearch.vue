<template>
    <div class="head-search">
        <div class="logo"><img :src="require('../assets/images/logo.png')" alt=""></div>
        <div class="middle">
            <el-input placeholder="请输入内容" v-model="input3">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="right">
            <el-button type="default">
                我的购物车
                <el-badge :value="12" class="item">
                    <i class="el-icon-shopping-cart-full"></i>
                </el-badge>
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'HeadSearch'
}
</script>

<style lang="scss" scoped>

</style>