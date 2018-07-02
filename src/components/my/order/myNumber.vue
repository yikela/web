<template>
  <div class="winOrder">

      <h4>订单中奖码</h4>
      <p class="detail"><span class="time">购买时间：{{1}}</span><span>购买次数：{{1}}</span></p>
      <p class="number">夺宝码：<span v-for="(i,index) in numbers" :key="index" class="num">{{i}},</span></p> 
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'

export default {
  name: 'temp',
  data () {
    return {
      id:null,
      item:null,
      numbers:[]
    }
  },
  components:{

  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    getDetail(){
      API.get(API.goodDetial.url,{id:this.id},{}).then(res => {
        if(res.data.code == 200){
          this.item = res.data.data;
          // let start = res.data.data.start;
          // let end = res.data.data.next_start;
          let start = 1;
          let end = 15;
          for(var i = start;i<=end;i++){
            this.numbers.concat(i)
          }
        }
      })
    },
    aa(){
      let start = 1;
          let end = 15;
          for(var i = start;i<=end;i++){
            this.numbers.push(i)
          }
    }
  },
  created(){
    this.id = this.$route.params.id
  },
  mounted(){
    this.getDetail();
    this.aa()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.winOrder{
  width:80%;
  text-align:center;
}
h4{
  height:80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
.detail {
  height: 60px;
  line-height: 60px;
}
.detail .time {
  margin-right:80px;
}
</style>
