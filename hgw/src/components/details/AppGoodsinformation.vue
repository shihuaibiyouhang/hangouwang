<template>
  <div class="app-goodsinformation">
   <app-goodshead></app-goodshead>  
   <app-goodsinformimg :data="data"></app-goodsinformimg>
  </div>
</template>

<script>

import AppGoodshead from './AppGoodsHead'
import AppGoodsinformimg from './AppGoodsinformimg'


import axios from 'axios'
export default {
  name: 'app-goodsinformation',
  data () {
    return {
      data:[]
    }
  },
  methods:{
     getData(){
          let that = this 
          //http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_body&goods_id=102852
          axios.get('http://localhost:8080/hg/mo_bile/index.php?act=goods&op=goods_body',{
              params:{goods_id:this.$route.query.id}
          }).then((response)=>{
            that.data=response.data
          })
      },
  },
  created(){
      this.getData()
  },
  components:{AppGoodshead,AppGoodsinformimg}
}
</script>


<style lang="scss">

</style>
