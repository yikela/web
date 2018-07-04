<template>
  <div class="cashpwd">
    <p>
      是否设置资金密码：<span>{{isSet}}</span>
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
    <span @click="withdraw()" type="primary"  class="sub">设置</span>
    
    
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
  name: 'cashpwd',
  data () {
    return {
      isSet:null,
      captcha:null,
      password:null,
      phone:null,
      time:60,
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
    isSetCashPwd(){
      API.get(API.isSetCashPwd.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.isSet = '是'
        }else if(res.data.code == 401){
          this.isSet = '否'
          this.$toast(res.data.msg);
          this.USER_SIGNOUT();
          setTimeout(()=>{
            this.$router.push('/login');
          },2000)
        }else{
          this.isSet = '否'
          // this.$toast(res.data.msg);
        }

      })
    },
    setCashPwd(){
      var form = {
          "session":this.userLoginToken,
          "captcha": this.captcha,
          "password": this.password
      }
      API.post(API.setCashPwd.url,{},form).then(res => {
        if(res.data.code == 200){
            this.$toast('设置成功');
            this.isSetCashPwd();
            this.captcha = '';
            this.password = '';
            this.phone = '';
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

  },
  mounted(){
    this.isSetCashPwd()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cashpwd{
  width:60%;
  margin:auto;
}
.fontSize{
  font-size:14px;
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

.cashpwd p{
height:40px;
margin:10px 0 10px 25px;
}
.cashpwd input{
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
label{
  width:100px;
  display: inline-block;
}
</style>
