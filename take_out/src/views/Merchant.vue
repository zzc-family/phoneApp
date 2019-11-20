<template>
    <div class="merchant">
        <div class="collect-box">
            <div class="collect">
                <div class="collect-top">
                    <p class="fontS20 marBot10 fontWei textInd4">粥品香坊（大运村）</p>
                    <div>
                        <ul>
                            <li :style="star1"></li>
                            <li :style="star1"></li>
                            <li :style="star1"></li>
                            <li :style="star1"></li>
                            <li :style="star2"></li>
                        </ul>
                        <span>（661）</span>
                        <span>月售690单</span>
                    </div>
                </div>
                <div class="collect-bottom">
                    <img src="../assets/imgs/favorite.svg" width="40" height="40">
                    <p>已收藏</p>
                </div>
            </div>
            <div class="minPrice">
                <div>
                    <p class="fontS16">起送价</p>
                    <p><span class="fontS32">20</span>元</p>
                </div>
                <div>
                    <p class="fontS16">商家配送
                    </p>
                    <p class="text-center"><span class="fontS32">4</span>元</p>
                </div>
                <div>
                    <p class="fontS16">平均配送时间</p>
                    <p class="text-center"><span class="fontS32">39</span>分钟</p>
                </div>
            </div>
        </div>
        <div class="activity">
            <div class="activity-top padd10TopBot">
                <p class="fontS24 fontWei paddBot10">公告与活动</p>
                <p class="textInd2rem colorf60 fontS18 paddRig20 padLef20 lineH36">{{merchantInfro.bulletin}}</p>
            </div>
            <ul>
                <li class="fontS18 " v-for="(item,index) in merchantInfro.supports" :key="index">
                    <img width="20" height="20" class="marLef20" :src="require('../assets/imgs/discount_3@2x.png')"
                         alt="">
                    <p>{{item.description}}</p>
                </li>
            </ul>
        </div>
        <div class="merchantScenery">
            <p class="fontS24 fontWei padd10TopBot">商家实景</p>
            <div>
                <ul>
                    <li class="fontS18" v-for="(value,indexs) in merchantInfro.pics" :key="indexs">
                        <img width="180" height="120"
                             :src="value"
                             alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="merchantInfro">
            <p>商家信息</p>
            <ul>
                <li class="fontS18 " v-for="(value,indexs) in merchantInfro.infos" :key="indexs">{{value}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {merchant} from "../api/apis"

    export default {
        data() {
            return {
                star1: {
                    backgroundImage: "url(" + require("../assets/imgs/star-gray (2).png") + ")",
                    backgroundSize: "cover"
                },
                star2: {
                    backgroundImage: "url(" + require("../assets/imgs/star-gray (1).png") + ")",
                    backgroundSize: "cover"
                },
                merchantInfro: "",
            }
        },
        methods: {
            async getInfro(index) {
                let {data} = await merchant();
                this.merchantInfro = data.data;
            }
        },
        created() {
            this.getInfro()
        }
    }
</script>

<style lang="less" >
    body{
        background-color: #f5f5f5;
    }
    .merchant {
        width: 100%;
        height: 100%;

        .collect-box {
            background-color: #fff;
            display: flex;
            flex-direction: column;
            border-bottom: 2px solid #ccc;

            .collect {
                width: 90%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: row;
                border-bottom: 2px solid #ccc;

                .collect-top {
                    padding: 20px 0;
                    display: flex;
                    flex-direction: column;

                    & > div:nth-child(2) {
                        display: flex;
                        flex-direction: row;
                        justify-self: center;

                        ul {
                            display: flex;
                            flex-direction: row;
                        }

                        li {
                            width: 20px;
                            height: 20px;
                            margin-right: 2px;
                        }
                    }
                }

                .collect-bottom {

                }
            }

            .minPrice {
                padding: 18px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
            }
        }

        .activity {
            background-color: #fff;
            margin-top: 30px;

            .activity-top {
                width: 90%;
                margin: 0 auto;
            }

            ul {
                width: 90%;
                margin: 0 auto;

                li {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;
                    border-top: 2px solid #ccc;
                    padding: 16px 0;
                    text-indent: 20px;
                }
            }
        }

        .merchantScenery {
            width: 100%;
            margin-top: 30px;
            padding-bottom: 30px;
            background-color: #fff;
            & > p:nth-child(1) {
                width: 90%;
                padding: 20px 0;
                margin: 0 auto;
            }

            & > div:nth-child(2) {
                width: 90%;
                padding-left: 20px;
                margin: 0 auto;
                overflow: scroll;
                ul {
                    width: 740px;
                    display: flex;
                    flex-direction: row;
                    li {
                        margin-right: 20px;
                    }
                }

            }
        }

        .merchantInfro{
            height: 400px;
            margin: 30px 0;
            background-color: #fff;
            &>p:nth-child(1){
                font-size: 24px;
                font-weight: bold;
                text-indent: 20px;
                padding: 20px 0;
            }
            &>ul:nth-child(2){
                width: 90%;
                margin: 0 auto;
                li{
                    padding: 20px ;
                    border-top: 2px solid #ccc;
                }
            }
        }

    }

</style>