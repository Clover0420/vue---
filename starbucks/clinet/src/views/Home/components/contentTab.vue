<template>
  <div class="contentTab">
    <ul ref="contentIcon">
      <li v-for="(item,index) in list" :key="index" :class="{liActive:type===item.type}" @click="changLi(item.type)">
        {{item.name}}
      </li>
    </ul>
    <p>
      <i class="iconfont icon-gongzuo"></i>
      <router-link to="/filtertypes" tag="i" class="iconfont icon-zhuanhuan"></router-link>
    </p>
  </div>
</template>
<script>
export default {
  props:['type'],
  data() {
    return {
      list:[
        {
          name:"加班",
          type:"overtime"
        },{
          name:"休假",
          type:"vacation"
        }
      ],
      types:'overtime'
    };
  },
  methods: {
    changLi(type){
      this.types = type;
      this.$emit('typechange',this.types)
    }
  }
};
</script>