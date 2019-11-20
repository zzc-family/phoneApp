<template>
    <div class="shopCars" style="margin-bottom: 60px">
        <p class="fontS32 fontWei padLef10 padTop6">购物车</p>
        <div class="shopCarsSecond" v-for="(item,index) in goodsInfro">
            <p style="width: 200px;">{{item.name}}</p>
            <div class="num">
                <div  @click="clickChangeNum(-1,item.name)"  class="text-center colorWhite" style="border-radius: 50%;width: 20px;height: 20px;background-color: #f60">-</div>
                <div class="text-center fontS18 lineH20" style="width: 24px;line-height: 22px">{{item.num}}</div>
                <div  @click="clickChangeNum(1,item.name)" class="text-center colorWhite" style="border-radius: 50%;width: 20px;height: 20px;background-color: #f60">+</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$store.getters.putUpShopCarL);
        },
        computed:{
            goodsInfro(){
                return this.$store.getters.putUpShopCarL
            }
        },
        methods:{
            clickChangeNum(num,name){
                this.$store.commit({
                    type:"changeNum",
                    name,
                    num
                })
            },
        }
    }
</script>

<style lang="less" scoped>
    .shopCars{
        .shopCarsSecond{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
            .num{
                flex-grow: 0.6;
                width: 100%;
                align-self: self-end;
                display: flex;
                flex-direction: row;
            }
        }
    }

</style>