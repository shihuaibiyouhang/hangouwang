<template>
   <li class="app-find-item"><a><div class="good-img"><img :src="data.goods_image"></div><div class="good-info"><dt class="good-name">{{data.goods_name}}</dt><dd class="good-price">￥<em>{{data.goods_promotion_price}}</em></dd></div></a></li>
</template>

<script>
export default {
  name: 'app-find-item',
  data () {
    return {
     
    }
  },
  props:['data'],
  created(){

  }
  
}


</script>


<style lang="scss">
 .app-find-item{
    margin: 0.13rem 1% 0 2%;
    background-color: #FFF;
    vertical-align: top;
    display: inline-block;
    width: 47%;
    overflow: hidden;
    border-radius: 0.05rem;
    .good-img{
    img{width:100%}
    }
    .good-info{
    padding:0.05rem;
    
    dt{
    display: block;
    font-size: 0.15rem;
    line-height: 0.21rem;
    color: #000;
    height: 0.42rem;
    overflow: hidden;
    }
    dd{
       display: block;
    font-size: 0.14rem;
    line-height: 0.22rem;
    height: 0.22rem;
    font-weight:bold;
    margin-top: 0.09rem;
    padding-top: 0.09rem;
    color: #DB4453;
    border-top: solid 0.01rem #EEE;

    }
    }
 }
</style>
