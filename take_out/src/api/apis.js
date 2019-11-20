import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3000'
const IP = 'http://localhost:3000'

var getSeller = () => {
    return axios.get(IP + '/api/seller')
}
var getGoods = () => {
    return axios.get(IP + '/api/goods')
}
var evaluate = () => {
    return axios.get(IP + '/api/ratings')
}
var merchant = () => {
    return axios.get(IP + '/api/seller')
}

//获取商家信息
export{
    getSeller,getGoods,evaluate,merchant

}
