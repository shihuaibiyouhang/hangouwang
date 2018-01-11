<template>
      <div id="product_detail_spec_html" class="nctouch-bottom-mask up app-goodstocar " v-if="shopcarshow">
        <div class="nctouch-bottom-mask-bg"></div>
        <div class="nctouch-bottom-mask-block fadeInUp animated">
            <div class="nctouch-bottom-mask-tip" @click="isShow"><i></i>点击此处返回</div>
            <div class="nctouch-bottom-mask-top goods-options-info">
                <div class="goods-pic">
                <img :src="banner[0]">
            </div>
            <dl>
                <dt>{{goods_info.goods_name}}</dt>
                <dd class="goods-price">
                    ￥{{goods_info.goods_price}}
                    <em></em>    
                    <span class="goods-storage">库存：{{goods_info.goods_storage}}件</span>
                </dd>
            </dl>
            <a  class="nctouch-bottom-mask-close" @click="isShow"><i></i></a>
        </div>
        <div class="nctouch-bottom-mask-rolling" id="product_roll">
            <div class="goods-options-stock" ></div>
        </div>
        <div class="goods-option-value">购买数量
            <div class="value-box">
                <span class="minus">
                    <a @click="decrease">&nbsp;</a>
                </span>
                <span>
                    <input type="text" pattern="[0-9]*" class="buy-num" id="buynum" :value="count">
                </span>
                <span class="add">
                    <a @click="increment">&nbsp;</a>
                </span>
            </div>
        </div>
        <div class="goods-option-foot">
            <div class="otreh-handle">
                <a class="kefu">
                    <i></i>
                    <p>客服</p>
                </a> 
                <a class="cart" @click = "turnout('shopcar')">
                    <i></i>
                    <p>购物车</p>
                </a>
            </div>
            <div class="buy-handle ">
                <a  class="add-cart" id="add-cart" @click="addGood({id:goods_id,price:goods_info.goods_price,title:goods_info.goods_name,pic:banner[0]})">加入购物车</a>
                <a class="buy-now" id="buy-now">立即购买</a>
            </div>
        </div></div></div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default {
  props:['goods_info','banner','goods_id'],
  name: 'app-goodstocar',
  data () {
    return {
   
    }
  },
  computed:{
      ...mapState({
          count () {
            return this.$store.state.count
        },
          shopcarshow(){
              return this.$store.state.shopcarshow
          }
      }),
      ...mapGetters([])
  },
  methods:{
    ...mapMutations(['increment','decrease','isShow']),
    ...mapActions(['addGood']),
    turnout(name){
        this.$router.push({name: name})  
    },
  },
  
}
</script>


