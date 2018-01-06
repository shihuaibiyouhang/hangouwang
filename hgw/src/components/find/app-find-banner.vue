<template>
  <div class="app-find-banner">
 <div  class="swiper-wrapper">
 			<div class="swiper-slide" v-for="data in data" :key='data.data'><img :src="data.image"  width="100%"></div>
 		</div>
 		<div class="swiper-pagination"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'app-find-banner',
  data :function(){
    return {
     data:[]
    }
  },methods:{
	getData(){
	 let that=this
		axios.get('http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1'
		).then((response)=>{
			// console.log(response.data.datas.list[0].adv_list.item)
			this.data=response.data.datas.list[0].adv_list.item
		})
	}
	},
	created(){
	this.getData()
	
	
	},components: {
    swiper,
    swiperSlide
  },
  updated(){
  new Swiper('.app-find-banner',{autoplay:true})
  },  
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },autoplay:true
}

</script>


<style lang="scss">
.app-find-banner{overflow:hidden;width:100%;padding-top:0.629rem}
</style>
