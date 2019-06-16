<template>
    <div class="logins">
        <div class="header">
            <span>×</span>
            <p>欢迎来到星享俱乐部</p>
        </div>
        <div class="main">
            <div class="inputList">
                <input type="text" placeholder="手机号码" v-model="phonevalue">
                <p>
                    <input type="text" placeholder="验证码" v-model="testnumvalue">
                    <span>获取验证码</span>
                </p>
            </div>
            <button @click="handelLogin">登录/注册</button>
            <p class="linkTo">使用帐号密码登录</p>
            <div class="footerType">
                <p>使用以下方式进行账户注册/登录</p>
                <p>
                    <i class="iconfont icon-taobao1"></i>
                    <i class="iconfont icon-zhifubao1"></i>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import api from '@/api';
export default {
    data(){
        return {
            phonevalue:"",
            testnumvalue:"",
            phoneReg:/^1[2345]\d{9}$/
        }
    },
    methods:{
        handelLogin(){
            if(this.testnumvalue.trim() !== "" && this.phoneReg.test(this.phonevalue) ){
                api.userLogin({
                    phone:this.phonevalue,
                    password:this.testnumvalue
                }).then(res=>{
                    console.log(res);
                    
                    window.localStorage.setItem("token",res.data.token)
                }).catch(error=>{
                    console.log(error)
                })
            }else{
                alert("密码和手机号输入有误");
            }
        }
    }
}
</script>
<style lang="scss">
@import "../../static/scss/common.scss";
#app{
    width: 100%;
    height: 100%;
}

.logins{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    .header{
        background-color: #fff;
        width: 100%;
        height: pxTorem(100px);
        padding-left: pxTorem(14px);
        font-size: pxTorem(24px);
        font-weight: bold;
        box-shadow: 0 pxTorem(3px) pxTorem(10px) #ccc;
        box-sizing: border-box;
        span{
            display: block;
            padding: pxTorem(5px) 0;
            font-weight: lighter;
            font-size: pxTorem(30px);
        }
    }
    .main{
        width: 90%;
        margin-top: pxTorem(25px);
        overflow: hidden;
        .inputList{
            p{
                position: relative;
                span{
                    position: absolute;
                    top: pxTorem(8px);
                    color: #999;
                    right: 0;
                }
            }
            input{
                display: block;
                width: 100%;
                height: pxTorem(30px);
                margin-bottom: pxTorem(30px);
                border-bottom: 1px solid #ccc;
            }
            ::-webkit-input-placeholder{
                font-size: pxTorem(14px);
                color: #999;
            }
        }
        button{
            margin-top: pxTorem(38px);
            width: 100%;
            height: pxTorem(40px);
            font-size: pxTorem(14px);
            background-color: #ccc;
            border: none;
            border-radius: pxTorem(40px);
            color: #fff;
        }
        .linkTo{
            color: rgb(24, 153, 125);
            font-size: pxTorem(13px);
            width: 100%;
            text-align: center;
            margin-top: pxTorem(37px)
        }
        .footerType{
            width: 100%;
            margin-top: pxTorem(160px);
            color: #888;
            p{
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .iconfont{
                display: block;
                font-size: pxTorem(37px);
                margin: pxTorem(10px)
            }
            .icon-zhifubao1{
                color: rgb(68, 147, 211);
            }
            .icon-taobao1{
                color: rgb(255, 145, 0);
            }
        }
    }
}
</style>