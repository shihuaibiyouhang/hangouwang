<template>
  <div class="app-goodsdetails">
   <app-goodsbanner :banner = "banner"></app-goodsbanner>
   <app-goodshead :getData="getData"></app-goodshead>   
   <app-goodsmain :goods_commend_list = "goods_commend_list" :goods_hair_info = "goods_hair_info" :goods_info = "goods_info" :store_info="store_info" :store_credit = "store_credit"></app-goodsmain>
   <app-goodsfooter></app-goodsfooter>
   <app-goodstocar :goods_info="goods_info" :banner = "banner" :goods_id = "goods_id"></app-goodstocar>   
  </div>
</template>

<script>
import AppGoodsbanner from './AppGoodsBanner'
import AppGoodshead from './AppGoodsHead'
import AppGoodsmain from './AppGoodsMain'
import AppGoodsfooter from './AppGoodsFooter'
import AppGoodstocar from './AppGoodsTocar'
import axios from 'axios'
export default {
  name: 'app-goodsdetails',
  data () {
    return {
     banner:[],
     goods_commend_list:[],
     goods_hair_info:[],
     goods_info:[],
     store_info:[],
     store_credit:[],
     goods_id:this.$route.query.id
    }
  },
  methods:{
     getData(){
          let that = this 
          //http://www.hangowa.com/mo_bile/index.php?act=index
          axios.get('http://localhost:8080/hg/mo_bile/index.php?act=goods&op=goods_detail',{
              params:{goods_id:this.$route.query.id}
          }).then((response)=>{
            that.banner = response.data.datas.goods_image.split(',')
            console.log(response.data.datas)
            this.goods_commend_list = response.data.datas.goods_commend_list
            this.goods_hair_info = response.data.datas.goods_hair_info
            this.goods_info = response.data.datas.goods_info
            this.store_info = response.data.datas.store_info
            this.store_credit = this.store_info.store_credit
          })
      },
  },
  created(){
      this.getData()
  },
  components:{AppGoodsbanner,AppGoodshead,AppGoodsmain,AppGoodsfooter,AppGoodstocar}
}
</script>


<style lang="scss">

</style>
