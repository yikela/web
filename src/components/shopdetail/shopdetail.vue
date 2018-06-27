<template>
    <div class="shopdetail">
        <dl class="shopdetail_content">
            <dt><img src="../../assets/img/shop1.jpg"></dt>
            <dd>第1期： <span>1BTC夺宝</span></dd>
            <dd>获得者：<span>Erik</span></dd>
            <dd>夺宝人次：<span>1000人次</span></dd>
            <dd>商品价值：<span>56000平台币</span></dd>
            <dd>揭晓时间：<span>2018年5月8号</span></dd>
            <dd>中奖号码：<span>000038585</span></dd>
        </dl>
        <ul class="tabs">
            <li v-for="(item,index) in tabsParam" :key = "index" @click="toggleTabs(index)" :class="{active:index===nowIndex}"><a href="#">{{item}}</a></li>
        </ul>
        <div class="tabs_content" v-show="nowIndex===0">
            <p>计算规则：以夺宝结束后第一个以太坊区块的hash值作为随机数据结果</p>
        </div>
        <div class="tabs_content" v-show="nowIndex===1">
            <ul>
                <li><a href="#">日期</a></li>
                <li><a href="#">参与人</a></li>
                <li><a href="#">购买份数</a></li>
            </ul>
            <div class="computer">
                <p>2018.05.17</p>
            </div>
            <div class="computer">
                <p>阿斯卡</p>
            </div>
            <div class="computer">
                <p>1000</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'shopdetail',
  data () {
    return {
        tabsParam:['计算结果','所有参与记录'],
        nowIndex:0,
        isShow:false,
    }
  },
  methods : {
    //切换tab项
        toggleTabs(index){
            this.nowIndex = index;
            $(window).resize();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shopdetail{
    width:1200px;
    height:100%;
    margin:0 auto;
    overflow:hidden;
    background-color:#fff;
    margin-bottom:10px;
}
.shopdetail_content{
    width:1180px;
    height:400px;
    margin:10px;
    padding-top:20px;
}
.shopdetail_content dt{
    margin-left:30px;
    width:220px;
    height:300px;
    float:left;
}
.shopdetail_content dt img{
    display:inline-block;
    width:220px;
    height:300px;
}
.shopdetail_content dd{
    margin-top:9px;
    margin-left:270px;
    font-size:18px;
    color:#333;
    line-height:42px;
}
.tabs{
    width:1180px;
    height:40px;
    margin:0 10px;
}
.tabs li{
    float:left;
    width:590px;
    height:40px;
    border:1px solid #ddd;
}
.tabs li a{
    display:block;
    width:600px;
    height:40px;
    font-size:14px;
    color:#333;
    text-align:center;
    line-height:40px;
}
.tabs_content{
    width:1180px;
    margin:0 10px;
}
.tabs_content p{
    padding:10px 2px;
    color:#333;
    font-size:14px;
}
.tabs_content ul li{
    float:left;
    margin-top:20px;
    width:33%;
    text-align:center;
}
.computer{
    float:left;
    width:33%;
    text-align:center;
}
.computer p{
    line-height:24px;
}
</style>
