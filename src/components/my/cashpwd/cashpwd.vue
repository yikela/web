<template>
  <div class="cashpwd">
    
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
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    isSetCashPwd(){
      API.get(API.isSetCashPwd.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.isSet = '是'
        }else{
          this.isSet = '否'
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
            this.$vux.toast.text('设置成功', 'top');
        }
      })
    },
      sendCode(){
      var regPhone = /^1(3|4|5|7|8)\d{9}$/;
        //针对大陆号码做判断
        
        if (!regPhone.test(this.phone)) {
            this.$vux.toast.text('手机号码格式不正确', 'top');
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
.recharge{
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
</style>