<style lang="scss">
.goods-option-foot {
    height: 0.44rem;
    background: rgba(245,245,245,0.95);
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
}
.goods-option-foot .otreh-handle {
  float: left;
  width: 35%;
  font-size: 0;
}
.goods-option-foot .buy-handle {
  float: right;
  width: 65%;
  font-size: 0;
}
.goods-option-foot .otreh-handle a.kefu {
    width: 44%;
    i {
        background-image: url('http://www.hangowa.com/wap/images/kefu_b.png');
    }
}
.goods-option-foot .otreh-handle a{
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
.goods-option-foot .otreh-handle a.cart {
    width: 55%;
    border-left: solid 0.01rem #DDD;
    i {
        background-image: url('http://www.hangowa.com/wap/images/cart_b.png');
    }
}
.goods-option-foot .buy-handle a.add-cart {
    float: right;
    width: 55%;
    background-color: #FB6E52;
}
.goods-option-foot .buy-handle a.buy-now {
    background-color: #ED5564;
}
.goods-option-foot .buy-handle a {
    display: block;
    height: 0.44rem;
    font-size: 0.154rem;
    font-weight: 600;
    line-height: 0.44rem;
    color: #FFF;
    text-align: center;
}

.nctouch-bottom-mask {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    .nctouch-bottom-mask-bg {
        display: block;
        position: absolute;
        z-index: 21;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.65);
    }
    .nctouch-bottom-mask-block {
        display: block;
        position: absolute;
        z-index: 22;
        bottom: 0;
        left: 0;
        right: 0;
        min-height: 2.64rem;
        background: #FFF;
        .nctouch-bottom-mask-tip {
            position: absolute;
            z-index: 1;
            top: -0.264rem;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 0.14rem;
            font-weight: 600;
            line-height: 0.198rem;
            color: #FFF;
            text-shadow: 0 0 0.11rem rgba(0,0,0,0.5);
            i {
                background-image: url('http://www.hangowa.com/wap/images/back_down.png');
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-size: 75%;
                width: 0.176rem;
                height: 0.198rem;
                display: inline-block;
                vertical-align: top;
                margin-right: 0.022rem;
            }
        }
        .nctouch-bottom-mask-top {
            position: relative;
            z-index: 1;
            display: block;
            padding: 0.11rem;
            border-bottom: solid 0.01rem #EEE;
        }
        .goods-options-info {
            min-height: 0.66rem;
            .goods-pic {
                position: absolute;
                z-index: 1;
                top: 0.11rem;
                left: 0.11rem;
                width: 0.66rem;
                height: 0.66rem;
                background: #FFF;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            dl {
                margin-left: 0.88rem;
                dt {
                    font-size: 0.14rem;
                    line-height: 0.165rem;
                    margin: 0.044rem 0.132rem 0.088rem 0;
                }
                .goods-price {
                    height: 0.22rem;
                    font-size: 0.12rem;
                    color: #DB4453;
                    font-weight: 600;
                    line-height: 0.22rem;
                    em {
                        font-size: 0.15rem;
                    }
                    .goods-storage {
                        display: block;
                        float: right;
                        font-size: 0.11rem;
                        line-height: 0.22rem;
                        color: #888;
                    }
                }
            }
            .nctouch-bottom-mask-close {
                position: absolute;
                z-index: 1;
                top: -0.132rem;
                right: 0;
                background: #FFF;
                width: 0.198rem;
                height: 0.198rem;
                padding: 0.033rem;
                border-radius: 100%;
                i {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-image: url('http://www.hangowa.com/wap/images/close_window.png');
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    background-size: 100%;
                }
            }
        }
        .nctouch-bottom-mask-rolling {
            min-height: 0.418rem;
            max-height: 2.64rem;
            overflow: hidden;
            position: relative;
            z-index: 1;
        }
        .goods-option-value {
            display: block;
            height: 0.26391rem;
            padding: 0.11rem;
            margin-bottom: 0.44rem;
            line-height: 0.26391rem;
            font-size: 0.14rem;
            color: #999;
            border-top: solid 0.01rem #EEE;
            .value-box {
                display: inline-block;
                float: right;
                font-size: 0;
                border: solid 0.01rem #CCC;
                border-radius: 0.044rem;
                span {
                    display: inline-block;
                    vertical-align: top;
                    line-height: 0;
                    .buy-num {
                        width: 0.26391rem;
                        height: 0.26391rem;
                        padding: 0;
                        font-size: 0.14rem;
                        font-weight: lighter;
                        line-height: 0.286rem;
                        text-align: center;
                        border: solid #CCC;
                        border-width: 0 0.01rem;
                        border-radius: 0;
                    }
                    a {
                        display: block;
                        width: 0.088rem;
                        height: 0.088rem;
                        margin: 0.088rem;
                        opacity: 0.65;
                    }
                }
                .minus {
                    background-color: #FAFAFA;
                    border-radius: 0.044rem 0 0 0.044rem;
                    a {
                        background-image: url('http://www.hangowa.com/wap/images/value_minus.png');
                        background-repeat: no-repeat;
                        background-size: 100%;
                    }
                }
                .add {
                    background-color: #FAFAFA;
                    border-radius: 0 0.044rem 0.044rem 0;
                    a {
                        background-image: url('http://www.hangowa.com/wap/images/value_add.png');
                        background-repeat: no-repeat;
                        background-size: 100%;
                    }
                }
            }
        }
    }
}
</style>
