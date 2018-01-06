import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
        count: 1,
        shopcarshow:false,
        scores_one:5,
        scores_two:5
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrease (state){
            if(state.count <= 1){
                state.count = 1
            }else{
                state.count--
            }
        },
        isShow(state){
            state.shopcarshow = !state.shopcarshow
        },
        topscores(state){
            state.scores_one = 5
            state.scores_two = 5            
        },
        middlescores(state){
            state.scores_one = 4;
            state.scores_two = 3
        },
        bottomscores(state){
            state.scores_one = 2
            state.scores_two = 1
        },
        allscores(state){
            state.scores_one = 5
            state.scores_two = 1
        }
        
    },
    getters:{
        
    }
});