<template>
  <div class="accountBalance">
    <h4>账户余额</h4>

    <table v-if="loading">
        <thead>
          <tr>
            <th>币种</th>
            <th>余额</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i,index) in items" :key="index">
            <th>{{coinType[i.coin_type]}}</th>
            <th>{{i.amount | toFixed}}</th>
            <router-link :to="'/my/cash/recharge/'+i.coin_type" tag="th" style="color:blue">充值</router-link>
            <router-link :to="'/my/cash/withdraw/'+i.coin_type" tag="th" style="color:blue">提币</router-link>
            <router-link :to="'/my/cash/exchange/'+i.coin_type" tag="th" style="color:blue">兑换夺宝币</router-link>
          </tr>
           <tr>
            <th>夺宝币</th>
            <th>{{coins}}</th>
            <router-link to="/my/cash/outside/recharge" tag="th" style="color:blue" exact>场外充值</router-link>
            <router-link to="/my/cash/outside/transfer" tag="th" style="color:blue" exact>场外转账</router-link>
            <th></th>
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
import coinType from '../../../utils/coin_type'
export default {
  name: 'accountBalance',
  data () {
    return {
      items:[],
      coinType:null,
      coins:null,
      loading:false
    }
  },
  components:{

  },
  filters:{
    toFixed(str){
      return Number(str).toFixed(8)
    }
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    getList(){
      API.get(API.assetList.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.items = res.data.data;
          this.loading = true
        }
      })
    },
    getCoin(){
      API.get(API.getMyCoin.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.coins = res.data.data
        }
      })
    }
  },
  created(){
    this.coinType = coinType
  },  
  mounted(){
    
    this.getList();
    this.getCoin();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4{
  height:80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
table{
  width:80%;
  margin:auto
}
table tr{
  line-height: 40px;
  height: 40px;
}
</style>
