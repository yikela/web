<template>
    <div class="vheader">
        <div class="header">
            <ul>
                <li class="login_pic"><router-link to="/"><img src="//www.baidu.com/img/baidu_jgylogo3.gif"></router-link></li>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/allreward">所有夺宝</router-link></li>
                <li><router-link to="/reward">开奖记录</router-link></li>
                <li><router-link to="/invite">邀请有奖</router-link></li>
                <li><router-link to="/newguide">新手指南</router-link></li>
                <li>
                    <div class="login_btn">
                        <router-link to="/login">登录</router-link>
                    </div>
                    <div class="register_btn">
                        <router-link to="/register">注册</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'vheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vheader{
    width:100%;
    height:100%;
    background-color: #fff;
  }
  .header{
      width:1200px;
      margin:0 auto;
      height: 80px; 
      line-height: 80px;
      background-color: #fff;
      border-bottom: 1px solid #f5f5f5;
  }
  .header ul{
      padding-left: 15px;
      padding-right: 15px;
      margin-left: auto;
      margin-right: auto;
  }
  .header .login_pic img{
      display:inline-block;
      width: 105px;
      height:36px;
      margin-top: 9px;
  }
  .header ul li{
      float:left;
  }
  .header ul li a{
      padding: 0 10px;
      margin: 0 10px;
      text-align: center;
      color: #16191b;
  }
  .header .login_btn{
      float: left;
  }
  .header .register_btn{
      float: left;
  }
  .header .login_btn a{
      border: 1px solid #dc3838;
      color: #fff;
      width: 65px;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      background-color: #dc3838;
      text-align: center;
      border-radius: 4px 0 0 4px;
      margin: 0;
  }
  .header .register_btn a{
      border: 1px solid #dc3838;
      color: #dc3838;
      width: 65px;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      background-color: #fff;
      text-align: center;
      border-radius: 0 4px 4px 0;
      margin: 0;
  }    
</style>
