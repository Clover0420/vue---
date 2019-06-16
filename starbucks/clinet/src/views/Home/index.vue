<template>
  <div class="homewrap">
    <header>
      <ul>
        <router-link to="/login" tag="li">
          <i class="iconfont icon-arrow-left" @click="$router.back()" id="returns"></i>
        </router-link>
        <li class="fontTit">加班/休假</li>
        <li>
          <i class="iconfont icon-jianpan"></i>
          <router-link to="/search" tag="i" class="iconfont icon-fangdajing"></router-link>
        </li>
      </ul>
      <div class="headTab" ref="headIcon">
        <head-tab :routeList="routeList" @changed="headTab"></head-tab>
      </div>
    </header>
    <main>
      <div>
        <content-tab @typechange="contentTab" :type="dataOption.type"></content-tab>
        <my-list :data="data" :type="this.dataOption.type"></my-list>
      </div>
    </main>
    <div class="pushList" @click="handelMask" v-if="flag">
      <i class="iconfont icon-jia"></i>
      <span>发起任务</span>
    </div>
    <my-mask v-else :flag="flag" @change="takeMask"></my-mask>
  </div>
</template>
<script>
import api from "@/api";
import headTab from "./components/headTab";
import contentTab from "./components/contentTab";
import myList from "./components/myList";
import myMask from "./components/myMask";
import {mapActions} from "vuex"
export default {
  components: {
    headTab,
    contentTab,
    myList,
    myMask
  },
  data() {
    return {
      routeList: [
        {
          path: "/home/waitdo",
          classname: "iconfont icon-05",
          title: "待处理"
        },
        {
          path: "/home/alreadypush",
          classname: "iconfont icon-07",
          title: "已发起"
        },
        {
          path: "/home/alreadydo",
          classname: "iconfont icon-yibangding",
          title: "已处理"
        }
      ],
      flag:true,
      dataOption:{
        page:1,
        pageSize:10,
        create_at:0,
        type:'overtime',
        status:0
      },
      data:[]
    };
  },
  methods: {
    ...mapActions('common',["takeAction"]),
    handelMask() {
      this.flag = !this.flag;
    },
    takeMask(flag){
      this.flag = flag
    },
    getTaskList(){
      api.getList(this.dataOption).then(res=>{
        this.data=res.data.data;
      })
    },
    headTab(ind){
      this.dataOption.status = ind;
      this.getTaskList()
    },
    contentTab(types){
      this.dataOption.type = types;
      this.getTaskList()
    }
  },
  created() {
    this.takeAction();
    this.getTaskList();
    console.log(this.$router)
  }
};
</script>
<style lang="scss">
@import "../../static/scss/common.scss";
#app {
  width: 100%;
  height: 100%;
  font-family: "微软雅黑";
}
.homewrap {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pushList {
  display: block;
  width: 40%;
  height: pxTorem(50px);
  background-color: rgb(7, 119, 57);
  position: fixed;
  bottom: pxTorem(40px);
  right: pxTorem(20px);
  border-radius: pxTorem(30px);
  line-height: pxTorem(50px);
  text-align: center;
  color: #fff;
  font-size: pxTorem(16px);
  .iconfont {
    font-size: pxTorem(15px);
    padding: 0 pxTorem(5px);
  }
}

.mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: .5);
  .return{
    width: 100%;
    height: 80%;
  }
  .choose{
    height: 20%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      display: flex;
      flex-direction: column;
      margin: 0 pxTorem(50px);
      align-items: center;
      .iconfont{
        font-size: pxTorem(30px)
      }
      .icon-email{
        color: rgb(238, 165, 55);
      }
      .icon-QQ_weibo{
        color: rgb(80, 189, 103);
      }
    }
  }
}

main {
  width: 100%;
  height: 100%;
  margin-top: pxTorem(30px);
  overflow-y: auto;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;

    .list {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      background-color: #eee;
      li {
        width: 100%;
        height: pxTorem(120px);
        background-color: #fff;
        margin-bottom: pxTorem(13px);
        p {
          width: 100%;
          height: pxTorem(40px);
          line-height: pxTorem(40px);
          display: flex;
          justify-content: space-between;
          color: #999;
          font-size: pxTorem(13px);
          span {
            padding: 0 pxTorem(20px);
          }
          .iconfont {
            font-size: pxTorem(14px);
            padding: pxTorem(3px);
            color: orange;
          }
        }
        ol {
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          padding: pxTorem(6px) pxTorem(20px);
          li {
            width: 50%;
            height: auto;
            display: flex;
            justify-content: flex-start;
            font-size: pxTorem(13px);
            .front {
              width: 40%;
              color: #999;
            }
          }
        }
      }
    }
    .contentTab {
      width: 100%;
      height: pxTorem(50px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        position: absolute;
        top: 40%;
        right: 5%;
        .iconfont {
          font-size: pxTorem(14px);
          padding-left: pxTorem(5px);
          color: #888;
          font-weight: bold;
        }
      }
      ul {
        width: 60%;
        border: pxTorem(2px) solid rgb(7, 119, 57);
        border-radius: pxTorem(20px);
        height: pxTorem(30px);
        display: flex;
        overflow: hidden;
        background-color: rgb(7, 119, 57);
        li {
          width: 100%;
          line-height: pxTorem(30px);
          height: 100%;
          flex: 1;
          text-align: center;
          background-color: #fff;
          color: rgb(7, 119, 57);
        }
        .liActive {
          background-color: rgb(7, 119, 57);
          color: #fff;
        }
      }
    }
  }
}
header {
  widows: 100%;
  height: pxTorem(120px);
  box-shadow: 0 pxTorem(3px) pxTorem(20px) #ccc;
  ul {
    height: pxTorem(40px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      font-size: pxTorem(16px);
      color: #555;
      i.iconfont {
        font-size: pxTorem(16px);
        padding: 0 pxTorem(10px);
      }
      #returns {
        padding-left: pxTorem(20px);
        font-size: pxTorem(20px);
      }
    }
    .fontTit {
      color: #333;
      font-weight: bold;
    }
  }
  .headTab {
    div{
      height: pxTorem(80px);
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    
    dl {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #ccc;
      .iconfont {
        font-size: pxTorem(22px);
      }
      &.active {
      color: rgb(7, 119, 57);
    }
    }
  }
}
</style>