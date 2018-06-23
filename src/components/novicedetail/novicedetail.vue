<template>
  <div class="novicedetail">
    <div class="novicedetail_content">
      <p>1.没有虚拟币包的用户，可以在火币网用人民币购买虚拟币，火币网址：http://huobipro.com，登录此网址需要翻墙，推荐购买翻墙软件：https://www.snshijie.com，启动翻墙后登录火币网购买虚拟币。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'novicedetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .novicedetail{
        width:1200px;
        height:100%;
        min-height:500px;
        margin:0 auto;
        background-color:#fff
    }
    .novicedetail_content{
      padding:10px;
    }
    .novicedetail_content p{
      font-size:14px;
      color:#333;
      line-height:30px;
      text-indent: 10px;
      margin-bottom:10px;
    }
</style>
