<template>
  <div class="recharge">
    <p><router-link to="/my/cash/payment/list">充值记录</router-link></p>
    <h4>币种{{type}}充值</h4>
      <p class="tip">需要1个网络确认才能到账，任何非BTC资产充值到BTC地址后不可找回！</p>

      <p>充值地址</p>
       <div style="text-align:center;margin-top:15px;">
        <div id="qrcode">
          <canvas id="canvas"></canvas>
        </div>
      </div> 
      <div style="width:100%;margin:20px 0;text-align:center">{{ad}}</div>
      <div style="display:flex;justify-content:center;align-items:center">
        <button type="button"
      v-clipboard:copy="ad"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError" class="btnCopy">复制多重签名</button>
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
import Vue from 'vue'
import QRCode from 'qrcode'
Vue.use(QRCode)
export default {
  name: 'recharge',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showPopup:false,
      type:null,
      ad:'',
      typeId:null,
    }
  },
  components:{
    QRCode
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN','USER_SIGNOUT']),
    ...mapActions(['userLogout', 'userLogin']),
    onItemClick(value){
      if (!this.disabled) {
        this.showPopup = false
      };
      console.log(value)
    },
    getAddress(value){
      API.get(API.getRechargeAd.url,{session:this.userLoginToken,type:value},{}).then(res => {
        if(res.data.code == 200){
          this.ad = res.data.data;
          this.useqrcode(res.data.data)
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
    },
    useqrcode(con){
      var canvas = document.getElementById('canvas')

      QRCode.toCanvas(canvas, con, function (error) {
        if (error) console.error(error)
        console.log('success!');
      })
    },
    onCopy: function (e) {
      this.$toast('复制成功',{
    position: 'top',// 'bottom' | 'center',
    duration: '1500'
})
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  },
  created(){
    this.typeId = this.$route.params.id;
    this.type = coinType[this.$route.params.id];
    console.log(this.typeId,this.type)
  },
  mounted(){
    this.getAddress(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recharge{
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
  margin:auto
}
</style>
