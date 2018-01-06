<template>
   <div class="app-goodsmain">
      <div class="goods-detail-name">
        <dl>
          <dt>{{goods_info.goods_name}}</dt>
          <dd>{{goods_info.goods_jingle}}</dd>          
        </dl>
      </div>
      <div class="goods-detail-price">
        <dl>
          <dt>￥<em>{{goods_info.goods_price}}</em></dt>        
        </dl>
        <span class="sold">销量：{{goods_info.goods_salenum}}件</span>
      </div>
      <div class="goods-detail-item">
        <div class="itme-name">送至</div>
        <div class="item-con">
          <div>
            <dl>
              <dt>
                <span>{{goods_hair_info.area_name}}</span>
                <strong>{{goods_hair_info.if_store_cn}}</strong>
              </dt>
              <dd>{{goods_hair_info.content}}</dd>          
            </dl>
          </div>
          <div class="item-more location"></div>
        </div>
      </div>
      <div class="goods-detail-item">
        <div class="itme-name">已选</div>
        <div class="item-con">
          <dl>
            <dt>
              <span class="defaultchoose">默认</span>
            </dt>        
          </dl>
          <div class="item-more migi"></div>
        </div>
      </div>
      <div class="goods-detail-comment">
        <div class="title">
          <div class="comment">
            商品评价
            <span class="rate">好评率<em>100%</em></span>
            <span class="rate-num">（{{goods_info.evaluation_count}}人评价）</span>
            <div class="item-more migi"></div>
          </div>
        </div>
      </div>
      <div class="goods-detail-store">
        <a href="##">
          <div class="store-name"><i class="icon-store"></i>{{store_info.store_name}}</div>
          <div class="store-rate">
            <span class="">描述相符
              <em>{{store_credit.store_desccredit.credit}}</em>
              <i></i>
            </span>
            <span class="">服务态度
              <em>{{store_credit.store_servicecredit.credit}}</em>
              <i></i>
            </span>
            <span class="">发货速度
              <em>{{store_credit.store_deliverycredit.credit}}</em>
              <i></i>
            </span>
          </div>
          <div class="item-more migi"></div>
        </a>
      </div>
      <div class="goods-detail-recom">
      <h4>店铺推荐</h4>
      <ul>
        <li v-for="goods in goods_commend_list" :key="goods.goods_id" @click="turnout('goodsdetails',goods.goods_id)"> 
          <div class="goodsdiv">  
            <div class="pic"><img :src="goods.goods_image_url"></div>
            <dl>
              <dt>{{goods.goods_name}}</dt>
              <dd>￥<em>{{goods.goods_price}}</em></dd>
            </dl>
          </div>
        </li>
      </ul>
    </div>
    <div class="goods-detail-bottom">
      <a>点击查看商品详情</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props:['goods_commend_list','goods_hair_info','goods_info','store_info','store_credit'],
  name: 'app-goodsmain',
  data () {
    return {
    
    }
  },
  methods:{
    turnout(name,id){
        this.$router.push({name: name, query: {id: id}})  
        this.$router.go(0)
    },
  }
}
</script>


