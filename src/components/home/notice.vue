<template>
  <div class="notice">
      <h3>公告</h3>
      <ul>
        <li><a href="#" title="全新HGC夺宝游戏正式上线">全新HGC夺宝游戏正式上线</a></li>
        <li><a href="#" title="全新HGC夺宝游戏正式上线">全新HGC夺宝游戏正式上线</a></li>
        <li><a href="#" title="全新HGC夺宝游戏正式上线">全新HGC夺宝游戏正式上线</a></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'notice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notice{
  width: 190px;
  height: 310px;
  float: left;
  background: rgb(51,51,51);
}
.notice h3{
  width: 190px;
  margin-top:60px;
  height:26px;
  color:#fff;
  text-align:center;
  line-height:26px;
}
.notice ul li a{
  display:block;
  width:170px;
  margin:15px 10px;
  font-size:14px;
  color:#fff;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
</style>
