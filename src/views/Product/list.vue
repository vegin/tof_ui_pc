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
                <div class="mc box">
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
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="XX物流"></el-checkbox>
                        <el-checkbox label="货到付款"></el-checkbox>
                        <el-checkbox label="仅显示有货"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeadSearch from '@/components/HeadSearch.vue'
import FilterLine from '@/components/FilterLine.vue'
import Area from '@/components/Area.vue'
export default {
    name:'productList',
    components:{
        HeadSearch,
        FilterLine,
        Area
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
            checkList:['仅显示有货']
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
.first-breadcrumb ::v-deep .el-breadcrumb__inner{font-size:18px;}
.el-breadcrumb__item{line-height:25px;}
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
</style>