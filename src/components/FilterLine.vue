<template>
    <div class="filter-line box">
        <p class="name">{{name}}</p>
        <div class="cont box1">
            <ul class="data-list" :class="type=='img'?'data-img-list':'data-word-list'">
                <li v-for="(item,index) in datalist" :key="index" :class="item.checked?'select':''" @click="choose(index)">
                    <div v-if="type=='img'" class="pic"><img :src="item.url" /></div>
                    <p v-else class="word">{{item.name}}</p>
                    <i class="custom-icons el-icon-choose"></i>
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
        datalist:Array,            //数据列表
        type:{                     //展示类型：图片或文字
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['img', 'normal'].indexOf(value) !== -1
            },
            default:'normal'
        },
        isMoreCheck:{             //是否支持多选
            type:Boolean,
            default:false
        }
    },
    methods:{
        choose:function(eq){
            this.$emit('chooseItem',eq);
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
            .custom-icons{
                position:absolute;
                right:0;
                bottom:0;
                font-size:18px;
                display:none;
            }
            &.select{
                border-color:#eb6a6a;
                color:#eb6a6a;
                .custom-icons{
                    display:block;
                }
            }
        }
        &.data-word-list{
            li{
                padding:0 10px;
                margin-right:20px;
                border-radius:3px;
                .word{
                    line-height:20px;
                }
            }
        }
    }
}
</style>