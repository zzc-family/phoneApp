<template>
    <div class="evaluate">
        <div class="evaluateTop ">
            <div class="topLeft ">
                <p class="fontS32 colorRed text-center">3.9</p>
                <p class="fontS16 fontWei">综合评分</p>
                <p class="colorGray">高于周边商家69.2%</p>
            </div>
            <div class="topRight">
                <div class="serve1 marTop5">
                    <span class="fontS18 fontWei ">服务态度</span>
                    <ul>
                        <li :style="star1"></li>
                        <li :style="star1"></li>
                        <li :style="star1"></li>
                        <li :style="star1"></li>
                        <li :style="star2"></li>
                        <li class="colorf60 fontS14">3.9</li>
                    </ul>
                </div>
                <div class="serve1 marTop5">
                    <span class="fontS18 fontWei ">服务态度</span>
                    <ul>
                        <li :style="star1"></li>
                        <li :style="star1"></li>
                        <li :style="star1"></li>
                        <li :style="star1"></li>
                        <li :style="star2"></li>
                        <li class="colorf60 fontS14">4.0</li>
                    </ul>
                </div>
                <p class="serve2">
                    <span class="fontS18 fontWei ">送达时间</span>
                    <span class="colorGray marLef10 fontS16">44分钟</span>
                </p>
            </div>
        </div>
        <div class="evaluateBottom marTop20">
            <div class="btn">
                <span><a href="javascript:">全部</a></span>
                <span class="marLef10"><a href="javascript:">满意</a></span>
                <span class="marLef10"><a href="javascript:">不满意</a></span>
            </div>
            <div class="logoEvaluate">
                <div  :style="evaluate"></div>
                <div class="fontS16">只看有内容的评价</div>
            </div>
            <ul class="userEvaluate">
                <li v-for="(item,index) in userInfro" :key="index" class="userEvaluate-li">
                    <img :src="item.avatar">
                    <div>
                        <p class="fontS14 fontWei">{{item.username}}</p>
                        <p class="fontS18 marTop5 fontWei">{{item.text}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {evaluate} from "../api/apis"
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
                evaluate:{
                    width:"20px",
                    height:"20px",
                    borderRadius:"50%",
                    backgroundImage: "url(" + require("../assets/imgs/check_circle.svg") + ")",
                    backgroundSize: "cover",
                },
                userInfro:""
            }
        },
        methods:{
            async getInfro(){
                let {data} = await evaluate();
                this.userInfro = data.data;
            }
        },
        created() {
            this.getInfro()
        }

    }
</script>

<style lang="less" scoped>
    .evaluate {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: #f2f2f2;

        .evaluateTop {
            display: flex;
            background-color: #fff;

            .topLeft {
                flex: 0.4;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px 0;
            }

            .topRight {
                flex: 0.6;
                padding: 10px 0;

                .serve1 {
                    display: flex;
                    flex-direction: row;

                    ul {
                        flex: 1;
                        display: flex;
                        margin-left: 10px;
                        flex-direction: row;

                        li {
                            width: 20px;
                            line-height: 24px;
                            margin-left: 2px;
                            height: 20px;
                        }
                    }
                }

                .serve2 {
                }


            }
        }

        .evaluateBottom {
            flex: 1;
            display: flex;
            flex-direction: column;
            background-color: #fff;

            .btn {
                display: flex;
                height: 80px;
                padding: 30px 0;
                width: 90%;
                margin: 0 auto;
                background-color: #fff;
                align-items: center;
                flex-direction: row;
                border-bottom: 1px solid #ccc;

                span {
                    padding: 10px 20px;
                    height: 40px;
                    font-size: 16px;
                    cursor: pointer;
                }

                & > span:nth-child(1) {
                    background-color: #00a0dc;
                    color: white;
                }

                & > span:nth-child(2) {
                    background-color: #ccecf7;
                }

                & > span:nth-child(3) {
                    background-color: #f2f2f2;
                }
            }

            .logoEvaluate {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 60px;
                width: 100%;
                padding: 30px 0;
                border-bottom: 1px solid #ccc;
                &>div:nth-child(1){
                    margin-left: 24px;
                }
            }
            .userEvaluate{
                flex: 1;
                width: 90%;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                .userEvaluate-li{
                    display: flex;
                    padding: 20px 0;
                    flex-direction: row;
                    border-bottom:1px solid #999;
                    &>img:nth-child(1){
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        margin-right: 20px;
                    }
                    &>div:nth-child(2){
                        flex: 1;
                    }
                }
            }
        }
    }
</style>