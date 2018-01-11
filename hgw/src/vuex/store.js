import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	user_info:'点击登录',
	isShow:true
}
const mutations={
	LoginUserInfo(state,user_info){
		state.isShow=!state.isShow
		state.user_info=user_info
		localStorage.user_info=JSON.stringify(user_info)
	},
	RegisterUserInfo(state,user_info){
		state.user_info=user_info
		localStorage.user_info=JSON.stringify(user_info)
	}
}
const store=new Vuex.Store({
	state,mutations
})
export default store