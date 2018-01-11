<template>
   <ul class="car-items">
     <li class="cart-litemw-cnt" v-for = "items in car" :key="items.id">
        <div class="goods-check">
            <input type="checkbox" checked="" name="cart_id" v-model="items.isSelected">
        </div>
        <div class="goods-pic">
            <a>
                <img :src="items.pic">
            </a>
        </div>
        <dl class="goods-info">
            <dt class="goods-name"> <a> {{items.title}} </a></dt>
            <dd class="goods-type"></dd>
        </dl>
        <div class="goods-del" @click="removeGood(items.id)"><a></a></div>
        <div class="goods-subtotal"> <span class="goods-price">￥<em>{{items.price}}</em></span> 
            <span class="goods-sale">
            
            </span>
            <div class="value-box">
                <span class="minus" @click="reduceGood({id:items.id})">
                    <a href="javascript:void(0);">&nbsp;</a>
                </span>
                <span>
                    <input type="text" pattern="[0-9]*" readonly="" class="buy-num buynum" :value="items.num">
                </span>
                <span class="add" @click="addGood({id:items.id,price:items.price,title:items.title,pic:items.pic})">
                    <a href="javascript:void(0);">&nbsp;</a>
                </span>
            </div>
        </div>
        
    </li>
  </ul>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'car-items',
  data () {
    return {
     
    }
  },
  computed:{
    ...mapState(['car'])
  },
  methods:{
    ...mapActions(['addGood','reduceGood','removeGood'])
  }
}
</script>


<style lang="scss">
 ul{
    margin-top:0.5rem;
    background-color: #FFF;
    border-bottom: solid 0.01rem #EEE;
    li {
        display: block;
        position: relative;
        z-index: 1;
        margin-left: 0.11rem;
        padding: 0.11rem 0;
        border-bottom: solid #EEE 0.01rem;
        .goods-check {
            position: absolute;
            top: 0.264rem;
            input {
                position: relative;
                width: 0.14313rem;
                height: 0.14313rem;
                background-color: #F5F5F5;
                border: 0.01rem solid #CCC;
                border-radius: 50%;
                vertical-align: middle;
            }
        }
        .goods-pic {
            display: block;
            width: 0.59391rem;
            height: 0.59391rem;
            padding: 0.044rem;
            position: absolute;
            z-index: 1;
            top: 0.11rem;
            left: 0.242rem;
            border: solid 0.01rem #EEE;
            border-radius: 0.044rem;
            a{
                display: block;
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 0.044rem;
                }
            }
        }
        .goods-info {
            display: block;
            vertical-align: top;
            height: 0.48391rem;
            margin: 0 0.44rem 0 0.99rem;
            position: relative;
            z-index: 1;
            dt.goods-name {
                display: block;
                a {
                    display: block;
                    height: 0.30797rem;
                    font-size: 0.14rem;
                    color: #111;
                    line-height: 0.154rem;
                    overflow: hidden;
                }
            }
        }
        .goods-del {
            display: block;
            position: absolute;
            z-index: 1;
            top: 0.066rem;
            right: 0.11rem;
            width: 0.22rem;
            height: 0.22rem;
            a {
                display: block;
                width: 100%;
                height: 100%;
                background-image: url('http://www.hangowa.com/wap/images/del_b.png');
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-size: 60%;
                opacity: 0.4;
            }
        }
        .goods-subtotal {
            display: block;
            height: 0.22rem;
            margin: 0 0.11rem 0 0.99rem;
            line-height: 0.22rem;
            font-size: 0.14rem;
            position: relative;
            z-index: 1;
            .goods-price {
                color: #DB4453;
                font-size: 0.13rem;
                font-weight: 600;
                em {
                    font-size: 0.14rem;
                }
            }
            .value-box {
                position: absolute;
                z-index: 1;
                bottom: 0;
                right: 0;
                display: inline-block;
                float: right;
                font-size: 0;
                border: solid 0.01rem #CCC;
                border-radius: 0.044rem;
                span {
                    display: inline-block;
                    vertical-align: top;
                    line-height: 0;
                    a {
                        display: block;
                        width: 0.08797rem;
                        height: 0.08797rem;
                        margin: 0.088rem;
                        opacity: 0.65;
                    }
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
                }
                span.minus {
                    background-color: #FAFAFA;
                    border-radius: 0.044rem 0 0 0.044rem;
                    a {
                        background-image: url('http://www.hangowa.com/wap/images/value_minus.png');
                        background-repeat: no-repeat;
                        background-size: 100%;
                    }
                }
                span.add {
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
