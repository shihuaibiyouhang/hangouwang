<template>
  <div class="main-nav">
   <section>
     <ul>
        <li @click="turnout(nav.name)" v-for="nav in navs" :key = 'nav.id'>
            <i :class='nav.class' :style='nav.color'></i>
            <p>{{nav.content}}</p>
        </li>
     </ul>
   </section>
  </div>
</template>

<script>

export default {
  name: 'main-nav',
  data () {
    return {
      navs:[
                {id:1,content:'分类',name:'type',class:'fa fa-file-text',color:'backgroundColor:#FB6E52'},
                {id:2,content:'购物车',name:'shopcar',class:'fa fa-cart-plus',color:'backgroundColor:#48CFAE'},
                {id:3,content:'我的商城',name:'myshop',class:'fa fa-user',color:'backgroundColor:#4FC0E8'},  
                {id:4,content:'每日签到',name:'sign',class:"fa fa-pencil-square-o",color:'backgroundColor:#AC92ED'},                   
                
            ]
    }
  },
  methods:{
      turnout(name){
          this.$router.push({name})
      }
  },
}
</script>


<style lang="scss">
  section{
    width: 100%;
    height: 0.9898rem;
    background-color: #fff;
    ul{
      width: 100%;
      height: 0.9898rem;
      display: flex;
      justify-content: space-around;
      li{
        width: 25%;
        padding:0.11rem 0 0.066rem 0;
        box-sizing: border-box;
        text-align: center;
        i{
          display: inline-block;
          width: 0.528rem;
          height: 0.528rem;
          margin: 0 auto 0.066rem auto;
          border-radius: 100%;
          font-size: 0.3rem !important;
          background: #666;
          text-align: center;
          box-sizing: border-box;
          padding-top: 0.1rem;
          color: #fff;
        }
        p{
          width: 100%;
          height: 0.19rem;
          color: #555;
          font-size: 13px;
          line-height: 0.19rem;
        }
      }
    }
  }
  
</style>
