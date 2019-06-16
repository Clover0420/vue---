<template>
    <div class="chooselist">
        <p>{{title}}</p>
        <ul>
            <li v-for="(item,index) in child" :key="index" :class="{'chooseLiActive':ind == index}" @click="handelInd(index)">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:["title","child"],
    data(){
        return {
            ind:0
        }
    },
    methods:{
        handelInd(index){
            this.ind = index
        }
    }
}
</script>
<style lang="scss">
@import "../static/scss/common.scss";
div.chooselist{
    width: 100%;
    margin-top: pxTorem(40px);
    p{
        font-size: pxTorem(18px);
        color: #444;
        margin-left: pxTorem(20px)
    }
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding-left: pxTorem(10px);
        li{
            background-color: #fff;
            color: #444;
            margin-top: pxTorem(20px);
            margin-left: pxTorem(10px);
            width: 40%;
            height: pxTorem(35px);
            line-height: pxTorem(35px);
            text-align: center;
            font-size: pxTorem(15px);
            border-radius: pxTorem(7px);
        }
        .chooseLiActive{
            background-color: rgb(7, 119, 57);
            color: #eee;
        }
    }
}
</style>