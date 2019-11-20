import Vue from 'vue'
import Vuex from 'vuex'
import {getGoods} from "./../api/apis"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        shopsInfro:[]
    },
    mutations:{
        // 获取所有商品信息
        getShopsInfro(state,obj){
            state.shopsInfro = obj.data
            console.log(state.shopsInfro)
        },

        //  改变num值
        changeNum(state,obj){
            for (let data of state.shopsInfro){
                for (let foods of data.foods){
                    if (foods.name === obj.name){
                        foods.num += obj.num;
                        return
                    }
                }
            }
        }
    },
    actions:{
        async getGoods({commit}){
            let res = await getGoods();
            commit({
                type:"getShopsInfro",
                data: res.data.data
            })

        }
    },
    getters:{
        // 把商品列表放到购物车
        putUpShopCarL(state){
            let arr = [];
            for(let data of state.shopsInfro){
                for (let foods of data.foods){
                    if (foods.num > 0){
                        arr.push(foods)
                    }
                }
            }
            return arr
        }
    }

})


export default store