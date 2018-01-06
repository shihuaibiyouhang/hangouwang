<template>
   <div class="app-goodsbanner swiper-container">
      <div class="goodsbanner swiper-container">
        <div class="swiper-wrapper bannerpic">
          <div class="swiper-slide bannerul" v-for="bannerimg in banner" :key="bannerimg">
            <img :src="bannerimg" alt="">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper';
export default {
  props:['banner'],
  name: 'app-goodsbanner',
  data () {
    return {
     
    }
  },
  updated(){
    new Swiper('.goodsbanner',{
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }
}
</script>


<style lang="scss">
  .swiper-pagination-bullet-active{
    background: #ED5564
  }
  .goodsbanner{
      width: 3.52rem;
      height: 3.52rem;
      background-color: #FFF;
      display: block;
      position: fixed;
      z-index: -1;
      left: 0;
      right: 0;
      top: 0;
      .bannerpic{
        width: 3.52rem;
        height: 3.52rem;
        .bannerul{
          height: 3.52rem !important;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
  }
</style>
