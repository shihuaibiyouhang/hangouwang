<template>
  <div class="app-type-box">
   <appTypeItem v-for="h in ds" :key="h.cat_id" :h="h"></appTypeItem>

  </div>

</template>

<script>
export default {
  name: 'app-type-box',
  data () {
    return {
     ds:[]
    }
  },
components:{appTypeItem},
methods:{
  boxGetChild:function(){
  let that=this;
   bus.$on('postChild',function(datas){
  that.ds=datas.data.datas.class_list
  console.log(that.ds)
   });

  }
},
created(){

  this.boxGetChild();
 
}
}
  

import appTypeItem from './type-item'
import bus from '../../../modules/bus.js'
</script>


<style lang="scss">
.app-type-box{
      background-color: #FCFCFC;
    position: absolute;
    z-index: 1;
    left: .9rem;
    top: .42rem;
    bottom: 0;
    right: 0;
    overflow: hidden;
    first-child{
    background:red
    }
}
</style>
