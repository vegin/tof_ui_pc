<template>
    <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange">
    </el-cascader>
</template>

<script>
export default {
    name:'Area',
    data() {
      return {
        value: [],
        options: [{
          value: 'zhinan',
          label: '四川省',
          children: [{
            value: 'shejiyuanze',
            label: '成都市',
            children: [{
              value: 'yizhi',
              label: '武侯区'
            }, {
              value: 'fankui',
              label: '高新区'
            }, {
              value: 'xiaolv',
              label: '青羊区'
            }, {
              value: 'kekong',
              label: '郫县'
            }]
          }, {
            value: 'daohang',
            label: '绵阳市',
            children: [{
              value: 'cexiangdaohang',
              label: '涪城区'
            }, {
              value: 'dingbudaohang',
              label: '科创园区'
            }]
          }]
        }]
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
}
</script>