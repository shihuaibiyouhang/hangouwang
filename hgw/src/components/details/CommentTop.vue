<template>
  <div class="comment-top"> 
    <ul>
      <li class="selected" @click="allscores(),isred()"><a>全部评价</a></li>
      <li  @click="topscores(),isred()"><a>好评</a></li>
      <li  @click="middlescores(),isred()"><a>中评</a></li>
      <li  @click="bottomscores(),isred()"><a>差评</a></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'comment-top',
  data () {
    return {
      ischoose:false
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
    ...mapMutations(['topscores','middlescores','bottomscores','allscores']),
    isred(){
      $( event.currentTarget).siblings().removeClass("selected");      
      $( event.currentTarget).addClass("selected")
    }
  },

}
</script>


<style lang="scss">

  .comment-top{
    
    background-color: #EEE;
    padding: 0.54rem 0.11rem 0 0.11rem;
    ul li {
      display: inline-block;
      background-color: #AAA;
      margin: 0 0.11rem 0.11rem 0;
      border-radius: 0.044rem;
      a {
        display: block;
        height: 0.198rem;
        padding: 0.044rem 0.11rem;
        font-size: 0.14rem;
        line-height: 0.198rem;
        color: #FFF;
      }
    }
  }
  ul li.selected {
    background-color: #ED5564;
  }
</style>
