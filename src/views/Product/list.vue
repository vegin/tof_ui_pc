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
                <div class="mc">
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
            </div>
        </div>
    </div>
</template>

<script>
import HeadSearch from '@/components/HeadSearch.vue'
import FilterLine from '@/components/FilterLine.vue'
export default {
    name:'productList',
    components:{
        HeadSearch,
        FilterLine
    },
    data:function(){
        return{
            recommendList:[{name:'海信'},{name:'创维'},{name:'夏普'},{name:'乐视'}],
            filerlist:[
                {
                    title:'价格',
                    data:[
                        {name:'1000~2000元',checked:true},
                        {name:'2000~3000元',checked:false},
                        {name:'3000~4000元',checked:false},
                        {name:'4000~5000元',checked:false},
                        {name:'5000元以上',checked:false},
                    ],
                    type:'normal',
                    isMoreCheck:false
                }
            ]
        }
    },
    methods:{
        chooseItem(eq,index){
            let target = this.filerlist[index].data[eq].checked;
            let moreCheck = this.filerlist[index].data[eq].isMoreCheck;
            if(target){
                this.filerlist[index].data[eq].checked = false;
            }else{
                if(!moreCheck){                      
                    for(let i=0;i<this.filerlist[index].data.length;i++){
                        this.filerlist[index].data[i].checked = false
                    }
                }
                this.filerlist[index].data[eq].checked = true;
            }
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
}
</style>