<template>
  <div class="app-find-header">
  <a class="h-return" href="javascript:history.go(-1)"><i class="fa fa-angle-left"></i></a>
  <h1>发现</h1>
  <div class="header-r" @click="c"><a class="h-more" >. . .</a></div>
  <div class="click-show-f" :class="{'f-show':isShow}">
    <div class="click-show">
      <span class="arrow"></span>
      <ul>
        <li v-for="ref in refs" @click="to(ref.name)"><a><i :class=ref.class></i>{{ref.title}}</a></li>
    </ul>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app-find-header',
  data () {
    return {
     isShow:true,
     refs:[
     {class:"fa fa-home",title:"首页",name:'main'},
     {class:"fa fa-search",title:"搜索",name:'type'},
     {class:"fa fa-car",title:"购物车",name:'car'},
     {class:"fa fa-user-o",title:"我的商城",name:'myShop'},
     {class:"fa fa-commenting-o",title:"消息",name:'Message'}]
    }
  },
  methods:{
    c:function(){
      this.isShow=!this.isShow;
  },
    to:function(name){
        this.$router.push(name)
    }

  }
}
</script>


<style lang="scss">
.app-find-header{
	background: #e7e7e9;
    padding: 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:0.429rem;
  width:100%;
  position:fixed;
  z-index:88;
    top:0;
    left:0;

.h-return{
	height:0.179rem;
	font-size:0.186rem;
  color:#333;
  font-size:.24rem;
}
.header-r{

  a{
  width: 0.22rem;
    height: 0.22rem;
    padding: 0.12rem 0.17rem;

	font-size:0.186rem;
	font-weight:600;
  z-index:999;
  }
}
h1{
	font-size:0.186rem;

}
.f-show{display:none}
.click-show-f{
   z-index:-1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    .click-show{
        display: block;
    position: absolute;
    top: 0.31rem;
    right: 0.05rem;
    width: 1.2rem;

    .arrow{
    display: block;
    float: right;
    width: 0;
    height: 0;
    margin-right: 0.09rem;
    font-size: 0;
    line-height: 0;
    border-width: 0.09rem;
    border-color: transparent transparent rgba(85,85,85,0.95) transparent;
    border-style: dashed dashed solid dashed;
    }
    ul{
    display: block;
    clear: both;
    background: rgba(85,85,85,0.95);
    border-radius: 0.05rem;

    li{
        position: relative;
    z-index: 100;
    border-bottom: solid 0.01rem #999;
    a{
    display: block;
    height: 0.2rem;
    padding: 0.12rem;
    font-size: 0.14rem;
    line-height: 0.2rem;
    color: #FFF;
    i{display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    vertical-align: middle;
    margin-right: 0.08rem;
    background-position: 50% 50%;
    background-size: 100%;
    background-repeat: no-repeat;}
    }
    }
    }
    }
}
}
</style>
