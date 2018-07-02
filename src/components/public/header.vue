<template>
    <div class="vheader">
        <div class="header">
            <ul>
                <li class="login_pic"><router-link to="/"><img src="//www.baidu.com/img/baidu_jgylogo3.gif"></router-link></li>
                <li><router-link to="/" active-class="u-link--Active" exact>首页</router-link></li>
                <li><router-link to="/allreward" active-class="u-link--Active" exact>所有夺宝</router-link></li>
                <li><router-link to="/reward" active-class="u-link--Active" exact>开奖记录</router-link></li>
                <li><router-link to="/invite" active-class="u-link--Active" exact>邀请有奖</router-link></li>
                <li><router-link to="/newguide" active-class="u-link--Active" exact>新手指南</router-link></li>
                <li v-if="!userLoginToken">
                    <div class="login_btn">
                        <router-link to="/login">登录</router-link>
                    </div>
                    <div class="register_btn">
                        <router-link to="/register">注册</router-link>
                    </div>
                </li>
                <li v-if="userLoginToken">
                    <router-link to="/my">个人中心</router-link>
                    <span   style="font-size:14px;" @click="logOut()">退出</span>
                </li>
            </ul>
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
  name: 'vheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    logOut(){
      this.userLogout().then(res => {
        if(res.data.code == 200){
          this.USER_SIGNOUT();
          this.$router.push('/')
        }
      })
    }
  },
  created(){

  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vheader{
    width:100%;
    height:80px;
    background-color: #fff;
    position: fixed;
    top:0;
    left:0;
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

   ul li a.u-link--Active{
    color:#dc3838
  }
</style>
