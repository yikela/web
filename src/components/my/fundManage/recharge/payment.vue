<template>
  <div class="payment">
    <h4>充值记录</h4>
    <table>
        <thead>
          <tr>
            <th>充值时间</th>
            <th>充值虚拟币数量</th>
            <th>充值游戏币数量</th>
            <th>充值汇率</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i,index) in items" :key="index">
            <th>{{i.created_at}}</th>
            <th>{{i.amount | toFixed}}{{coinType[i.coin_type]}}</th>
            <th>{{Number(i.token_amount).toFixed(2)}}</th>
            <th>{{Number(i.rate).toFixed(2)}}</th>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
import coinType from '../../../../utils/coin_type'
export default {
  name: 'recharge',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[],
      lastId:null,
      coinType:null
    }
  },
  components:{
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN','USER_SIGNOUT']),
    ...mapActions(['userLogout', 'userLogin']),
    getList(){
      API.get(API.getPayment.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.items = res.data.data
        }else if(res.data.code == 401){
          this.$toast(res.data.msg);
          this.USER_SIGNOUT();
          setTimeout(()=>{
            this.$router.push('/login');
          },2000)
        }else{
          this.$toast(res.data.msg);
        } 
      })
    }
  },
  filters:{
    toFixed(str){
      return Number(str).toFixed(8)
    }
  },
  created(){
    this.coinType = coinType
  },
  mounted(){
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.payment{
  width:80%;
  margin:auto;
}
h4{
  height:80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
table{
  width:100%;
  margin:auto
}
</style>
