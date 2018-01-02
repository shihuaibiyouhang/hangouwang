<template>
  <div class="app-main">
    <main-header :data="data"></main-header>
    <main-nav></main-nav>
    <main-goods :goodsdata_a="goodsdata_a" :goodsinfo_a="goodsinfo_a" :goodsdata_b="goodsdata_b" :goodsinfo_b="goodsinfo_b" :goodsdata_c="goodsdata_c" :goodsinfo_c="goodsinfo_c"></main-goods>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from './MainHeader'
import MainNav from './MainNav'
import MainGoods from './MainGoods'
import MainFooter from './MainFooter'
import axios from 'axios'

export default {
  name: 'app-main',
  data () {
    return {
      data:[],
      goodsdata_a:[],
      goodsinfo_a:[],
      goodsdata_b:[],
      goodsinfo_b:[],
      goodsdata_c:[],
      goodsinfo_c:[],
    }
  },
  methods:{
      getData(){
          let that = this
          //http://www.hangowa.com/mo_bile/index.php?act=index
          axios.get('http://localhost:8080/hg/mo_bile/index.php?act=index',{
              params:{}
          }).then((response)=>{
             that.data =  response.data.datas.list[0].adv_list.item[0].image
             that.goodsdata_a = response.data.datas.list[1].goods
             that.goodsinfo_a = that.goodsdata_a.item
             that.goodsdata_b = response.data.datas.list[2].goods
             that.goodsinfo_b = that.goodsdata_b.item
             that.goodsdata_c = response.data.datas.list[3].goods
             that.goodsinfo_c = that.goodsdata_c.item
          })
      }
  },
  created(){
    this.getData()
  },
  components:{MainHeader,MainNav,MainGoods,MainFooter}
}
</script>


<style lang="scss">
  
  
</style>
