<template>
  <div class="app-find-box">
  	<div class="title">{{info.title}}</div>
  	<ul class="good-list">
  	<appFindItem v-for="data in datas" :data="data" :key="data.goods_id"></appFindItem>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'app-find-box',
  data () {
    return {
     datas:[]
    }
  },
  components:{appFindItem},
  props:['info'],
  methods:{
    	getgoods(){
    		let that = this
    		axios.get(this.info.url).then(res=>{
    			that.datas = res.data.datas.list[this.info.i].goods.item;
    			
    			
    		})
    	}
    },
    created(){
    	this.getgoods()
    	
    }
  
}
import axios from 'axios'
import appFindItem from './app-find-item'

</script>


<style lang="scss">
body{
	background:#F0F0F0;

.app-find-box{
  			background:#fff;
			width:100%;
			clear:both;
			margin-top:.1rem;
		.title{
	font-size: 0.16rem;
    font-weight: normal;
    padding: 0.12rem 0 0;
    text-align: center;
    line-height: 0.18rem;
    border-left: 0;
    color: #333;
		}
		.good-list{
		margin-bottom:.1rem;
		}	
	
		}
		}
</style>
