
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import AppMain from '../components/main/AppMain.vue'
import AppFind from '../components/find/AppFind.vue'
import AppMyshop from '../components/myshop/AppMyshop.vue'
import AppType from '../components/type/AppType.vue'
import appGoodCar from '../components/car/appGoodCar.vue'
import AppSearch from '../components/search/App-search.vue'

const routes = [
  
  {path:'',redirect:'/main'},
  {path:'/main',name:'main',component:AppMain},
  {path:'/find',name:'find',component:AppFind},
  {path:'/myshop',name:'myshop',component:AppMyshop},
  {path:'/type',name:'type',component:AppType},  
   {path:"/appGoodCar",component:appGoodCar},
   {path:"/AppSearch",component:AppSearch},
 
 
  
]

const router = new Router({
  routes,
})


export default router