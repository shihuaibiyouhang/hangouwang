<template>
    <div class="goods-detail-foot block app-goodsfooter" v-if="!shopcarshow">
      <div class="otreh-handle">
        <a  class="kefu"><i></i><p>客服</p></a>
        <a  class="cart"><i></i><p>购物车</p></a>
      </div>
      <div class="buy-handle ">
        <a  class="animation-up add-cart" @click="isShow">加入购物车</a>
        <a  class="animation-up buy-now" @click="isShow">立即购买</a>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import {mapGetters} from 'vuex'
export default {
  name: 'app-goodsfooter',
  data () {
    return {
   
    }
  },
  computed:{
      ...mapState({
          shopcarshow(){
              return this.$store.state.shopcarshow
          }
      }),
      
  },
  methods:{
    ...mapMutations(['isShow'])
  },
  
}
</script>


<style lang="scss">
.goods-detail-foot {
    height: 0.44rem;
    background: rgba(245,245,245,0.95);
    position: fixed;
    z-index: 1;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
}
.goods-detail-foot .otreh-handle {
  float: left;
  width: 35%;
  font-size: 0;
}
.goods-detail-foot .buy-handle {
  float: right;
  width: 65%;
  font-size: 0;
}
.goods-detail-foot .otreh-handle a.kefu {
    width: 44%;
    i {
        background-image: url('http://www.hangowa.com/wap/images/kefu_b.png');
    }
}
.goods-detail-foot .otreh-handle a{
    position: relative;
    z-index: auto;
    display: inline-block;
    height: 0.42891rem;
    text-align: center;
    color: #333;
    border-top: solid 0.01rem #DDD;
    i {
        display: inline-block;
        width: 0.19797rem;
        height: 0.19797rem;
        margin: 0.033rem auto 0.011rem auto;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: 80%;
        opacity: 0.65;
    }
    p {
        display: block;
        height: 0.17594rem;
        font-size: 0.11rem;
        line-height: 0.17594rem;
    }
}
.goods-detail-foot .otreh-handle a.cart {
    width: 55%;
    border-left: solid 0.01rem #DDD;
    i {
        background-image: url('http://www.hangowa.com/wap/images/cart_b.png');
    }
}
.goods-detail-foot .buy-handle a.add-cart {
    float: right;
    width: 55%;
    background-color: #FB6E52;
}
.goods-detail-foot .buy-handle a.buy-now {
    background-color: #ED5564;
}
.goods-detail-foot .buy-handle a {
    display: block;
    height: 0.44rem;
    font-size: 0.154rem;
    font-weight: 600;
    line-height: 0.44rem;
    color: #FFF;
    text-align: center;
}
</style>
