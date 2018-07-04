<template>
    <div class="findPass">
        <div class="main">
            <div class="login_main">
                <div class="login_content">
                    <div class="login_title">
                        <span>云购-找回密码</span>
                    </div>
                    <div class="login_table">
                        <div class="login_item">
                            <input placeholder = "请输入您的账号" v-model="phone"/>
                        </div>
                        <div class="yzm">
                            <input  placeholder = "请输入验证码" v-model="messagecode"/>
                            <span class="on" v-if="sendMsgDisabled"  >{{time+'s后获取'}}</span>
                            <span class="on send" @click="sendCode()" v-if="!sendMsgDisabled" >获取验证码</span>
                        </div>
                        <div class="login_item">
                            <input type="password" placeholder = "请输入新密码" v-model="password"/>
                        </div>
                        <div class="login_item">
                            <input type="password" placeholder = "再次确认密码" v-model="secPassword"/>
                        </div>
                        <div class="login_error fl" v-if="showError"><i></i>{{errorMsg}}</div>
                        <div class="login_btn">
                            <button>提交</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'findPass',
        data () {
            return {
                showError:false,
                errorMsg:'',
                phone:null,
                password:null,
                messagecode:null,
                secPassword:null,
                time: 60, // 发送验证码倒计时
                sendMsgDisabled: false,
            }
        },
        methods:{
              clickRegister(){
              var regPhone = /^1(3|4|5|7|8)\d{9}$/;
              var regEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
              if(!this.phone || !this.messagecode || !this.password || !this.secPassword ){
                this.showError = true;
                this.errorMsg='请填写相关信息';
                setTimeout(()=>{
                  this.showError = false;
                  this.errorMsg='';
                },3000)
                return false
              }
              if (!regPhone.test(this.phone)) {
                    this.showError = true;
                    this.errorMsg='手机号码格式不正确';
                    setTimeout(()=>{
                      this.showError = false;
                      this.errorMsg='';
                    },3000)
                    return false
              }

              if(this.password !== this.secPassword){
                this.showError = true;
                this.errorMsg='两次密码不一致';
                setTimeout(()=>{
                  this.showError = false;
                  this.errorMsg='';
                },3000)
                return false
              }
              
                const params = {
                  "password": this.password,
                  "password2": this.secPassword,
                  "tel": this.phone,
                  "captcha": this.messagecode,
                };
                API.post(API.findpwd.url,{},params).then(res => {
                  if(res.data.code == 200){
                    this.$router.push('/login')
                  }else{
                    this.showError = true;
                    this.errorMsg=res.data.msg;
                    setTimeout(()=>{
                      this.showError = false;
                      this.errorMsg='';
                    },3000)
                    return false
                  }
                })
            },
            sendCode(){
              var regPhone = /^1(3|4|5|7|8)\d{9}$/;
                //针对大陆号码做判断
                
                if (!regPhone.test(this.phone)) {
                    this.showError = true;
                    this.errorMsg='手机号码格式不正确';
                    setTimeout(()=>{
                      this.showError = false;
                      this.errorMsg='';
                    },3000)
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
          }
        }
    
</script>
<style scoped>
.main{
    min-width: 1200px;
    height: 580px;
    position: relative;
    margin: 0 auto;
    background-image: url(../../assets/img/login_banner.jpg);
}
.login_main {
    width: 1200px;
    position: relative;
    margin: 0 auto;
    z-index: 1;
    height: 100%;
}
.main .login_content {
    position: absolute;
    right: 0;
    top: 100px;
    padding: 30px;
    width: 350px;
    height: 370px;
    background-color: #fff;
    border-radius: 4px;
}
.login_content > .login_title {
    color: #dfe220;
    height: 25px;
    text-align: center;
    position: relative;
    border-top: 1px solid #fafafa;
    margin-top: 20px;
}
.login_table{
  margin-top: 15px;
}
.login_table .login_item{
  width: 290px;
  height:36px;
  margin-bottom:15px;
}
.login_item > input {
    padding-left: 10px;
    width: 290px;
    height: 36px;
    border: 1px solid #eeeeee;
    border-radius: 4px;
    font-size: 14px;
}
.login_error {
  font-size:12px;
  color: #dc3838;
  margin-bottom: 10px;
}
.login_error > i {
  background: url(../../assets/img/error.png) no-repeat;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-top: -3px;
}
.login_f_pass{
 margin-top:10px;
}
.login_f_pass a{
  font-size:12px;
  color: #ff6868;
}
.login_btn{
  margin-top: 10px;
}
.yzm{
  margin-top: 10px;
  margin-bottom:15px;
}
.yzm input {
  float: left;
  padding-left: 10px;
  width: 180px;
  height: 36px;
  margin-right:9px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  box-sizing:border-box;
  font-size: 14px;
}
.yzm .on.send{
  color: #fff;
  font-size: 14px;
  border-radius:2px;
  background-color:#ff6868;
}
.yzm span {
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  border-radius: 2px;
}
.login_btn  button {
    width: 290px;
    height: 36px;
    background-color: #dc3838;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    border:0;
    outline:none;
    -webkit-appearance: button;
    cursor: pointer;
    text-transform: none;
}
</style>