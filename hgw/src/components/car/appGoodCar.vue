<template>
  <div class="app-good-car app-box">
  
<appGoodCarItem></appGoodCarItem>
<appGoodCarItem></appGoodCarItem>
     <!--  <div class="item-list">
        
        <p v-if="!car.length">空空如也，快去购买吧</p>
        
        <AppGoodCarItem v-else v-for="item in car" :key='item.id' :info='item'></AppGoodCarItem>
      </div> -->
    
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import appGoodCarItem from './appGoodCarItem'
export default {
  name:'app-good-car',
  components: {
 appGoodCarItem
  },
  // computed:{
  //   ...mapState(['car'])
  // },
  // methods:{
  //   ...mapActions(['initCar'])
  // },
  // created(){
  //   //初始化
  //   this.initCar()
  // }
}
</script>
<style lang="scss" scoped>

</style>


