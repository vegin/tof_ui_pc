<template>
    <div>
        <div class="ad">
            <img :src="require('../../assets/images/ad.jpg')" alt="">
        </div>
        <div class="container">
            <head-search></head-search>
        </div>
    </div>
</template>

<script>
import  HeadSearch from '@/components/HeadSearch.vue'
export default {
    name:'productList',
    components:{
        HeadSearch
    }
}
</script>