<template>
  <div class="home">
    <div class="home_top" >
      <div class="home_box">
        <img width="80" height="80" :src="homeTopInfro.avatar" alt="">
        <div class="marLef10">
          <p class="fontS16 fontWei marTop5">{{homeTopInfro.name}}</p>
          <p class="fontS14 marTop5">{{ homeTopInfro.description }}/{{ homeTopInfro.deliveryTime }}分钟送达</p>
          <p class="fontS10 marTop5">{{ supportsStr }}</p>
        </div>
      </div>
      <div class="marRig10" style="width: 60px">5个</div>
    </div>
    <div class="home_main">
      <router-link @click.native="changePath('/')" :class="{active: currentPath == '/'}" to='/'>商品</router-link>
      <router-link @click.native="changePath('/evaluate')" :class="{active: currentPath == '/evaluate'}" to="/evaluate">评价</router-link>
      <router-link @click.native="changePath('/merchant')" :class="{active: currentPath == '/merchant'}" to="/merchant">商家</router-link>
    </div>
    <div class="home_footer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {getSeller} from "./../api/apis"
export default {
  data(){
    return{
      homeTopInfro:{},
      currentPath:"/"
    }
  },
  methods:{
    async getHomeTop(){
      let res = await getSeller();
      this.homeTopInfro = res.data.data;
    },
    changePath(val){
      this.currentPath = val;
      this.$router.push(val);
    }
  },
   created() {
    this.getHomeTop();
    //根据当前HASH值，改变data内的curretpath值
     this.currentPath =  window.location.hash.replace("#","");



  },
  computed: {
    supportsStr() {
      //如果此属性不存在，则返回空串，防止报错
      if (!this.homeTopInfro.supports) return "";

      let str = ``;
      for (let obj of this.homeTopInfro.supports) {
        str += obj.description + " ";
      }
      return str;
    }
  }
}
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
  }
  .home{
      height: 100%;
    position: relative;
      .home_top{
          padding: 10px 20px;
          display: flex;
          background-color: #ccc;
          flex-direction: row;
          .home_box{
              display: flex;
          }
      }
      .home_main{
          display: flex;
        border-bottom: 2px solid #ccc;
          &>a{
              flex-grow: 1;
              display: inline-block;
              text-align: center;
              padding: 10px 0;
              &.active{
                  color: white;
                  background-color: #f60;
              }
          }
      }
  }

</style>
