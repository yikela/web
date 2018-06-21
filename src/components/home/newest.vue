<template>
    <div class="newest">
        <div class="newest_title">最新开奖结果</div>
        <ul class="newest_content">
            <li>
                <a href="#">
                    <dl>
                        <dt>
                            <p>(第1期)华为手机</p>
                            <p>总需：<span>699人次</span></p>
                            <p>获奖者：<span>18565637201</span></p>
                            <p>本期参与：<span>538人次</span></p>
                            <p>本期幸运号码：<span>10000600</span></p>
                        </dt>
                        <dd><img src="../../assets/img/shop.jpg"></dd>
                    </dl>
                </a>
            </li>
            <li>
                <a href="#">
                    <dl>
                        <dt>
                            <p>(第1期)华为手机</p>
                            <p>总需：<span>699人次</span></p>
                            <p>获奖者：<span>18565637201</span></p>
                            <p>本期参与：<span>538人次</span></p>
                            <p>本期幸运号码：<span>10000600</span></p>
                        </dt>
                        <dd><img src="../../assets/img/shop.jpg"></dd>
                    </dl>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name: 'newest',
        data(){
            return{
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style scoped>
.newest{
  width: 345px;
  height: 100%;
  background:#FFFFFF;
  float: left;
}
.newest_title{
    width: 345px;
    height:54px;
    font-size:16px;
    color:#333;
    text-align:left;
    line-height:54px;
    border-bottom:1px solid #333;
}
.newest_content  li{
    height:158px;
    border-bottom:1px solid #ddd;
}
.newest_content  li a{
    display:block;
}
.newest_content  li a dl dt{
    width:225px;
    float:left;
}
.newest_content  li a dl dt p{
    font-size:14px;
    color:#333;
    padding: 7px 0 0 15px;
}
.newest_content li a dl dd img{
    margin-top:26px;
    width:100px;
    height:100px;
}
</style>