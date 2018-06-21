<template>
  <div class="reward">
    <div class="reward_title"><b>最新揭晓</b>(到目前为止工揭晓商品<span>106</span>件)</div>
    <ul class="reward_content">
      <li>
        <dl>
          <dt><img src="../../assets/img/shop1.jpg"></dt>
          <dd>
              <ul class="reward_people">
                <li><img src="../../assets/img/shop.jpg"></li>
                <li>
                  <p>获得者：<b>xxx</b></p>
                  <p>云购： <span>538</span>人次</p>
                </li>
              </ul>
          </dd>
          <dd>第1期： <span>华为</span></dd>
          <dd>商品价值：<span>￥699.00</span></dd>
          <dd>揭晓时间：<span>2015年04月26号</span></dd>
        </dl>
        <p>幸运云购码：<span>10000600</span><a href="#">查看详情</a></p>
      </li>
      <li>
        <dl>
          <dt><img src="../../assets/img/shop1.jpg"></dt>
          <dd>
              <ul class="reward_people">
                <li><img src="../../assets/img/shop.jpg"></li>
                <li>
                  <p>获得者：<b>xxx</b></p>
                  <p>云购： <span>538</span>人次</p>
                </li>
              </ul>
          </dd>
          <dd>第1期： <span>华为</span></dd>
          <dd>商品价值：<span>￥699.00</span></dd>
          <dd>揭晓时间：<span>2015年04月26号</span></dd>
        </dl>
        <p>幸运云购码：<span>10000600</span><a href="#">查看详情</a></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'reward',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reward{
  width: 1200px;
  height:100%;
  margin:0 auto;
  overflow:hidden;
  background-color:#fff;
}
.reward_title{
  width:1180px;
  height:44px;
  font-size:14px;
  color:#333;
  line-height:44px;
  margin:5px 10px;
  border:1px solid #ddd;
}
.reward_title b{
  font-size:16px;
  color:#ff6868;
  margin-left:10px;
}
.reward_title span{
  color:#ff6868;
}
.reward_content{
  padding:5px 10px;

}
.reward_content>li{
  float:left;
  width:580px;
  height:250px;
  margin-right:20px;
  margin-bottom:5px;
  border:1px solid #ff6868;
  box-sizing:border-box;
}
.reward_content>li dl{
  padding:10px 10px 0 10px;
  height:190px;
}
.reward_content>li dl dt{
  float:left;
  width:170px;
  height:180px;
  border:1px solid #ddd
}
.reward_content>li dl dt img{
  width:80px;
  height:160px;
  margin:5px 45px;
}
.reward_content>li dd{
  float:right;
  width:375px;
  padding-left:5px;
  color:#333;
  font-size:14px;
  line-height:30px;
}
.reward_people li{
  float:left;
}
.reward_people li img{
  width:65px;
  height:65px;
}
.reward_people li p{
  color:#333;
  font-size:12px;
  line-height:24px;
}
.reward_people li p span{
  color:#ff6868;
}
.reward_content>li>p{
  margin-top:10px;
  padding-left:20px;
  height:48px;
  line-height:48px;
  font-size:14px;
  color:#333;
  background-color:#FFF4ED;
}
.reward_content>li>p span{
  font-weight: 700;
  color:#DA3553;
  margin-right:10px
}
.reward_content>li>p a{
  padding:4px 10px;
  color:#ff6868;
  border:1px solid #ddd;
  border-radius:4px;
}
.reward_content>li:nth-child(2n+2){
  margin-right:0;
}
</style>
