<template>
    <div class="detail">
        <div class="top">
            <div class="head">
                <i class="iconfont icon-arrow-left" @click="$router.back()"></i>
                <p>{{ type == 'overtime' ? "办公室加班申请" : "办公室调休申请" }}</p>
            </div>
            <div class="userMes">
                <img :src="list.avatar" alt="">
                <table>
                    <tr>
                        <td class="tr_st">申请人姓名</td>
                        <td>{{list.nickname}}</td>
                    </tr>
                    <tr>
                        <td class="tr_st">直接主管</td>
                        <td>秦义超</td>
                    </tr>
                </table>
                <i class="iconfont icon-chevron-thin-right"></i>
            </div>
        </div>
        <div class="content">
            <div class="message">
                <p class="title">申请信息</p>
                <div class="dates">
                    <span>{{type == 'overtime' ? "加班" : "休假"}}日期</span>
                    <p>{{startTimeCom}}-{{endTimeCom}}</p>
                    <i class="iconfont icon-chevron-thin-right"></i>
                </div>
                <div class="dates">
                    <span>{{type == 'overtime' ? "加班" : "休假"}}类型</span>
                    <p>{{list.type}}</p>
                </div>
                <div class="dates">
                    <span>{{type == 'overtime' ? "加班" : "休假"}}起始时间</span>
                    <p>{{startTimeCom}}</p>
                    <i class="iconfont icon-chevron-thin-right"></i>
                </div>
                <div class="dates">
                    <span>{{type == 'overtime' ? "加班" : "休假"}}截止时间</span>
                    <p>{{endTimeCom}}</p>
                    <i class="iconfont icon-chevron-thin-right"></i>
                </div>
                <div class="dates">
                    <span>共计时数</span>
                    <p>{{sums}}</p>
                </div>
            </div>
            <div class="reasons">
                <p class="title">加班事由</p>
                <span>{{list.describes}}</span>
            </div>
            <div class="pictureFile">
                <p class="title">附件</p>
                <ol class="imglist">
                    <li v-for="(item,index) in list.annex" :key="index">
                        <img :src="'http://localhost:3000'+item" alt=""/>
                    </li>
                </ol>
            </div>
        </div> 
        <footer>
            <button  @click="toHistory">审批历史</button>
            <button @click="$router.back()" class="backActive">取消</button>
            <button class="active">同意</button>
        </footer>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import api from "@/api"
export default {
    props:{
        type:String,
        id:String
    },
    data(){
        return {
            list:[]
        }
    },
    computed: {
        startTimeCom(){
            return new Date(this.list.startTime).toLocaleDateString()
        },
        endTimeCom(){
            return new Date(this.list.endTime).toLocaleDateString()
        },
        sums(){
            return ((new Date(this.list.endTime)*1-new Date(this.list.startTime)*1)/1000/60/60).toFixed(1)
        }
    },
    methods:{
        ...mapActions('common',["takeAction"]),
        getData(){
            api[this.type+"Detail"]({
                applicationNumber:this.id
            }).then(res=>{
                this.list = res.data.data;
                console.log(this.list)
            })
        },
        toHistory(){
            this.$router.push({name:"history",params:{id:this.list.applicationNumber}})
        }
    },
    created(){
        this.takeAction();
        this.getData();
        console.log(new Date(this.list.startTime).toLocaleString())
    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/common.scss";
.detail{
    width: 100%;
    height: 100%;
    background-color: #eee;
    display:flex;    
    flex-direction: column;
    overflow: hidden;
    .top{
        width: 100%;
        height: pxTorem(200px);
        background-color: rgb(7, 119, 57);
        border-radius: 0 0 pxTorem(40px) pxTorem(40px);
        color: #fff;
        overflow: hidden;
        .head{
            width:100%;
            height: pxTorem(50px);
            line-height: pxTorem(50px);
            font-size: pxTorem(16px);
            text-align: center;
            position: relative;
            background-color: rgb(7, 119, 57);
            .iconfont{
                position: absolute;
                left: pxTorem(20px)
            }
        }
        .userMes{
            width: 100%;
            height: pxTorem(70px);
            display: flex;
            align-items: center;
            position: relative;
            .icon-chevron-thin-right{
                position: absolute;
                top: pxTorem(15px);
                right: pxTorem(20px);
                font-size: pxTorem(16px);
            }
            img{
                width: pxTorem(45px);
                border-radius:  pxTorem(45px);
                overflow: hidden;
                margin-left: pxTorem(30px)
            }
            table{
                margin-left: pxTorem(20px);
                .tr_st{
                    font-size: pxTorem(11px);
                    color: #ccc;
                }
                td{
                    font-size: pxTorem(13px);
                    color: #eee;
                    width: pxTorem(100px);
                    height: pxTorem(20px)
                }
            }
        }
    }
    .content{
        width: 90%;
        height: 100%;
        overflow: auto;
        margin: pxTorem(-30px) auto 0;
        .pictureFile,.reasons,.message{
            width: 100%;
            background-color: #fff;
            border-radius: pxTorem(10px);
            padding-bottom:  pxTorem(20px);
            margin-bottom: pxTorem(15px);
            box-shadow: pxTorem(2px) pxTorem(2px) pxTorem(10px) #ccc;
            .title{
                font-size: pxTorem(14px);
                width: 100%;
                height: pxTorem(50px);
                line-height: pxTorem(50px);
                padding-left: pxTorem(10px);
                border-bottom: pxTorem(1px) solid #eee;
            }
        }
        .pictureFile{
            .imglist{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                li{
                    width:32%;
                    height: pxTorem(100px);
                    border: 1px solid #aaa;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                    input{
                        width: 100%;
                        height: 100%;
                        z-index: 20;
                        opacity: 0;
                    }
                    span{
                        position: absolute;
                        left:40%;
                        top: 35%;
                        font-size: pxTorem(30px);
                        color: orangered;
                        font-weight: bold
                    }
                }
                
            }
        }
        .reasons{
            span{
                display: inline-block;
                padding: pxTorem(14px);
                font-size: pxTorem(13px)
            }
        }
        .message{
            .dates{
                width: 100%;
                color: #999;
                box-sizing: border-box;
                font-size: pxTorem(13px);
                padding-top: pxTorem(15px);
                padding-left:  pxTorem(13px);
                display: flex;
                justify-content: space-between;
                position: relative;
                p{
                    width: 60%;
                    border-bottom: 1px solid #ccc;
                    padding-bottom:  pxTorem(5px);
                    padding-right: pxTorem(15px);
                    margin-right: pxTorem(15px);
                    text-align: right;
                }
                .iconfont{
                    position: absolute;
                    top: pxTorem(15px);
                    right:  pxTorem(15px);
                    font-size:  pxTorem(12px);
                }
            }
        }
    }
    footer{
        width:100%;
        height:pxTorem(60px);
        display: flex;
        button{
            width: 50%;
            height: 100%;
            font-size: pxTorem(13px);
            border: none;
            outline: none;
            background-color: #ccc;
        }
        .active{
            background-color:  rgb(7, 119, 57);
            color: #fff;
        }
        .backActive{
            background-color: #444;
            color: #fff;
        }
    }
}

</style>