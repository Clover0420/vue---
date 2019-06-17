<template>
    <div class="detail">
        <div class="top">
            <div class="head">
                <i class="iconfont icon-arrow-left" @click="$router.back()" ></i>
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
                    <el-date-picker class="datePick" v-model="dateTime" type="date" placeholder="选择日期"/>
                    <i class="iconfont icon-chevron-thin-right"></i>
                </div>
                <div class="dates">
                    <span>{{type == 'overtime' ? "加班" : "休假"}}类型</span>
                    <select v-model="types">
                        <option value="">{{type == 'overtime' ? "加班申请" : "休假"}}类型</option>
                        <option v-for="(item,indes) in overtimeList" :key="indes">{{item.name}}</option>
                    </select>
                </div>
                <div class="dates">
                    <span>{{type == 'overtime' ? "加班" : "休假"}}起始时间</span>
                    <el-time-picker class="datePick" format="HH:MM" v-model="startTime" placeholder="选择时间" />
                    <i class="iconfont icon-chevron-thin-right"></i>
                </div>
                <div class="dates">
                    <span>{{type == 'overtime' ? "加班" : "休假"}}截止时间</span>
                    <el-time-picker class="datePick"  format="HH:MM" v-model="endTime" placeholder="选择时间"/>
                    <i class="iconfont icon-chevron-thin-right"></i>
                </div>
                <div class="dates">
                    <span>共计时数</span>
                    <span class="difference">{{isNaN(sums) ? 0 :sums}}</span>
                </div>
            </div>
            <div class="reasons">
                <p class="title">{{type == 'overtime' ? "加班" : "休假"}}事由</p>
                <textarea cols="43" rows="10" placeholder="请输入相关描述" v-model="reasonValue"></textarea>
            </div>
            <div class="commit">
                <p class="title">上传图片</p>
                
                <ol class="imglist">
                    <li v-for="(item,index) in imgList" :key="index">
                        <img :src="'http://localhost:3000'+item" alt=""/>
                    </li>
                    <li>
                        <input type="file" @change="onFile" ref="fils">
                        <span>+</span>
                    </li>
                </ol>
            </div>
        </div>  
        <footer>
            <button @click="$router.back()">取消</button>
            <button class="active" @click="submitBtn">提交</button>
        </footer>
    </div>
</template>
<script>
import api from "@/api"
export default {
    props:{
        type:String
    },
    data(){
        return {
            list:[],
            dateTime:"",
            startTime:"",
            endTime:"",
            typeFiles:["jpg","jpeg","png","gif"],
            mbLimit:3,
            imgList:[],
            reasonValue:"",
            overtimeList:[
                {
                    type:1,
                    name:"双休日加班"
                },{
                    type:2,
                    name:"节假日加班"
                },{
                    type:3,
                    name:"工作日加班"
                }
            ],
            vacationList:[
                {
                    type:1,
                    name:"双休日加班"
                },{
                    type:2,
                    name:"节假日加班"
                }
            ],
            types:"",
        }
    },
    computed: {
        sums(){
            return ((new Date(this.endTime)*1-new Date(this.startTime)*1)/1000/60/60).toFixed(1)
        }
    },
    methods:{
        onFile(e){
            let obj = this.$refs.fils.files[0];
            let type = obj.type.match(/\/(\w+)$/)[1];
            if(this.typeFiles.includes(type) && this.mbLimit*1024*1024 > obj.size){
                let formDate = new FormData();
                formDate.append("file",obj);
                api.onFileDetail(formDate).then(res=>{
                     this.imgList.push(res.data.url);
                })
            }else{
                console.log(false)
            }
        },
        submitBtn(){
            let newTypes = []
            if(this.type == "overtime"){
                newTypes = this.overtimeList.filter(item=> item.name == this.types);
            }else{
                newTypes = this.vacationList.filter(item=> item.name == this.types);
            }

            api[this.type+'Submit']({
                annex:this.imgList,
                describe:this.reasonValue,
                endTime:this.endTime,
                startTime:this.startTime,
                type:newTypes[0].type
            }).then(res=>{
                console.log(res);
                if(res.data.msg == "提交成功"){
                    this.$alert("提交成功")
                    this.msg="提交成功";
                    setTimeout(()=>{
                        this.$router.push("/home");
                    },2000)
                    
                }else{
                    this.$alert("提交失败，请重新填写")
                    this.msg="提交失败，请重新填写";
                }
            })
        }
    },
    created(){
        api.isLogin().then(res=>{
            this.list=res.data.data
        })
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
    position: relative;
    .mask{
        position: absolute;
        width: pxTorem(200px);
        height: pxTorem(100px);
        background-color: rgba($color: #000000, $alpha: .5);
        border-radius: pxTorem(30px);
        top: 40%;
        left: 22%;
        line-height: pxTorem(100px);
        text-align: center;
        color: #fff;
    }
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
        width: 95%;
        height: 100%;
        overflow: auto;
        border-radius: pxTorem(10px);
        margin: pxTorem(-30px) auto 0;
        .commit,.reasons,.message{
            margin: 0 auto;
            width: 90%;
            background-color: #fff;
            border-radius: pxTorem(10px);
            padding-bottom:  pxTorem(20px);
            margin-bottom: pxTorem(15px);
            box-shadow: pxTorem(2px) pxTorem(2px) pxTorem(10px) #ccc;
            overflow: hidden;
            .title{
                font-size: pxTorem(14px);
                width: 100%;
                height: pxTorem(50px);
                line-height: pxTorem(50px);
                padding-left: pxTorem(10px);
                border-bottom: pxTorem(1px) solid #eee;
            }
        }
        .commit{
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
                        width:100%;
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
            height: pxTorem(200px);
            textarea{
                padding-left: 10px;
                padding-bottom: pxTorem(5px);
                font-size: pxTorem(13px);
            }
        }
        .message{
            height: 50%;
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
                .difference{
                    font-size: pxTorem(13px);
                    padding-top: pxTorem(15px);
                    padding-right:  pxTorem(23px);
                }
                select{
                    background-color: #eee;
                    height: pxTorem(25px);
                    border: none;
                    outline: none;
                    padding-right:  pxTorem(15px);
                    margin-right:  pxTorem(18px);
                }
                .datePick{
                    padding-right:  pxTorem(15px);
                    margin-right:  pxTorem(18px);
                }
                ::-webkit-input-placeholder{
                    text-align: right;
                }
                .iconfont{
                    position: absolute;
                    top: pxTorem(25px);
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
    }
}



</style>