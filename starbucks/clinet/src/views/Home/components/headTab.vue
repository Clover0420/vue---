<template>
    <div>
        <dl v-for="(item,index) in routeList" :key="index" :class="{active:ind==index}" @click="handelClick(index)">
          <dt>
            <i :class="item.classname"></i>
          </dt>
          <dd>{{item.title}}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:["routeList"],
    components:{

    },
    data(){
        return {
          ind:0
        }
    },
    methods:{
      handelClick(index){
        this.ind = index;
        this.$emit("changed",this.ind)
      }
    },
    created(){

    },
    mounted(){

    }
}
</script>