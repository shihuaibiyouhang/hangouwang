
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppFind from '../components/find/AppFind.vue'
import AppMyshop from '../components/myshop/AppMyshop.vue'
import AppType from '../components/type/AppType.vue'
import AppGoodsdetails from '../components/details/AppGoodsdetails.vue'


const routes = [
  
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain},
  {path:'/find',name:'find',component:AppFind},
  {path:'/myshop',name:'myshop',component:AppMyshop},
  {path:'/type',name:'type',component:AppType},  
  {path:'/goodsdetails/:Id',name:'goodsdetails',component:AppGoodsdetails},  
  {path:'**',redirect: '/main'}
  
]

const router = new Router({
  routes,
})


export default router