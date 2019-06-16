<template>
    <div class="choose">
        <div class="chooseHead">
            <i class="iconfont icon-arrow-left" @click="$router.back()"></i>
            <p>筛选</p>
        </div>
        <choose-list v-for="(item,index) in list" 
        :key="index" 
        :title="item.title"
        :child="item.child"
        ></choose-list>
    </div>
</template>
<script>
import chooseList from "../../components/chooseList";
export default {
    components:{
        chooseList
    },
    data(){
        return {
            list:[
                {
                    title:"级别",
                    child:[
                        {
                            name:"直接下属"
                        },{
                            name:"二级下属"
                        }
                    ]
                },{
                    title:"假期类型",
                    child:[
                        {
                            name:"全部"
                        },{
                            name:"年假"
                        },{
                            name:"Carryover年假"
                        },{
                            name:"病假"
                        },{
                            name:"调休假"
                        },{
                            name:"丧假"
                        },{
                            name:"陪产假"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/common.scss";
.choose{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .chooseHead{
        width: 100%;
        height: pxTorem(50px);
        line-height: pxTorem(50px);
        text-align: center;
        font-size: pxTorem(17px);
        font-weight: bold;
        position: relative;
        .iconfont{
            font-size: pxTorem(18px);
            font-weight: lighter;
            position: absolute;
            left: pxTorem(20px)
        }
    }
}

</style>