<template>
    <div class="footer">
        <div class="container">
            <ul class="box box-center">
                <li v-for="(item,index) in footerlist" :key="index" class="box1 box box-center">
                    <i class="icon" :class="'icon'+(index+1)"></i>
                    <div class="info">
                        <p class="name">{{item.name}}</p>
                        <p class="discrib">{{item.discrib}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    data(){
        return{
            footerlist:[
                {name:'正品保障',discrib:'正品保障、提供发票'},
                {name:'急速物流',discrib:'如约送货、送货入户'},
                {name:'售后无忧',discrib:'30天包退、365天包换'},
                {name:'特色服务',discrib:'私人订制家电套餐'},
                {name:'帮助中心',discrib:'您的购物指南'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    background:#f5f5f5;
    ul{
        padding:30px 0;
        li{
            font-size:12px;
            .icon{
                display:inline-block;
                vertical-align:middle;
                width:54px;
                height:54px;
                margin-right:10px;
                @for $i from 1 through 5{
                    &.icon#{$i}{
                        background:url('../assets/images/footer-icon'+$i+'.png') no-repeat center;
                        background-size:cover;
                    }
                }
            }
            .name{
                margin-bottom:10px;
            }
            .discrib{
                color:#666;
            }
        }
    }
}
</style>