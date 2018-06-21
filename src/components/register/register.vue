<template>
    <div class="register">
        <div class="main">
            <div class="login_main">
                <div class="login_content">
                    <div class="login_title">
                        <span>云购-用户注册</span>
                    </div>
                    <div class="login_table">
                        <div class="login_item">
                            <input type="text" placeholder = "请输入手机号码"/>
                        </div>
                        <div class="yzm">
                            <input  placeholder = "请输入验证码"/>
                            <span class="on"><a href="#">获取验证码</a></span>
                        </div>
                        <div class="login_item">
                            <input type="text" placeholder = "请输入邮箱"/>
                        </div>
                        <div class="login_item">
                            <input type="text" placeholder = "请输入生日"/>
                        </div>
                        <div class="login_item">
                            <input type="password" placeholder = "请输入密码"/>
                        </div>
                        <div class="login_item">
                            <input type="password" placeholder = "请确认密码"/>
                        </div>
                        <div class="login_item">
                            <input type="text" placeholder = "请输邀请码"/>
                        </div>
                        <div class="login_error fl"><i></i>您输入的手机号有误！</div>
                        <div class="login_btn">
                            <button>注册</button>
                        </div>
                        <div class="other_login fl">
                            <span>已有账号，</span>
                            <a href="./login">立即登录</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
export default {
    name: 'register',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    min-width: 1200px;
    height: 800px;
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
    height: 560px;
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
.yzm .on a {
  color: #fff;
  padding: 8px 15px;
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
