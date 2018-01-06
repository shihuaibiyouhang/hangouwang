<template>
  <div class="type-nav">
    <div class="type-main-nav">
        <ul>
        <li v-for="item in datas" :key="item.cat_id" 
        @click="getChild(item.cat_id);showType=item.cat_id" :class='[showType==item.cat_id?"type-active":"",showType==item.cat_id?"type-li":""]'  >
        <a><i class="fa fa-star-o"></i><div class="category-name">{{item.cat_name}}</div>
        </a>
        </li>
        </ul>
    </div>

  </div>
</template>

<script>
import bus from '../../../modules/bus.js'
import axios from 'axios'
export default {
  name: 'type-nav',
  data(){
    return {
     showType:35,
     datas:[],
     childs:[],
     
   
    }
  },
  methods:{
  getData:function(){
    axios.get("http://www.hangowa.com/mo_bile/index.php?act=goods_class").then((response)=>{
    this.datas=response.data.datas.category_list;
    
    })
  },
  getChild:function(id){
    console.log(id);
   axios.get("http://www.hangowa.com/mo_bile/index.php?act=goods_class&op=get_child_all&",{
    params:{
    gc_id:id
    }
    }).then((response)=>{
     
    this.childs=response;
    console.log(this.childs)
     bus.$emit("postChild",this.childs)
    
    })
  },
  postChild:function(){
  return this.childs
  }
  },
  created(){
  this.getData();
  this.getChild(35);
  },
  
  }


</script>


<style lang="scss">
.type-active{
    color:#ED5564;
}
.type-li{
    border-bottom: solid 0.022rem #ED5564;
    color:#ED5564!important;
}
.type-nav{
    display: block;
    margin-top: .48rem;
    background-color: #F5F5F5;
.type-main-nav{
    color: #999;
    background:#F8F8F8;
    width: 0.92rem;
 
    display: block;
    float: left;
    position: absolute;
    z-index: 1;
    top: .41rem;
    bottom: 0;
    left: 0;
    overflow: hidden;
    ul{
    padding: 0 0.11rem;
    position: absolute;
    li{
    width: 0.62rem;
    height:0.62rem;
    a{
    display:block;
    text-align:center;
    i{
    width: .21rem;
    height: .21rem;
    padding: 0.13rem 0 0.05rem 0;
    margin: 0 auto;
    font-size:25px;
    display:block;
    };
    .category-name{
    font-size: 0.14rem;
    line-height: 0.2rem;
   
    text-align: center;
    width: 100%;
    height: 0.2rem;
    padding-bottom: 0.06rem;
    border-bottom: solid 0.01rem #EEE;
    }

    }
    }
    }
}
}

</style>
