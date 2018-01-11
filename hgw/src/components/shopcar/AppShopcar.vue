<template>
   <div class="app-shopcar">
      <header id="header" class="fixed">
        <div class="header-wrap">
          <div class="header-l">
            <a href="javascript:history.go(-1)">
              <i class="back"></i>
            </a>
          </div>
          <div class="header-title">
            <h1>购物车</h1>
          </div>
          <div class="header-r">
            <a id="header-nav"><i class="more"></i><sup></sup></a>
          </div>
        </div>
      </header>
      <car-items></car-items>
      <div class="nctouch-cart-bottom">
        <div class="all-check"><input class="all_checkbox" type="checkbox" checked="" v-model="isAllSelected"></div>
        <div class="total">
          <dl class="total-money"><dt>合计总金额：</dt><dd>￥<em>{{money}}</em></dd></dl>
        </div>
        <div class="check-out">
          <a>确认信息</a>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import CarItems from './CarItems'
import axios from 'axios'
export default {
  name: 'app-shopcar',
  data () {
    return {
     
    }
  },
  computed:{
     ...mapGetters(['money','isAllSelected']),
     isAllSelected:{
      get(){
        return this.$store.state.car.every(item => {
            if(item.isSelected){
               return true
            }else{
                return false
            }           
        });
      },
      set(newValue){
        this.seleteGood(newValue)
        console.log('gaile')
      }
    }
  },
  methods:{
    ...mapActions(['initCar','seleteGood'])
  },
  created(){
    //初始化
    this.initCar()
  },
  components:{CarItems}
}
</script>


<style lang="scss">
  header.fixed {
    position: fixed;
    background: rgba(248,248,248,0.95);
    z-index: 9;
    border-bottom: 0;
    height: 0.42891rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    .header-wrap {
        display: block;
        max-width: 6.4rem;
        margin: 0 auto;
        text-align: center;
        .header-l {
            display: block;
            width: 0.42891rem;
            height: 0.42891rem;
            position: absolute;
            top: 0;
            left: 0;
            a {
              position: relative;
              z-index: 1;
              display: inline-block;
              width: 0.22rem;
              height: 0.22rem;
              padding: 0.10505rem;
              i.back {
                  display: inline-block;
                  width: 80%;
                  height: 80%;
                  margin: 10%;
                  background-image: url('http://www.hangowa.com/wap/images/arrow_left_b.png');
                  background-position: 50% 50%;
                  background-repeat: no-repeat;
                  background-size: 100%;
                  opacity: 0.75;
              }
          }
        }
        .header-title {
            display: inline-block;
            margin: 0 auto;
            h1 {
                font-size: 0.18rem;
                line-height: 0.42891rem;
                height: 0.42891rem;
            }
        }
        .header-r {
            position: absolute;
            z-index: 99;
            top: 0;
            right: 0;
            font-size: 0;
            text-align: right;
            a {
                position: relative;
                z-index: 1;
                display: inline-block;
                vertical-align: top;
                width: 0.20891rem;
                height: 0.20891rem;
                padding: 0.11rem 0.11rem;
                i.more {
                    background-image: url('http://www.hangowa.com/wap/images/more_b.png');
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    background-size: 100%;
                    opacity: 0.65;
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
.nctouch-cart-bottom {
    position: fixed;
    z-index: 1;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    background-color: rgba(255,255,255,0.85);
    border-top: solid 0.01rem #EEE;
    .all-check {
        position: absolute;
        z-index: 1;
        top: 0.088rem;
        left: 0.11rem;
        input{
            display: inline-block;
            position: relative;
            width: 0.14313rem;
            height: 0.14313rem;
            background-color: #F5F5F5;
            border: 0.01rem solid #CCC;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
    .total {
        display: block;
        float: left;
        text-align: right;
        width: 75%;
        .total-money {
            height: 0.22rem;
            margin-right: 0.22rem;
            padding: 0.11rem 0;
            font-size: 0;
            line-height: 0.22rem;
            dt {
                display: inline-block;
                font-size: 0.16rem;
            }
            dd {
                display: inline-block;
                font-size: 0.15rem;
                color: #DB4453;
                font-weight: 600;
                em {
                    font-size: 0.2rem;
                }
            }
        }
    }
    .check-out {
        display: block;
        float: right;
        width: 25%;
        height: 0.44rem;
        background-color: #BBB;
        a {
            display: block;
            text-align: center;
            font-size: 0.18rem;
            color: #FFF;
            line-height: 0.44rem;
        }
    }
}
</style>
