<template>
  <div class="app-myshop myshop-box">
   	<myshop-login></myshop-login>
   	<myshop-center></myshop-center>
   	<myshop-end></myshop-end>
  </div>
</template>

<script>
import  MyshopLogin from './MyshopHeader.vue'
import  MyshopCenter from './MyshopCenter.vue'
import  MyshopEnd from './MyshopEnd.vue'
export default {
  name: 'app-myshop',
  components:{
     MyshopLogin,MyshopCenter,MyshopEnd
  },
  data () {
    return {
     
    }
  }
  
}
</script>


<style lang="scss">

</style>
