<template>
   <div class="app-goodshead" :class="[{ changedhead: isActive }, {fixedhead: !isActive}]">
     <div class="head_l">
       <a href="/main">
         <i></i>
       </a>
     </div>
     <ul class="head_m fadeIn animated" v-show="headshow">
       <li @click="turnout('goodsdetails',$route.query.id)"><a>商品</a></li>
       <li @click="turnout('goodsinformation',$route.query.id)"><a>详情</a></li>
       <li @click="turnout('goodscomment',$route.query.id)"><a>评价</a></li>       
     </ul>
     <div class="head_r">
        <a>
          <i></i>  
        </a> 
      </div>     
  </div>
</template>

<script>

export default {
  props:['getDate'],
  name: 'app-goodshead',
  data () {
    return {
     headshow:false,
     isActive:false
    }
  },
  methods:{
    turnout(name,id){
        this.$router.push({name: name, query: {id: id}})  
    },
  },
  mounted(){
    let that = this
    window.onscroll = function(){ 
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop;  
        if(curHeight>30){
          that.isActive = true
          that.headshow = true
        
        }else{
          that.headshow = false
          that.isActive = false
        }
      }
  }
}
</script>


<style lang="scss">
.fixedhead{
  background: none;
}
.changedhead{
  background: #F8F8F8;
}
  .app-goodshead{
    position: fixed;
    
    height: 0.43rem;
    z-index: 8;
    top: 0;
    left: 0;
    right: 0;
    bottom: auto;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    .head_l,.head_r{
      width: 0.43rem;
      height: 0.43rem;
      position: absolute;
      top: 0;
      a {
        position: relative;
        z-index: 1;
        display: inline-block;
        background: rgba(255,255,255,0.75);
        border: solid 0.01rem #EEE;
        border-radius: 100%;
        width: 0.3rem;
        height: 0.3rem;
        margin: 0.061rem;
        padding: 0;
        i{
          display: inline-block;
          width: 60%;
          height: 60%;
          margin: 20%;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: 100%;
          opacity: 1;
        }
      }
    }
    .head_l{
      left: 0;
      i{
        background-image: url('http://www.hangowa.com/wap/images/arrow_left_r.png');
      }
    }
    .head_r{
      right: 0;
      i{
        background-image: url('http://www.hangowa.com/wap/images/more_r.png');
      }
    }
    .head_m{
      display: inline-block;
      margin: 0 auto;
      vertical-align: top;
      font-size: 0;
      white-space: nowrap;
      li{
        display: inline-block;
        vertical-align: top;
        text-align: center;
        height: 0.6rem;
        a{
          display: inline-block;
          padding: 0.022rem 0.055rem;
          margin: 0 0.11rem;
          font-size: 0.16rem;
          line-height: 0.4rem;
          color: #333;
        }
      }
    }
  }
</style>
