<template>
  <div class="goods-drinks">
    <div class="titbar">{{goodsdata_c.title}}</div>
    <div class="desc">
      <span>小编向您推荐以下商品</span>
    </div>
    <ul>
      <li v-for="goods in goodsinfo_c" :key="goods.goods_id">
        <div @click="turnout('goodsdetails')">
          <div class="goodspic">
            <img :src="goods.goods_image" alt="" @click="passGid(goods)">
          </div>
          <dl class="goodsinfo">
            <dt class="goodsname">{{goods.goods_name}}</dt>
            <dd class="goodsprice">
              ￥<em>{{goods.goods_promotion_price}}</em>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import bus from '@/modules/bus.js'
export default {
  props:['goodsdata_c','goodsinfo_c'],
  name: 'goods-drinks',
  data () {
    return {
  
    }
  },
  methods:{
    turnout(name){
      this.$router.push({name})
    },
    passGid(goods){
      bus.$emit('gid',goods.goods_id)
    }
  }
  
}
</script>


<style lang="scss">
  .goods-drinks{
    background:#fff;
    width: 100%;
    .titbar{
      font-size: 0.15rem;
      font-weight: normal;
      padding: 0.11rem 0 0;
      text-align: center;
      height:0.17594rem;
      line-height: 0.17594rem;
      border-left: 0;
      color: #333;
      margin: 0.11rem 0 0.11rem 0.066rem;
    }
    .desc{
      font-size: 0.12rem;
      font-weight: normal;
      text-align: center;
      line-height: 0.17rem;
      border-left: 0;
      color: #999;
      span{
        display: inline-block;
        position: relative;
      }
     ::before{
          content: '';
          display: block;
          width: 0.17594rem;
          height: 0.01rem;
          background: #ddd;
          position: absolute;
          top: 0.07rem;
          left: -0.275rem;
      }
      ::after{
          content: '';
          display: block;
          width: 0.17594rem;
          height: 0.01rem;
          background: #ddd;
          position: absolute;
          top: 0.07rem;
          right: -0.275rem;
      }
    }
    ul{
      li{
          margin: 0.11rem 1% 0 1.5%;
          background-color: #FFF;
          vertical-align: top;
          display: inline-block;
          width: 47%;
          overflow: hidden;
          border-radius: 0.044rem;
          div{
            display: block;
            .goodspic{
              width:100%;
              img{
                width: 100%;
              }
            }
            dl{
              padding:0.044rem;
              dt{
                display: block;
                font-size: 0.14rem;
                line-height: 0.17599rem;
                color: #000;
                height: 0.35188rem;
                overflow: hidden;
              }
              dd{
                    display: block;
                    font-size: 0.12rem;
                    line-height: 0.022rem;
                    height: 0.22rem;
                    margin-top: 0.088rem;
                    padding-top: 0.088rem;
                    color: #DB4453;
                    border-top: solid 0.011rem #EEE;
                    em{
                      font-size: 0.14rem;
                      font-weight: 600;
                    }
              }
            }
          }
      }
    }
  }
  
  
</style>
