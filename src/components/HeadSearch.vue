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
                    <a>{{item.name}}</a>
                </li>
            </ul>
        </el-col>
        <el-col :span="4" class="right" v-if="hasCar">
            <el-button type="default" class="car-btn">
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
        recommendList:Array
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/element-variables.scss';
.head-search{
    position:relative;
    padding:40px 0 30px;
    align-items:flex-start;
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
            height:33px;
            line-height:10px;
        }
    }
    .recommend-list{
        font-size:0;
        margin-top:10px;
        li{
            display:inline-block;
            vertical-align:middle;
            font-size:12px;
            color:#666;
            line-height:18px;
            padding:0 10px;
            &+li{
                border-left:1px solid #ddd;
            }
            a{
                display:block;
                cursor:pointer;
            }
        }
    }
    .car-btn{
        height:35px;
        padding:9px 20px;
        border-color:$search-color;
        i{
            color:#eb6a6a;
        }
    }
}
.search ::v-deep .el-input__inner{height:35px;border-color:$search-color;}
.search ::v-deep .el-input-group__append{background:$search-color;border-color:$search-color;padding:0;height:35px;}
</style>