<template>
<div class="login">
    <div class="main">
        <div class="login_main">
            <div class="login_content">
                <div class="login_title">
                    <span>云购-用户登录</span>
                </div>
                <div class="login_table">
                    <div class="login_item">
                        <input v-model="username" placeholder = "请输入您的账号"/>
                    </div>
                    <div class="login_item">
                        <input type="password" v-model="password" placeholder = "请输入您的密码"/>
                    </div>
                    <div class="login_error fl"><i></i>您输入的手机号有误！</div>
                    <div class="login_btn">
                        <button  @click="clickLogin()">登录</button>
                    </div>
                    <div class="other_login fl">
                        <span>没有账号，</span>
                        <a href="./register">立即注册</a>
                    </div>
                    <div class="login_f_pass fr"><a href="../findPass">忘记密码？</a></div>
                </div>
            </div>
        </div>
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
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:null,
      password:null,
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
    clickLogin(){
        const params = {
            username:this.username,
            password:this.password
        };
        this.userLogin(params).then(res => {
            if(res.data.code == 200){
              this.USER_SIGNIN(res.data.session);
              this.$router.push('/');
              console.log(this.$router)
            }else{
              this.$vux.toast.text(res.data.msg.zh, 'top');
            }
        })
    }
  },
  mounted(){
      console.log(1111)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    top: 140px;
    padding: 30px;
    width: 350px;
    height: 310px;
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
    text-transform: none
}
.other_login {
    margin-top:10px;
    height: 20px;
}
.other_login span{
  font-size: 12px;
  color:#333;
}
.other_login a{
  font-size: 12px;
  color:#ff6868;
}
</style>
