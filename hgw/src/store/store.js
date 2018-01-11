import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
        count: 1,
        shopcarshow:false,
        scores_one:5,
        scores_two:5,
        car:[]
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
        },
        addGood(state,{id,title,price,pic}){
            let isHas = state.car.some(item=>{
                if(item.id==id){ 
                    item.num++
                    return true;
                }else{return false;}
            })
            if(!isHas){
                state.car.push({id,title,price,pic,num:1,isSelected:true})
            }
            //为了与数据库里的car对应
            
            if(localStorage.car){
                var aaa = JSON.parse(localStorage.car)
                aaa.push(state.car[0])
                localStorage.car = JSON.stringify(aaa)
                console.log(aaa)
            }else{
                localStorage.car = JSON.stringify(state.car)
            }
        },
        initCar(state,car){
            state.car = car
    
        },
        reduceGood(state,{id}){
            let len = state.car.length
            for (let i = 0; i < len; i++) {
                if(state.car[i].id==id){
                    state.car[i].num--
                    if(state.car[i].num==0){
                        state.car.splice(i,1)
                    }
                    break;
                }
            }
            localStorage.car = JSON.stringify(state.car)
        },
        removeGood(state,id){
            let len = state.car.length
            for (let i = 0; i < len; i++) {
                if(state.car[i].id==id){
                   state.car.splice(i,1)
                    break;
                }
            }
            localStorage.car = JSON.stringify(state.car)
        },
        seleteGood(state,val){
            state.car.forEach(item=>item.isSelected = val)
        }   
    },
    getters:{
        money(state){
            let money = 0
            state.car.forEach(item => {
                if(item.isSelected){
                    money+=(item.price*item.num)
                }
                
            });
            return money
        }
    },
    actions:{
        addGood({commit},params){
            setTimeout(() => {
                 let result = 'ok'   
                 if(result=='ok'){
                     commit('addGood',params)
                 }
            }, 300);
         },
        initCar({commit}){
            setTimeout(() => {
               let results = JSON.parse(localStorage.car||'[]')
               commit('initCar',results)
            }, 300);
        },
        reduceGood({commit},params){
            setTimeout(() => {
                let result = 'ok'   
                if(result=='ok'){
                    commit('reduceGood',params)
                }
            }, 300);
        },
        removeGood({commit},id){
            setTimeout(() => {
                let result = 'ok'   
                if(result=='ok'){
                    commit('removeGood',id)
                }
            }, 300);
        },
        seleteGood({commit},val){
            setTimeout(() => {
                let result = 'ok'   
                if(result=='ok'){
                    commit('seleteGood',val)
                }
            }, 300);
        }
    }
});