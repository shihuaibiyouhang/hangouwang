<template>
  <div class="app-find">
  <appFindHeader></appFindHeader>
  <appFindBanner></appFindBanner>
   <appFindSelect></appFindSelect>
   <appFindBox :info='url' v-for="(url,i) in urls" :key="i"></appFindBox>
  <AppFooter></AppFooter>
  </div>
  
</template>

<script>
export default {
  name: 'app-find',
  data () {
    return {
    urls:[
    {title:"精选专题商品",url:'http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1',i:3},
    {title:"全球精选",url:'http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1',i:4}]
    }
  },
  components:{
  appFindHeader,appFindBanner,appFindSelect,
  appFindBox,AppFooter},
 
  
}
import AppFooter from '@/components/footer/AppFooter'
import appFindBanner from './app-find-Banner'
import appFindHeader from './app-find-header'
import appFindSelect from './app-find-select'
import appFindBox from './app-find-box'
import axios from 'axios'

</script>


<style lang="scss">
body{height:100%;overflow-y:scroll}
</style>
