<template>
  <div class="app-footer">
    <footer>
        <ul>
          <li @click="turnout(nav.name)" v-for="nav in navs" :key = 'nav.id'>
            <i :class='nav.class'></i>
            <p>{{nav.content}}</p>
          </li>
        </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      navs:[
                {id:1,content:'首页',name:'main',class:'fa fa-home'},
                {id:2,content:'发现',name:'find',class:'fa fa-cart-plus'},
                {id:3,content:'类目',name:'type',class:'fa fa-file-text'},  
                {id:4,content:'我的商城',name:'myshop',class:'fa fa-user'},                   
                
            ]
    }
  },
  methods:{
      turnout(name){
          this.$router.push({name})
      }
  }
}
</script>


<style lang="scss">
.app-footer{
   position: fixed;
      bottom: 0;
      width:375px;
  footer{
        height:0.52rem;
        background: rgba(85,85,85,0.95);
        padding-bottom: 0.1rem;   
        font-size: 0.14em;    
        width: 100%;
        z-index: 6;
        ul{
        width:100%;
          height:0.52rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li{
            font-size: 0.14rem;
            color: #fff;
            vertical-align: top;
            display: inline-block;
            text-align: center;
            width: 25%;
            padding: 0.2rem 0 0.2rem 0;
            i{
              vertical-align: top;
              display: inline-block;
              width: 0.22rem;
              height: 0.22rem;
              margin: 0.1rem auto 0.1rem auto;
              opacity: 0.5;
              font-size: 0.25rem !important;
            }
          };
        }
  }
  }
</style>
