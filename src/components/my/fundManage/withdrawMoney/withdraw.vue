<template>
  <div class="withdraw">
    <p class="withdrawTo"><router-link :to="'/my/cash/withdraw/list/'+this.typeId" class="detail">提币明细</router-link></p>
    <h4>提现</h4>
    <p>提现的币种类型为：{{type}}</p>
    <p><label>提现地址：</label><input  type="text" placeholder="输入您的提现地址" v-model="address"  ></p>
    <p>
      <label>提币数量：</label><input  type="text" placeholder="最低提现单位0.01" v-model="number" >
      <span style="font-size:14px;color:red;text-align:center">可提余额：{{amount}}{{type}}  提现手续费10%</span>
    </p>
     <p>
        <label>手机号码：</label><input type="text" placeholder = "请输入手机号码" v-model="phone"/>
    </p>
    <p>
        <label>验证码：</label><input  placeholder = "请输入验证码" v-model="captcha"/>
        <span class="on daoji" v-if="sendMsgDisabled"  >{{time+'s后获取'}}</span>
        <span class="on send" @click="sendCode()" v-if="!sendMsgDisabled" >获取验证码</span>
    </p>
    <p><label>资金密码：</label><input  type="password" placeholder="资金密码" v-model="password" ></p>
    <span @click="withdraw()" type="primary"  class="sub">兑换</span>
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
  name: 'withdraw',
  data () {
    return {
      type:null,
      address:'',
      captcha:'',
      number:'',
      typeId:null,
      amount:null,
      phone:null,
      time:60,
      password:null,
      sendMsgDisabled:false,

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
    onItemClick(value){
      if (!this.disabled) {
        this.showPopup = false
      };
      console.log(value)
    },
    withdraw(){
      var form = {
        session: this.userLoginToken,
        coin_type: this.typeId,
        address: this.address,
        number: this.number,
        captcha:this.captcha,
        pay_password:this.password
      }
      API.post(API.merchantCash.url,{},form).then(res => {
        if(res.data.code == 200){
          this.$toast('提币成功');
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
     getCoin(){
      API.get(API.getCoinNUm.url+`?session=${this.userLoginToken}&coin_type=${this.$route.params.id}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.amount = Number(res.data.data).toFixed(8);
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
    sendCode(){
      var regPhone = /^1(3|4|5|7|8)\d{9}$/;
        //针对大陆号码做判断
        
        if (!regPhone.test(this.phone)) {
            this.$toast('手机号码格式不正确');
            return false
        }else{
          API.post(API.sendCode.url,{},{"tel":this.phone}).then(res => {
            if(res.data.code == 200){
              this.send()
            }
          })
          
        }
        
    },
    send() {
      let self = this;
      self.sendMsgDisabled = true;
      let interval = window.setInterval(function() {
      if ((self.time--) <= 0) {
        self.time = 60;
        self.sendMsgDisabled = false;
        window.clearInterval(interval);
      }
      }, 1000);
    }
  },
  created(){
    this.typeId = this.$route.params.id;
    this.type = coinType[this.$route.params.id];
  },
  mounted(){
    this.getCoin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.withdraw{
  width:80%;
  margin:auto;
}
h4{
  height:40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
table{
  margin:auto
}
.withdraw p{
height:40px;
margin:10px 0 10px 25px;
}
.withdraw input{
  height:40px;
  font-size:14px;
  border:1px solid #666;
  text-indent: 15px;
}
.sub{
  display: block;
  margin-top:20px;
  width:150px;
  height:40px;
  line-height: 40px;
  text-align: center;
  font-size:16px;
  color:#fff;
  background:brown;
  border-radius:5px;
   margin-left:30px;
}
.send{
  color:#000
}
.daoji{
  color:#666
}
</style>
