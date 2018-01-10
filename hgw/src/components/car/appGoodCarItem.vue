<template>
  
    <li class="app-good-car-item">
        <input type="checkbox" class="good-check">
        <div class="good-pic">
          <a><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05544059544104485_360.jpg"></a>
        </div>
        <div class="good-info">
        <dt class="goods-name">
          <a>【薯帮主】鹤峰高山黄心小土豆5斤装恩施高山小洋芋</a>
        </dt>
        <dd class="goods-type"></dd>
        <div class="good-del"></div>
        <div class="good-substral">
          <div class="good-price">"￥"<em>9.90</em></div>
        </div>
      
        <div class="value-box">
          <span class="reduce">-</span>
         <input type="text" value=16>
          <span class="add">+</span>
        </div>
        </div>
    </li>



</template>
<script>
import {mapActions} from 'vuex'
export default {
  props:['info'],
  name:'app-good-car-item',
  methods:{
    ...mapActions(['addGood','reduceGood','removeGood'])
  }
}
</script>
<style lang="scss">
.app-good-car-item{
  display: block;
    position: relative;
    z-index: 1;
    margin-left: 0.12rem;
    padding: 0.12rem 0;
    border-bottom: solid #EEE 0.012rem;
  .good-check{
    position: absolute;
    top: 0.24rem;
  }
  .good-pic{
    display: block;
    width: 0.55rem;
    height: 0.55rem;
    padding: 0.042rem;
    position: absolute;
    z-index: .52;
    top: 0.12rem;
    left: .21rem;
    border: solid 0.012rem #EEE;
    border-radius: 0.041rem;
    a{
      img{width: 100%;
    height: 100%;
    border-radius: 0.045rem;}
    }
  }
  .good-info{
    display: block;
    vertical-align: top;
    height: .54rem;
    margin: 0 .54rem 0 1rem;
    position: relative;
    z-index: 1;
  .good-name{
    a{
      display: block;
    height: 0.3rem;
    font-size: 0.14rem;
    color: #111;
    line-height: 0.16rem;
    overflow: hidden;
    }
  }
}
  .good-del{
    display: block;
    position: absolute;
    z-index: .21;
    top: 0.091rem;
    right: 0.12rem;
    width: .52rem;
    height: .52rem;
  }
  .good-substral{
        display: block;
    height: .42rem;
    margin: 0 0.052rem 0 .012rem;
    line-height: .42rem;
    font-size: 0.14rem;
    position: relative;
    z-index: 1;
    .good-price{
      color: #DB4453;
    font-size: 0.1rem;
    font-weight: 600;
    }
  }
  .value-box{
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: -.38rem;
    input{
      width: 0.28rem;
      height: 0.28rem;
      position: relative;
      top: .12rem;
      text-align: center;
      line-height: 0.28rem;
      border: none;
    }
    .reduce{
      background-color: #FAFAFA;
   
    display: inline-block;
    width: 0.28rem;
    height: 0.28rem;
   border: 1px solid gray;
    text-align: center
   
  
    }
    .add{
      background-color: #FAFAFA;
   
    display: inline-block;
     width: 0.28rem;
    height: 0.28rem;
     text-align: center;
   border: 1px solid gray;
  
    }
  }
}
</style>


