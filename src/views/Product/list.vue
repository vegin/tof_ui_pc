<template>
    <div>
        <div class="ad">
            <img :src="require('../../assets/images/ad.jpg')" alt="">
        </div>
        <div class="container">
            <head-search :recommendList="recommendList"></head-search>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }" class="first-breadcrumb">家用电器</el-breadcrumb-item>
                <el-breadcrumb-item>电视</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="filter-cont">
                <div class="mt">
                    <span class="result">平板电视</span>
                    商品筛选
                    <span class="totle">共720个商品</span>
                </div>
                <div class="mc" :class="filterFix?'mc-fixed':''" ref="filterMc">
                    <filter-line
                        v-for="(item,index) in filerlist"
                        :key="index"
                        :name="item.title"
                        :datalist="item.data"
                        :type="item.type"
                        :isMoreCheck="item.isMoreCheck"
                        @chooseItem="chooseItem($event,index)"
                    />
                </div>
                <p class="switch" v-if="showFilterMore" @click="showMore">{{filterFix?'更多选项（品牌类型、用户优选、大家说等）':'收起更多'}}<i :class="filterFix?'el-icon-arrow-down':'el-icon-arrow-up'"></i></p>
            </div>
            <div class="goods-cont">
                <div class="mt box box-center">
                    <ul class="sort-list box1">
                        <li class="active">综合排序</li>
                        <li>销量</li>
                        <li>价格</li>
                        <li>评论数</li>
                        <li>上架时间</li>
                    </ul>
                    <div class="send">
                        <p>配送至</p>
                        <Area />
                    </div>
                    <el-checkbox-group v-model="checkList" class="checkbox-group">
                        <el-checkbox label="XX物流"></el-checkbox>
                        <el-checkbox label="货到付款"></el-checkbox>
                        <el-checkbox label="仅显示有货"></el-checkbox>
                    </el-checkbox-group>
                    <div class="small-pagination box box-center">
                        <a class="pagination-btn"><i class="el-icon-arrow-left"></i></a>
                        <p><span class="active">1</span>/<span>12</span></p>
                        <a class="pagination-btn"><i class="el-icon-arrow-right"></i></a>
                    </div>
                </div>
                <div class="mc">
                    <div class="product-list">
                        <product-item 
                            v-for="(item,index) in productList" 
                            :key="index"
                            :url="item.url"
                            :name="item.name"
                            :price="item.price"
                            :discrib="item.discrib"
                            :tipsList="item.tipsList"
                            :follow="item.follow"
                            @followClick="followClick(index)"
                        >   
                        </product-item>
                    </div>
                </div>
                <div class="pagination">
                    <custom-pagination></custom-pagination>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import HeadSearch from '@/components/HeadSearch.vue'