<style lang="scss">
  .app-goodsmain{
    .item-more {
      position: absolute;
      z-index: -1;
      top: 0.11rem;
      right: 0.11rem;
      display: block;
      width: 0.17594rem;
      height: 0.19797rem;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 80%;
      opacity: 0.55;
    }
    .location{
      background-image: url('http://www.hangowa.com/wap/images/location_b.png');
    }
      background: #F5F5F5;
      position: relative;
      z-index: 1;
      margin-top: 3.52rem;
      .goods-detail-name {
        display: block;
        padding: 0.11rem 0.11rem 0.055rem 0.11rem;
        background-color: #FFF;
        border-top: solid 0.01rem #EEE;
        dt{
          display: block;
          font-size: 0.15rem;
          line-height: 0.18rem;
        }
        dd{
          margin-top: 0.03rem;
          font-size: 0.11rem;
          color: #777;
          line-height: 0.15rem;
        }
      }
      .goods-detail-price {
        position: relative;
        z-index: 1;
        display: block;
        padding: 0 0.11rem;
        background-color: #FFF;
        dl{
          display: inline-block;
          dt{
            display: inline-block;
            font-size: 0.11rem;
            color: #DB4453;
            line-height: 0.23rem;
            em{
              font-size: 0.21rem;
            }
          }
        }
        .sold {
          position: absolute;
          z-index: 1;
          top: 0.055rem;
          right: 0.165rem;
          display: block;
          font-size: 0.11rem;
          line-height: 0.22rem;
          height: 0.22rem;
        }
      }
      .goods-detail-item {
        position: relative;
        z-index: 1;
        padding: 0.11rem;
        background: #FFF;
        border-bottom: solid 0.01rem #EEE;
        .itme-name {
          position: absolute;
          z-index: 1;
          top: 0.11rem;
          left: 0.11rem;
          display: block;
          width: 0.35188rem;
          height: 0.19797rem;
          font-size: 0.12rem;
          color: #888;
          line-height: 0.18rem;
        }
        .item-con {
          display: block;
          margin-left: 0.352rem;
          dl {
            display: block;
            line-height: 0.2rem;
            dt {
              font-size: 0.13rem;
              color: #333;
              strong {
                color: #ED5564;
                margin-left: 0.11rem;
              }
            }
            dd {
              font-size: 0.12rem;
              color: #888;
            }
          }
        }
      }
      .defaultchoose{
        display: inline-block;
        height: 0.22rem;
        margin: 0 0.066rem 0.066rem 0;
        border: solid 0.01rem #CCC;
        font-size: 0.12rem;
        line-height: 0.22rem;
        padding: 0 0.044rem;
        color: #777;
      }
      .migi{
        background-image: url('http://www.hangowa.com/wap/images/arrow_right_b.png');
      }
      .goods-detail-comment {
        background-color: #FFF;
        padding: 0 0.11rem;
        margin-top: 0.11rem;
        border-top: solid #EEE 0.01rem;
        border-bottom: solid #EEE 0.01rem;
        .comment {
          display: block;
          position: relative;
          z-index: 1;
          height: 0.19797rem;
          padding: 0.11rem 0;
          font-size: 0.13rem;
          line-height: 0.19797rem;
          color: #888;
        }
        span {
          font-size: 0.12rem;
          margin-left: 0.22rem;
          color: #ED5564;
          em {
              font-size: 0.12rem;
              font-weight: 600;
              margin-left: 0.044rem;
          }
        }
        .rate-num {
          position: absolute;
          z-index: 1;
          top: 0.11rem;
          right: 0.22rem;
          color: #888;
          font-size: 0.12rem;
        }
        .item-more {
            right: 0;
        }
      }
      .goods-detail-store {
        display: block;
        position: relative;
        z-index: 1;
        padding: 0 0.11rem;
        margin: 0.11rem 0;
        background: #FFF;
        border: solid #EEE;
        border-width: 0.01rem;
        .store-name {
          height: 0.19797rem;
          padding: 0.11rem 0 0.055rem 0;
          font-size: 0.13rem;
          line-height: 0.19797rem;
          color: #333;
          .icon-store {
            display: inline-block;
            width: 0.17594rem;
            height: 0.19797rem;
            vertical-align: top;
            margin-right: 0.044rem;
            background-image: url('http://www.hangowa.com/wap/images/store_b.png');
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: 80%;
            opacity: 0.75;
          }
        }
        .store-rate {
          height: 0.15391rem;
          padding: 0.088rem 0 0.11rem 0;
          border-top: solid 0.01rem #EEE;
          font-size: 0;
          span {
            display: inline-block;
            width: 33.33%;
            height: 0.15391rem;
            font-size: 0.12rem;
            line-height: 0.15391rem;
            color: #888;
            em {
              display: inline-block;
              vertical-align: middle;
              font-size: 0.13rem;
              font-weight: 600;
            }
          }
        }
      }
      .goods-detail-recom {
        background: #FFF;
        padding: 0 0 0 0.11rem;
        margin: 0.11rem 0;
        background-color: #FFF;
        border: solid #EEE;
        border-width: 0.01rem;
        overflow: hidden;
         h4 {
          display: block;
          height: 0.19797rem;
          padding: 0.088rem 0;
          font-size: 0.13rem;
          color: #888;
          line-height: 0.19797rem;
        }
        ul{
          li{
            display: inline-block;
            width: 22%;
            margin: 0 3% 0.088rem 0;
            .goodsdiv {
              display: block;
              .pic {
                display: block;
                width: 0.70983rem;
                height: 0.70983rem;
                border: solid 0.01rem #EEE;
                img {
                  display: block;
                  width: 100%;
                  height: 100%;
                }
              }
              dl {
                margin-top: 0.044rem;
                dt {
                  display: block;
                  overflow: hidden;
                  height: 0.26391rem;
                  font-size: 0.12rem;
                  line-height: 0.13rem;
                  color: #777;
                  margin-bottom: 0.044rem;
                }
                dd {
                  font-size: 0.1rem;
                  color: #333;
                  em{
                    font-size: 0.12rem
                  }
                }
              }
            }
          }
        }
      }
      .goods-detail-bottom {
        padding: 0.11rem 0 0.55rem 0;
        text-align: center;
        a {
          display: inline-block;
          width: 100%;
          height: 0.22rem;
          margin: 0 auto;
          font-size: 0.12rem;
          line-height: 0.22rem;
          color: #999;
        }
      }
  }
</style>
