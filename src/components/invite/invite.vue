<template>
  <div class="invite">
      <div class="invite_img"><img src="../../assets/img/login_banner.jpg"></div>
      <div class="invite_content">
          <p>成功邀请小伙伴加入币夺宝，并兑换满100个HGC，我们将返还1%的HGC币到您的账户，赶紧去邀请好友吧</p>
          <p>你的邀请链接是：<span>http:sha.cool/ID3232323</span>我在币夺宝夺取到了比特币，你也赶紧来试试手气吧！复制粘贴去邀请</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'invite',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .invite{
        width:1200px;
        height:100%;
        margin:0 auto;
    }
    .invite img{
        width:1200px;
        height:300px;
    }
    .invite_content{
        height:100px;
        padding:100px 0;
        background-color:#fff;
    }
    .invite_content p{
        width:1200px;
        font-size:14px;
        color:#333;
        text-align:center;
    }
</style>