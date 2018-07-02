<template>
  <div class="myself">

        <div class="side">
          <slider-item :prop="myOrder"></slider-item>
          <slider-item :prop="myCash"></slider-item>
          <slider-item :prop="myInvite"></slider-item> 
          <slider-item :prop="myQuestion"></slider-item> 

        </div>

      <div class="searchResult">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
  import sliderItem from './sideBar.vue'
export default {
  name: 'myself',
  data () {
    return {
      myOrder:{
        parentItem: "我的订单",
        childItems: [{name:'订单列表',to:'/my/order/list'}, {name:'中奖订单',to:'/my/order/win'}]
      },
      myCash:{
        parentItem: "我的资金",
        childItems: [{name:'账户余额',to:'/my/cash/balance'}, {name:'账户明细',to:'/my/cash/detail'}]
      },
      myInvite:{
        parentItem: "我的邀请",
        childItems: [{name:'我的邀请111',to:'/my/order/list'}, {name:'我的邀请222',to:'/my/order/win'}]
      },
      myQuestion:{
        parentItem: "我的问题",
        childItems: [{name:'进行提问',to:'/my/question/add'}, {name:'历史提问',to:'/my/question/list'}]
      }
    }
  },
  components:{
    sliderItem
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
  },
  created(){

  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myself{
  min-height: 800px;
  display: flex;
  flex-flow: row nowrap
}


 .side{
    border-top: 1px solid #eee;
    /*padding-top: 5px;*/
    background-color: #f7f6f4;
    width: 120px;
    background-color: #f7f6f4;
  }



  .searchResult {
    float: left;
    width: 1080px;
    min-height:800px;
    padding: 25px
  }
</style>
