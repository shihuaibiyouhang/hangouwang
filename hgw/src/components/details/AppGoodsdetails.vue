<template>
  <div class="app-goodsdetails" ref="goods">
    <img src="" alt="">
  </div>
</template>

<script>
import axios from 'axios'
import bus from '@/modules/bus.js'
export default {
  name: 'app-goodsdetails',
  data () {
    return {
     
    }
  },
  methods:{
     getData(value){
          let that = this
          //http://www.hangowa.com/mo_bile/index.php?act=index
          axios.get('http://localhost:8080/hg/mo_bile/index.php?act=goods&op=goods_detail',{
              params:{goods_id:value}
          }).then((response)=>{
            console.log(response.data.datas)
          })
      }
  },
  created(){
    bus.$on('gid',value=>{
      this.getData(value)
    })
  }
  
}
</script>


<style lang="scss">

</style>
