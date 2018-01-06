<template>
  <div class="app-type">
    <appTypeHeader></appTypeHeader>
    <appTypeNav ref="a"></appTypeNav>
     <appTypeBox ref="b"></appTypeBox>
  </div>
</template>

<script>

export default {
  name: 'app-type',
  data () {
    return {
     
    }
  },
  components:{appTypeHeader,appTypeNav,appTypeBox},
  methods:{
  requireData:function(){
  return this.$refs.a.datas

  }
  },
  mounted(){
 
  }
  
}
import appTypeHeader from './type-header'
import appTypeNav from './type-nav'
import appTypeBox from './type-box'
</script>

<style lang="scss">

</style>
