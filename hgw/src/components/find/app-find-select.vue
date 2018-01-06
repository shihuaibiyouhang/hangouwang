<template>
  <div class="app-find-select">
  <h2>{{title}}</h2>
  <ul class="ul_1">
  <li v-for=" (item,i) in data"><a><img :src="item.image" :key="i"></a></li>
  </ul>
  <ul class="ul_2" >
    <li v-for="(item2,i) in data2"><a><img :src="item2.image" :key="i"></a></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'app-find-select',
  data () {
    return {
     data:[],
     data2:[],
     title:''
    }
  },methods:{
  getData(){
   let that=this
    axios.get('http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1'
    ).then((response)=>{
     
      this.data=response.data.datas.list[1].explode3.item;
      this.data2=response.data.datas.list[2].home3.item;
      this.title=response.data.datas.list[1].explode3.title
      
    })
  }
  },
  created(){
  this.getData()
 
  
  }
  
}
import axios from 'axios'
</script>


<style lang="scss">
.app-find-select{
  width:100%;
  background:#fff;
  h2{
  border-left: solid 0.04rem #ED5564;
    height: 0.20rem;
    margin: 0.04rem 0 0.06rem 0.08rem;
    padding-left: 0.08rem;
    font-size: 0.16rem;
    line-height: 0.15rem;
  }
  .ul_1{
  width:100%;
  overflow:hidden;

  li{
  width:33.33%;
  float:left;
  img{width:100%}
  }
  }
  .ul_2{
  width:100%;
  overflow:hidden;

  li{
  width:50%;
  float:left;
  img{width:100%}
  }
  }
}
</style>
