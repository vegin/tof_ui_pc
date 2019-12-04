<template>
    <div class="filter-line box">
        <p class="name">{{name}}</p>
        <div class="cont box1">
            <ul class="data-list" :class="type=='img'?'data-img-list':'data-word-list'">
                <li v-for="(item,index) in datalist" :key="index" :class="item.checked?'select':''">
                    <div v-if="type=='img'" class="pic"><img :src="item.url" /></div>
                    <p v-else class="word">{{item.name}}</p>
                </li>
            </ul>
        </div>
        <el-button icon="el-icon-plus" size="mini" v-if="isMoreCheck">多选</el-button>
    </div>
</template>

<script>
export default {
    name:'FilterLine',
    props:{
        name:String,
        datalist:Array,
        type:{
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['img', 'normal'].indexOf(value) !== -1
            },
            default:'normal'
        },
        isMoreCheck:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-line{
    padding:10px 0;
    border-bottom:1px solid #eee;
    .name{
        width:100px;
        color:#999;
        font-size:12px;
        line-height:20px;
    }
    .data-list{
        font-size:0;
        li{
            position:relative;
            border:1px solid transparent;
            display:inline-block;
            vertical-align:top;
            font-size:12px;
            cursor:pointer;
        }
        &.data-word-list{
            li{
                padding:0 10px;
                margin-right:20px;
                .word{
                    line-height:20px;
                }
                &.select{
                    border-color:#eb6a6a;
                    color:#eb6a6a;
                }
            }
        }
    }
}
</style>