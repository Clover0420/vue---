<template>
    <div class="search">
        <header>
            <i class="iconfont icon-fangdajing"></i>
            <input type="text" placeholder="搜索">
            <button @click="$router.back()">取消</button>
        </header>
        <p>搜索指定内容</p>
        <div class="tips_st">
            <span>加班类型</span>
            <span>发起时间</span>
            <span>加班日期</span>
        </div>
        <div class="tips_sed">
            <span>申请单号</span>
            <span>加班时数</span>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods:{
        ...mapActions('common',["takeAction"])
    },
    created(){
        this.takeAction()
    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/common.scss";
.search{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    font-size: pxTorem(14px);
}
.tips_st,.tips_sed{
    width: 100%;
    margin-top: pxTorem(20px);
    display: flex;
    justify-content: space-around;
}
p{
    width: 100%;
    margin-top: pxTorem(50px);
    color: #aaa;
    text-align: center;
}
header{
    margin: 0 auto;
    width: 95%;
    height: pxTorem(50px);
    box-shadow: none;
    line-height: pxTorem(50px);
    position: relative;
    .iconfont{
        display: block;
        position: absolute;
        left: pxTorem(10px);
        color: #666;
    }
    input{
        width: 70%;
        height: pxTorem(30px);
        line-height: pxTorem(30px);
        background-color: #f7f7f7;
        padding-left: pxTorem(30px);
        border-radius: pxTorem(15px);
    }
    button{
        width: pxTorem(60px);
        height: pxTorem(50px);
        font-size: pxTorem(15px);
        text-align: center;
        border: none;
        outline: none;
        background-color: #fff;
        color: #0c6142;
    }
    
}
</style>