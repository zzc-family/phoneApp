<template>
    <div class="shopList">
        <div class="goods">
            <ul id="goodLeft" class="goodLeft">
                <ul class="container">
                    <ul class="goodsLeftUl">
                        <li class="fontS18" @click="clickTitle(index)" :class="{liActive:currentIndex === index}"
                            v-for="(item,index) in shopsInfro" :key="index">{{item.name}}
                        </li>
                    </ul>
                </ul>
            </ul>
            <div class="goodRight">
                <ul id="goodRight" class="goodRightUl">
                    <ul class="container">
                        <li :id="index" v-for="(items,index) in shopsInfro" :key="items.name">
                            <p class="fontS20 bgcf2f2f2">{{items.name}}</p>
                            <div class="numAccount" style="padding: 10px 15px;border-bottom:1px solid #ccc;"
                                 v-for="itemess in items.foods" :key="itemess.name">
                                <img class="" width="80" height="80" :src="itemess.image" alt="">
                                <div class="numMaxBox">
                                    <p class="fontS16 fontWei marLef10">{{itemess.name}}</p>
                                    <p class="marLef10 fontS14 marTop5">月销售量{{itemess.sellCount}}
                                        好评率{{itemess.rating}}%</p>
                                    <div class="marLef10 colorRed marTop5 fontS14 numBox">
                                        <span>&yen;{{itemess.price}}</span>
                                        <div class="num">
                                            <div @click="clickChangeNum(-1,itemess.name)" v-show="itemess.num > 0" class="text-center colorWhite" style="border-radius: 50%;width: 20px;height: 20px;background-color: #f60">-</div>
                                            <div v-show="itemess.num > 0" class="text-center fontS18 lineH20" style="width: 24px;line-height: 22px">{{itemess.num}}</div>
                                            <div @click="clickChangeNum(1,itemess.name)" class="text-center colorWhite" style="border-radius: 50%;width: 20px;height: 20px;background-color: #f60">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>


        <transition name="slide-fade">
            <div v-show="flag" class="msg" style="">
                <ShopCars></ShopCars>
            </div>
        </transition>

        <div class="shopCar" @click="changeFlag">
            <img class="marLef20" width="50" height="50" src="../assets/imgs/icon_shopcar.png" alt="">
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    import ShopCars from "./shopCar"


    export default {
        data() {
            return {
                arr: [],
                currentIndex: 0,
                flag: false,
                imgUrl: ""
            }
        },
        methods: {
            changeFlag(){
              this.flag = !this.flag;
            },
            clickChangeNum(num,name){
              this.$store.commit({
                  type:"changeNum",
                  name,
                  num
              })
            },
            clickTitle(i) {
                this.rightbox.scrollToElement(document.getElementById(i), 600);
                this.currentIndex = i;
            },

        },
        created() {
            this.$store.dispatch("getGoods")
        },
        mounted() {
            let bScroll1 = new BScroll("#goodLeft", {
                click: true
            })
            //初始化右侧滚动区域
            this.rightbox = new BScroll("#goodRight", {
                click: true, //允许点击
                probeType: 3 //实施派发滚动事件
            });
            this.rightbox.on("scroll", ({y}) => {
                let $y = Math.ceil(Math.round(Math.abs(y.toFixed(2) * 10)) / 10)
                for (var key of this.getDivHeight) {
                    if ($y >= key.min && $y < key.max) {
                        this.currentIndex = key.index;
                        break;
                    }
                }
            })
        },
        computed: {
            getDivHeight() {
                let emptyArr = [];
                let total = 0;
                this.shopsInfro.forEach((value, index) => {
                    let indexHeight = document.getElementById(index).offsetHeight

                    emptyArr.push({min: total, max: total + indexHeight, index: index})
                    total += indexHeight
                })
                return emptyArr
            },
            shopsInfro() {
                return this.$store.state.shopsInfro
            }
        },
        components: {
            ShopCars
        }
    }
</script>

<style lang="less" scoped>
    .shopList {
        .goods {
            display: flex;
            flex-direction: row;
            width: 100%;
            .goodLeft {
                width: 90px;
                height: 400px;
                display: flex;
                flex-direction: column;
                overflow: auto;
                font-size: 16px;
                background-color: #f2f2f2;

                .goodsLeftUl {
                    width: 90px;

                    & > li.liActive {
                        color: #6eff10;
                        background-color: #ffeec0;
                    }

                    & > li {
                        padding: 20px 6px 20px 10px;
                        display: flex;
                        align-items: center;
                        border-bottom: 1px solid #999;

                        & > img {
                            flex-grow: 0.2;
                        }

                        & > div {
                            flex-grow: 0.8;
                        }
                    }
                }

            }

            .goodRight {
                flex: 1;
                display: flex;
                overflow: auto;
                flex-direction: column;
                background-color: #fff;

                .goodRightUl {
                    height: 500px;
                    margin-bottom: 60px;
                    .numAccount{
                        display: flex;
                        flex-direction: row;
                        .numBox{
                            position: relative;
                            .num{
                                position: absolute;
                                top: 2px;
                                display: flex;
                                flex-direction: row;
                                left: 140px;
                                width: 90px;
                                height: 30px;
                            }
                        }
                    }
                }
            }
        }

        .shopCar {
            position: fixed;
            width: 100%;
            height: 60px;
            bottom: 0;
            align-items: center;
            display: flex;
            background-color: #333333;
            margin-bottom: 0px !important;
        }

        .msg {
            position: fixed;
            bottom: 60px;
            width: 100%;
            background-color: #00B7FF;

        }

        /* 可以设置不同的进入和离开动画 */
        /* 设置持续时间和动画函数 */

        .slide-fade-enter-active {
            transition: all .3s ease;
        }

        .slide-fade-leave-active {
            transition: all .3s ease;
        }

        .slide-fade-enter, .slide-fade-leave-to
            /* .slide-fade-leave-active for below version 2.1.8 */ {
            transform: translateY(200px);
            opacity: 0;
        }

    }

</style>