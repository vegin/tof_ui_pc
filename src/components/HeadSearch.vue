<template>
    <el-row type="flex" class="head-search">
        <el-col :span="5">
            <div class="logo"><img :src="require('../assets/images/logo.png')" alt=""></div>
        </el-col>
        <el-col :span="15">
            <el-input :placeholder="placeholder" class="search">
                <el-button slot="append" class="search-btn">搜索</el-button>
            </el-input>
            <ul class="recommend-list" v-if="recommendList&&recommendList.length>0">
                <li v-for="(item,index) in recommendList" :key="index">
                    <a>{item.name}</a>
                </li>
            </ul>
        </el-col>
        <el-col :span="4" class="right" v-if="hasCar">
            <el-button type="default">
                我的购物车
                <el-badge :value="12" class="item">
                    <i class="car-icon el-icon-shopping-cart-full"></i>
                </el-badge>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'HeadSearch',
    props:{
        placeholder:{
            type:String,
            default:'请输入关键字'
        },
        hasCar:{
            type:Boolean,
            default:true
        },
        recommendList:Array,
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/element-variables.scss';
.head-search{
    position:relative;
    padding:20px 0;
    align-items:center;
    .logo{
        width:180px;
        height:60px;
        text-align:center;
        line-height:60px;
    }
    .right{
        text-align:right;
        .car-icon{
            font-size:18px;
        }
    }
    .search{
        .search-btn{
            background:$search-color;
            color:#fff;
            letter-spacing: 5px;
            padding-left:25px;
        }
    }
}
.search ::v-deep .el-input__inner{border-color:$search-color;}
</style>