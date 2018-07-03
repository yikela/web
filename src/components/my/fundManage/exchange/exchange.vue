<template>
  <div id="exchange">
    <p><router-link to="/my/cash/payment/list">充值记录</router-link></p>
    <h4>兑换</h4>
    <table v-if="loading">
        <thead>
          <tr>
            <th>币种</th>
            <th>余额</th>
            <th>B网汇率</th>
            <th>可兑换数量</th>

            
          </tr>
        </thead>
        <tbody>
            <tr>
              <th>{{coins[type]}}</th>
              <th>{{amount}}</th>
              <th>{{rate}}</th>
              <th>{{total}}</th>
              <!-- <router-link :to="'/exchange/'+ amount * rate" tag="th" style="color:blue">兑换</router-link> -->
            </tr>
        </tbody>
    </table>

     
     <div class="detail" v-if="loading">
      <p><span>需要兑换的虚拟币：</span><input title="需要兑换的虚拟币" min="1" :max="amount" v-model="number"  class="fontSize" type="number"></p>
      <p class="platForm">折算成平台币：  {{realTotal}}</p>
      <span @click="exchange()"  class="sub"> 提交</span>
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
import coinType from '../../../../utils/coin_type'
export default {
  name: 'temp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      coins:null,
      items:null,
      amount:'0',
      rate:{},
      loading:false,
      type:null,
      total:null,
      number:0,
      max:1,
      
    }
  },
  components:{
  },
  computed:{
    ...mapGetters(['userLoginToken']),
    realTotal(){
      return this.number * this.rate
    }
   
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    getExchangeRate(item){
      API.get(API.getExchangeRate.url+`?coin_type=${this.type}`,{},{}).then(res => {
        if(res.data.code == 200){
          // i.rate = Number(res.data.data)
          this.rate = res.data.data;
          this.getCoin();
          
        } 
      });
    },
    getCoin(){
      API.get(API.getCoinNUm.url+`?session=${this.userLoginToken}&coin_type=${this.type}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.amount = Number(res.data.data).toFixed(8);
          this.total = Number(this.rate)*this.amount;
          this.loading = true
        }
      })
    },
     exchange(){
      var form = {
        session:this.userLoginToken,
        amount:this.number,
        coin_type:this.type
      };
      console.log(form)

      API.post(API.exchangeGameCoin.url,{},form).then(res => {
        if(res.data.code == 200){
            this.$toast('兑换成功');
        }else{
          this.$toast(res.data.msg);
        }
      })
    }
    
  },
  created(){
    this.coins = coinType;
    this.type = this.$route.params.id
    this.getExchangeRate();
    
    
    
  },
  mounted(){
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#exchange{
  width:60%;
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
  margin:auto;
}
.detail{
  line-height: 40px;
  height:40px
}
.detail span,.detail input{
height:40px;
}
.detail input{
  margin:10px 0 10px 25px;
  border:1px solid #666;
  text-indent: 15px;
}
.sub{
  display: inline-block;
  margin-top:10px;
  width:150px;
  height:40px;
  line-height: 40px;
  text-align: center;
  font-size:16px;
  color:#fff;
  background:brown;
  border-radius:5px;
}
</style>
