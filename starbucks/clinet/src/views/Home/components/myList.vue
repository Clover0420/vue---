<template>
  <ul class="list">
    <li v-for="(item,index) in data" :key="index" @click="pushInDetail(item.list_type,item.applicationNumber)">
      <p>
        <span>{{item.applicationNumber}}</span>
        <span>
          <i class="iconfont icon-twitter"></i>待审批
        </span>
      </p>
      <ol class="littleMessage">
        <li>
          <span class="front">申请人</span>
          <span>{{item.nickname}}</span>
        </li>
        <li>
          <span class="front">{{type == 'overtime' ? "加班" : "休假"}}类型</span>
          <span>工作日加班</span>
        </li>
        <li>
          <span class="front">{{type == 'overtime' ? "加班" : "休假"}}日期</span>
          <span>2019-02-02</span>
        </li>
        <li>
          <span class="front">{{type == 'overtime' ? "加班" : "休假"}}时数</span>
          <span>2.5</span>
        </li>
      </ol>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["data","type"],
  components: {},
  data() {
    return {};
  },
  methods: {
    pushInDetail(type,id){
      this.$router.push({
        name:'detail',
        params:{
          type,
          id
        }
      })
    }
  }
};
</script>
<style scoped lang="">
</style>