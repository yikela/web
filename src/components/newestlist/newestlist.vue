<template>
    <div class="newestlist">
        <dl class="newestlist_content">
            <dt><img src="../../assets/img/shop1.jpg"></dt>
            <dd>003期：<span>1BTC夺宝</span></dd>
            <dd>获得者：<span>EnK</span></dd>
            <dd>夺宝：<span>1000人次</span></dd>
            <dd>商品价值：<span>56000平台币</span></dd>
            <dd>揭晓时间：<span>2018年5月8号</span></dd>
            <dd>揭晓时间：<span>000038585</span></dd>
            <dd><a href="#">查看详情</a></dd>
        </dl>
    </div>
</template>

<script>
export default {
  name: 'newestlist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newestlist{
    width:1200px;
    height:100%;
    margin:0 auto;
    background-color:#fff;
}
.newestlist_content{
    padding:5px 10px;
}
.newestlist_content>dl{
    float:left;
    width:220px;
    height:310px;
    margin-right:20px;
    margin-bottom:5px;
    border:1px solid #ddd;
}
.newestlist_content>dl:nth-child(5n+5){
    margin-right:0;
}
</style>
