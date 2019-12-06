<template>
    <div class="product-item">
        <div class="pic">
            <div class="inner">
                <img :src="url" alt="">
            </div>
        </div>
        <div class="info">
            <p class="price">¥{{price}}</p>
            <p class="name overflow2">{{name}}</p>
            <ul class="tips" v-if="tipsList.length>0">
                <li v-for="(item,index) in tipsList" :key="index">{{item}}</li>
            </ul>
            <p class="discrib overflow">{{discrib}}</p>
            <p class="follow" @click="followClick"><i class="custom-icons" :class="follow?'el-icon-xin':'el-icon-xin-line'"></i>关注</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'ProductItem',
    props:{
        url:String,
        price:Number,
        name:String,
        tipsList:Array,
        discrib:String,
        follow:Boolean
    },
    methods:{
        followClick:function(){
            this.$emit('followClick');
        }
    }
}
</script>

<style lang="scss" scoped>
.product-item{
    padding:10px;
    border:1px solid transparent;
    .pic{
        position:relative;
        width:100%;
        height:0;
        padding-top:85%;
        .inner{
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            display:flex;
            justify-content: center;
            align-items:center;
            img{
                max-width:100%;
                max-height:100%;
            }
        }
    }
    .info{
        font-size:12px;
        .price{
            padding:10px 0 5px;
            font-size:20px;
            color:#e4393c;
            font-weight:700;
        }
        .name{
            line-height:20px;
            height:40px;
        }
        .tips{
            height:20px;
            overflow:hidden;
            margin-top:5px;
            li{
                font-size:12px;
                height:20px;
                line-height:20px;
                display:inline-block;
                vertical-align:top;
                padding:0 5px;
                background:#f4f4f4;
                color:#666;
                margin-right:5px;
            }
        }
        .discrib{
            margin-top:5px;
            font-size:12px;
            color:#666;
        }
        .follow{
            margin-top:10px;
            font-size:12px;
            cursor:pointer;
            .custom-icons{
                display:inline-block;
                vertical-align:middle;
                margin:-3px 3px 0 0;
                &.el-icon-xin{
                    color:#e4393c;
                }
            }
        }
    }
    &:hover{
        border:1px solid #eee;
    }
}
</style>