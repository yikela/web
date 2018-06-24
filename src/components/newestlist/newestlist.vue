<template>
    <div class="newestlist">
        <div class="newestlist_content">
            <dl>
                <dt><img src="../../assets/img/shop1.jpg"></dt>
                <dd>003期：<span>1BTC夺宝</span></dd>
                <dd>获得者：<span>EnK</span></dd>
                <dd>夺宝：<span>1000人次</span></dd>
                <dd>商品价值：<span>56000平台币</span></dd>
                <dd>揭晓时间：<span>2018年5月8号</span></dd>
                <dd>揭晓时间：<span>000038585</span></dd>
                <p><a href="#">查看详情</a></p>
            </dl>         
        </div>
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
    min-height:480px;
    margin:0 auto;
    overflow:hidden;
    background-color:#fff;
}
.newestlist_content{
    padding:5px 10px;
}
.newestlist_content>dl{
    float:left;
    position:relative;
    width:280px;
    height:205px;
    margin-right:20px;
    margin-bottom:5px;
    padding:10px;
    border:1px solid #ddd;
}
.newestlist_content>dl:nth-child(4n+4){
    margin-right:0;
}
.newestlist_content>dl dt{
    float:left;
    width:80px;
    height:140px;
    border:1px solid #ddd;
}
.newestlist_content>dl dt img{
    width:60px;
    height:120px;
    margin:10px;
}
.newestlist_content>dl dd{
    float:right;
    width:150px;
    font-size:12px;
    color:#333;
    line-height:24px;
}
.newestlist_content>dl dd span{
    width:90px;
    float:right;
    color:#000;
}
.newestlist_content>dl p{
    position:absolute;
    bottom:5px;
    left:0;
    width:260px;
    height:30px;
}
.newestlist_content>dl p a{
    padding:5px 10px;
    margin-left:95px;
    font-size:14px;
    color:#fff;
    background-color:#ff6868;
    border-radius:4px;
}
</style>
