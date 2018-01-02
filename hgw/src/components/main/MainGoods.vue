<template>
  <div class="main-goods">
  <goods-over :goodsdata_a="goodsdata_a" :goodsinfo_a="goodsinfo_a"></goods-over>
  <goods-sock :goodsdata_b="goodsdata_b" :goodsinfo_b="goodsinfo_b"></goods-sock>
  <goods-drinks :goodsdata_c="goodsdata_c" :goodsinfo_c="goodsinfo_c"></goods-drinks>
  
  
  </div>
</template>

<script>
import GoodsOver from './GoodsOver'
import GoodsSock from './GoodsSock'
import GoodsDrinks from './GoodsDrinks'


export default {
  props:['goodsdata_a','goodsinfo_a','goodsdata_b','goodsinfo_b','goodsdata_c','goodsinfo_c'],
  name: 'main-goods',
  data () {
    return {
     
    }
  },
  methods:{
      
  },
  components:{GoodsOver,GoodsSock,GoodsDrinks}
}
</script>


<style lang="scss">
  .main-goods{
    width: 100%;
    overflow: hidden;
    margin:0 auto;
    background: #e7e7e9;
    padding-bottom: 0.2rem;
  }
  
  
</style>
