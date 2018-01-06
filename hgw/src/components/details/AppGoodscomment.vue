<template>
  <div class="app-goodscomment"> 
    <app-goodshead></app-goodshead>  
    <comment-top></comment-top>
    <comment-list></comment-list>    
  </div>
</template>

<script>

import AppGoodshead from './AppGoodsHead'
import CommentTop from './CommentTop'
import CommentList from './CommentList'

export default {
  name: 'app-goodscomment',
  data () {
    return {
     
    }
  },
  components:{AppGoodshead,CommentTop,CommentList}
}
</script>


<style lang="scss">
  .app-goodscomment{
        background-color: #F5F5F5;
  }
</style>
