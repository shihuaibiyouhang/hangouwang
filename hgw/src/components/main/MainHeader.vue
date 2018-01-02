<template>
  <div class="main-header">
    <header class="clearfix">
      <div class="logo"></div>
      <div class="header-wrap">
        <a href="##" class="search">
          <i></i>
        </a>
        <a href="##" class="car_ico"></a>
      </div>
    </header>
    <div class="banner">
      <a href="##">
        <img :src="data" alt="">
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props:['data'],
  name: 'main-header',
  data () {
    return {
      
    }
  },
}
</script>


<style lang="scss">
  header{
    z-index: 100;
    height: 0.6289rem;
    width: 3.75rem;
    background: #e7e7e9;
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    .logo{
      width: 33.3%;
      height: 0.45rem;
      background: url('http://www.hangowa.com/wap/images/home_logo.png') no-repeat center;
    }
    .header-wrap{
      width: 66.6%;
      height: 0.45rem;
      line-height: 0.45rem;
      max-width: 6.4rem;
      margin: 0 auto;
      text-align: center;
      .search{
        width: 70%;
        border: solid 1px #ccc;
        border-radius: 20px;
        height: 0.35rem;
        background: #fff;
        overflow: hidden;
        position: relative;
        display: inline-block;
        i{
          display: block;
          width: 0.35rem;
          height: 0.35rem;
          background: url('http://www.hangowa.com/wap/images/search_ico.png') no-repeat center;
          background-size: 55%;
          float: right;
        }
      }
      .car_ico{
        display: inline-block;
        width: 0.40rem;
        height: 0.40rem;
        background: url('http://www.hangowa.com/wap/images/cart_b.png') no-repeat center;
        background-size: 65%;
      }
    }
  }
  .banner{
    overflow: hidden;
    margin-top: 0.59rem;
        width: 100%;
        a{
          img{
                width: 100%;
          }
        }
  }
</style>