import FilterLine from '@/components/FilterLine.vue'
import Area from '@/components/Area.vue'
import ProductItem from '@/components/ProductItem.vue'
import CustomPagination from '@/components/CustomPagination.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:'productList',
    components:{
        HeadSearch,
        FilterLine,
        Area,
        ProductItem,
        CustomPagination,
        Footer
    },
    data:function(){
        return{
            recommendList:[{name:'海信'},{name:'创维'},{name:'夏普'},{name:'乐视'}],
            showFilterMore:false,    //筛选是否显示更多
            filterFix:false,        //筛选高度是否固定
            filerlist:[
                {
                    title:'品牌：',
                    data:[
                        {url:require('../../assets/images/brand.jpg'),checked:false},
                        {url:require('../../assets/images/brand.jpg'),checked:false},
                        {url:require('../../assets/images/brand.jpg'),checked:false},
                        {url:require('../../assets/images/brand.jpg'),checked:false},
                        {url:require('../../assets/images/brand.jpg'),checked:false}
                    ],
                    type:'img',
                    isMoreCheck:true
                },
                {
                    title:'价格：',
                    data:[
                        {name:'1000~2000元',checked:false},
                        {name:'2000~3000元',checked:false},
                        {name:'3000~4000元',checked:false},
                        {name:'4000~5000元',checked:false},
                        {name:'5000元以上',checked:false},
                    ],
                    type:'normal',
                    isMoreCheck:false
                },
                {
                    title:'屏幕尺寸：',
                    data:[
                        {name:'78英寸及以上',checked:false},
                        {name:'70～75英寸',checked:false},
                        {name:'65英寸',checked:false},
                        {name:'58～60英寸',checked:false},
                        {name:'55英寸',checked:false},
                        {name:'48～50英寸',checked:false},
                        {name:'39～45英寸',checked:false},
                        {name:'32英寸及以下',checked:false},
                    ],
                    type:'normal',
                    isMoreCheck:true
                },
                {
                    title:'分辨率：',
                    data:[
                        {name:'8k超高清（7680×4320）',checked:false},
                        {name:'4k超高清（3840×2160）',checked:false},
                        {name:'全高清（1920×1080）',checked:false},
                        {name:'高清（1366×768）',checked:false},
                    ],
                    type:'normal',
                    isMoreCheck:false
                },
                {
                    title:'观看距离：',
                    data:[
                        {name:'3.5m以上（70英寸以上）',checked:false},
                        {name:'3m-3.5m（56-65英寸）',checked:false},
                        {name:'2.5m-3m（46-55英寸）',checked:false},
                        {name:'2m-2.5m（33-45英寸）',checked:false},
                        {name:'2m以下（≦32英寸）',checked:false},
                    ],
                    type:'normal',
                    isMoreCheck:false
                }
            ],
            checkList:['仅显示有货'],
            productList:[
                {
                    url:require('@/assets/images/img.jpg'),
                    name:'乐视（Letv）超级电视 Y43 43英寸 1GB电视',
                    price:1049.00,
                    discrib:'Letv超级电视...',
                    follow:false,
                    tipsList:['39-45英寸','全高清（1920*1080）']
                },
                {
                    url:require('@/assets/images/img.jpg'),
                    name:'乐视（Letv）超级电视 Y43 43英寸 1GB电视',
                    price:1049.00,
                    discrib:'Letv超级电视...',
                    follow:false,
                    tipsList:['39-45英寸','全高清（1920*1080）']
                }
            ]
        }
    },
    methods:{
        chooseItem(eq,index){
            let target = this.filerlist[index].data[eq].checked;
            let moreCheck = this.filerlist[index].isMoreCheck;
            if(target){
                this.filerlist[index].data[eq].checked = false;
            }else{
                if(!moreCheck){                      
                    for(let i=0;i<this.filerlist[index].data.length;i++){
                        this.filerlist[index].data[i].checked = false
                    }
                    this.filerlist[index].data[eq].checked = true;
                }else{
                    this.filerlist[index].data[eq].checked = true;
                }
            }
        },
        showMore(){
            this.filterFix = !this.filterFix;
        },
        followClick(index){
            this.productList[index].follow = !this.productList[index].follow;
        }
    },
    mounted(){
        let filterHeight = this.$refs.filterMc.offsetHeight;
        console.log(filterHeight);
        if(filterHeight>200){
            this.showFilterMore = true;
            this.filterFix = true;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/element-variables.scss';
.first-breadcrumb ::v-deep .el-breadcrumb__inner{font-size:18px;}
.el-breadcrumb__item{line-height:25px;}
.container{
    padding:10px 0;
}
.filter-cont{
    margin-top:10px;
    .mt{
        height:35px;
        line-height:35px;
        padding:0 10px;
        background:#f8f8fa;
        .result{
            margin-right:10px;
            color:#f30213;
        }
        .totle{
            font-size:12px;
            margin-left:20px;
            color:#666;
        }
    }
    .mc-fixed{
        height:200px;
        overflow:hidden;
    }
    .switch{
        padding:10px 0;
        font-size:12px;
        font-weight:700;
        text-align:center;
        cursor:pointer;
    }
}
.goods-cont{
    .mt{
        background:#f8f8fa;
        padding:0 10px;
        .sort-list{
            li{
                display:inline-block;
                vertical-align:middle;
                height:36px;
                line-height:36px;
                border-bottom:3px solid transparent;
                font-size:12px;
                margin-right:30px;
                cursor:pointer;
                &.active{
                    color:#3a4172;
                    font-weight:700;
                    border-bottom-color:#3a4172;
                }
            }
        }
        .send{
            p{
                font-size:12px;
                margin-right:5px;
                display:inline-block;
                vertical-align:middle;
            }
        }
        .checkbox-group{
            margin:0 15px;
            .el-checkbox{
                margin-right:15px;
            }
        }
        .small-pagination{
            font-size:12px;
            .pagination-btn,span{
                padding:0 3px;
            }
            .active{
                color:#f30213;
            }
        }
    }
    .mc{
        padding:10px 0;
        .product-list{
            font-size:0;
            .product-item{
                display:inline-block;
                vertical-align:top;
                width:20%;
            }
        }
    }
    .pagination{
        text-align:right;
    }
}
.send ::v-deep .el-input__inner{height:25px;font-size:12px;}
.checkbox-group ::v-deep .el-checkbox__label{font-size:12px;}
.checkbox-group ::v-deep .el-checkbox.is-checked .el-checkbox__label{color:$primary-color;}
.checkbox-group ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,.checkbox-group ::v-deep .el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:$primary-color;border-color:$primary-color;}
</style>