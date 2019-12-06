<template>
    <div class="pagination">
        <p class="discrib">当前第<span class="current">1</span>/<span class="totle-page">270</span>页</p>
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'CustomPagination',
    data() {
      return {
        currentPage: 4
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/element-variables.scss';
.pagination{
    .discrib{
        display:inline-block;
        vertical-align:middle;
        font-size:12px;
        margin-right:10px;
        color:#666;
    }
    .el-pagination{
        display:inline-block;
        vertical-align:middle;
    }
}
.pagination ::v-deep .el-pagination .el-pagination__total{vertical-align:sub;}
.pagination ::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active{background-color:$primary-color;}
</style>