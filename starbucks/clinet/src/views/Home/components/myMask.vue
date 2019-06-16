<template>
  <transition name="mask">
    <div class="mask">
      <div class="return"  @click="handelMask"></div>
      <div class="choose">
        <p @click="detailOvertime">
          <i class="iconfont icon-email"></i>
          <span>加班</span>
        </p>
        <p @click="detailVacation">
          <i class="iconfont icon-QQ_weibo"></i>
          <span>休假</span>
        </p>
      </div>
    </div>
    </transition>
</template>
<script>
export default {
    props:['flag'],
    methods:{
        handelMask(){
            this.$emit('change',!this.flag)
        },
        detailOvertime(){
          this.$router.push({
            name:'onfile',
            params:{
              type:"overtime"
            }
          })
        },
        detailVacation(){
          this.$router.push({
            name:'onfile',
            params:{
              type:"vacation"
            }
          })
        }
    }
}
</script>
<style lang="css" scoped>
.mask-enter,
.mask-leave-to {
    opacity: 0;
}

.mask-enter-to,
.mask-leave {
    opacity: 1;
}
.mask-enter-active {
    transition: opacity 1s ease;
}
.mask-leave-active {
    transition: opacity 1s ease;
}

</style>
