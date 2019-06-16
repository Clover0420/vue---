<template>
    <div class="history">
        <div class="top">
            <div class="head">
                <i class="iconfont icon-arrow-left" @click="$router.back()"></i>
                <p>审批历史</p>
            </div>
        </div>
        <div class="content">
            <div class="message">
                <ul>
                    <li>
                        <span>申请人</span>
                        <p>lilian liyan lin</p>
                    </li>
                    <li>
                        <span>员工职务</span>
                        <p>P2</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span>部门</span>
                        <p>星巴克运营部</p>
                    </li>
                    <li>
                        <span>员工编号</span>
                        <p>06060606</p>
                    </li>
                </ul>
            </div>
            <ol class="historylist" v-if="list">
                <li v-for="(item,index) in list" :key="index" >
                    <p class="leftTime">
                        <span>2018.01.08</span>
                        <span>21:58</span>
                    </p>
                    <div class="img">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="contents">
                        <p>{{item.nickname}}</p>
                        <span>主管循环审批</span>
                        <p class="historyRes">
                            审批意见：同意此审批
                        </p>
                    </div>
                </li>
            </ol>
            <div class="elseMsg" v-else>
                暂无审批历史
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/api"
export default {
    props:{
        id:String
    },
    data(){
        return {
            list:[]
        }
    },
    computed: {
       
    },
    methods:{
        
    },
    created(){
        api.taskHistory({
            applicationNumber:this.id
        }).then(res=>{
            console.log(res.data.data);
            this.list = res.data.data
        })
    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/common.scss";
.history{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display:flex;    
    flex-direction: column;
    overflow: hidden;
    .top{
        width: 100%;
        height: pxTorem(170px);
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
    }
    .content{
        width: 90%;
        height: 100%;
        overflow: auto;
        margin: pxTorem(-70px) auto 0;
        border-radius: pxTorem(20px);
        overflow: hidden;
        .message{
            width: 100%;
            height: pxTorem(100px);
            background-color: #fff;
            border-radius: pxTorem(20px);
            box-shadow: 0 pxTorem(3px) pxTorem(10px) #ccc;
            display: flex;
            ul{
                flex: 1;
                li{
                    display: flex;
                    padding: pxTorem(17px) pxTorem(20px) pxTorem(12px) pxTorem(17px) ;
                    span{
                        width: 40%;
                        color: #777;
                    }
                    p{
                        width: 60%;
                    }
                }
            }
        }
        .elseMsg{
            margin-top: pxTorem(50px);
            margin-left: pxTorem(20px);
        }
        .historylist{
            width: 100%;
            height: 100%;
            margin-top: pxTorem(30px);
            li{
                height: pxTorem(80px);
                display: flex;
                justify-content: space-around;
                .leftTime{
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                .img{
                    width: pxTorem(40px);
                    height: pxTorem(40px);
                    border-radius: pxTorem(40px);
                    background-color: #aaa;
                    margin: 0 pxTprem(10px);
                    text-align: center;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 140%;
                        height: 140%;
                        
                    }
                }
            }
        }
    }
}

</style>