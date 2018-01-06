<template>
  <div class="comment-list"> 
    <ul>
			<li v-for="goods in data" :key="goods.geval_id" v-if="goods.geval_scores <= scores_one && goods.geval_scores >= scores_two">
				<div class="eval-user">
					<div class="user-avatar">
            <img :src="goods.member_avatar">
          </div>
					<span class="user-name">{{goods.geval_frommembername}}</span>
				</div>
				<div class="goods-raty"><i class="star" :style="{width:0.11 * goods.geval_scores+'rem'}"></i></div>
				<dl class="eval-con">
					<dt>{{goods.geval_content}}</dt>
				</dl>
      </li>
		</ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'comment-list',
  data () {
    return {
     data:[]
    }
  },
  computed:{
      ...mapState({
           scores_one () {
            return this.$store.state.scores_one
        },
          scores_two () {
            return this.$store.state.scores_two
        },
      })
  },
  methods:{
    getData(){
        let that = this 
        //http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_evaluate&goods_id=102369
        axios.get('http://localhost:8080/hg/mo_bile/index.php?act=goods&op=goods_evaluate&page=100',{
            params:{goods_id:this.$route.query.id}
        }).then((response)=>{
      
          that.data = response.data.datas.goods_eval_list
        })
    },
    ...mapMutations(['topscores','middlescores','bottomscores','allscores'])
  },
  created(){
      this.getData()
  },

}
</script>


<style lang="scss">
  .comment-list li {
    padding: 0 0 0.11rem 0.11rem;
    margin-bottom: 0.055rem;
    background-color: #FFF;
    .eval-user {
      position: relative;
      z-index: 1;
      display: block;
      height: 0.44rem;
      border-bottom: solid #EEE 0.011rem;
      .user-avatar {
        position: absolute;
        z-index: 1;
        top: 0.077rem;
        left: 0;
        display: block;
        width: 0.26391rem;
        height: 0.26391rem;
        border: solid #EEE 0.011rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-name {
        display: block;
        height: 0.22rem;
        margin: 0 0 0 0.44rem;
        padding: 0.11rem 0;
        font-size: 0.13rem;
        line-height: 0.22rem;
      }
    }
    .goods-raty {
      display: block;
      height: 0.11rem;
      padding: 0.11rem 0 0;
      font-size: 0;
      i {
        
        display: inline-block;
        height: 0.11rem;
        background-image: url('http://www.hangowa.com/wap/images/star_r.png');
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
      }
    }
    .eval-con {
      padding: 0.044rem 0;
      dt {
        display: block;
        min-height: 0.198rem;
        margin: 0.044rem 0 0.088rem 0;
        font-size: 0.13rem;
        line-height: 0.198rem;
      }
    }
  }
</style>
