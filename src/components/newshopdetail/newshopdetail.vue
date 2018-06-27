<template>
  <div class="newshopdetail">
      <div class="newshopdetail_content">
          <dl>
              <dt><img src="../../assets/img/shop1.jpg"></dt>
              <dd>
                <p>苹果(APPLE)</p>
                <div  class="progress">
                    <span class="bar" id="bar"></span> 
                </div>
                <ul class="soon_people">
                    <li>
                        <p>
                            <span>13000</span>
                            <span>50000</span>
                            <span>37000</span>
                        </p>
                        <p>
                            <span>已参与人次</span>
                            <span>总需人次</span>
                            <span>剩余人次</span>
                        </p>
                    </li>
                </ul>
              </dd>
          </dl>
      </div>
      <div class="soon_buy">我要购买<input type="number" />份</div>
      <div class="all_buy">
          <div class="allbuy_title">所有参与记录<span>(13000)</span></div>
      </div>
  </div>
</template>

<script>
    export default {
    name: 'newshopdetail',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newshopdetail{
    width:1200px;
    height:100%;
    min-height:600px;
    margin:0 auto;
    background-color:#fff;
}
.newshopdetail_content{
    padding-left:400px;
}
.newshopdetail_content dl{
    width:355px;
    height:180px;
}
.newshopdetail_content dl dt{
    float:left;
    width:140px;
    height:160px;
    margin:10px 5px;
}
.newshopdetail_content dl dt img{
    display:inline-block;
    width:140px;
    height:160px;
}
.newshopdetail_content dl dd{
    float:right;
    margin-top:10px;
}
.newshopdetail_content dl dd>p{
    height:60px;
    font-size:14px;
    line-height:60px;
}
.progress { 
    height: 15px;
    width:100%;
    margin:20px 0;
    overflow: hidden; 
    background-color: #f7f7f7; 
    background-image: -moz-linear-gradient(top, #999999, #999999); 
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#999999), to(#999999)); 
    background-image: -webkit-linear-gradient(top, #999999, #999999); 
    background-image: -o-linear-gradient(top, #999999, #999999); 
    background-image: linear-gradient(to bottom, #999999, #999999); 
    background-repeat: repeat-x; 
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#fff9f9f9', GradientType=0); 
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); 
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); 
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); 
    -webkit-border-radius: 4px; 
    -moz-border-radius: 4px; 
    border-radius: 4px; 
}
.progress .bar { 
    width: 49%; 
    height: 100%; 
    color: #ffffff; 
    float: left; 
    font-size: 12px; 
    text-align: center; 
    align-items: center; 
    display: flex; 
    justify-content: center; 
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); 
    background-color: #0e90d2; 
    background-image: -moz-linear-gradient(top, #FA0019, #FA0019); 
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#FA0019), to(#FA0019)); 
    background-image: -webkit-linear-gradient(top, #FA0019, #FA0019); 
    background-image: -o-linear-gradient(top, #FA0019, #FA0019); 
    background-image: linear-gradient(to bottom, #FA0019, #FA0019); 
    background-repeat: repeat-x; 
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf', endColorstr='#ff0480be', GradientType=0); 
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15); 
    -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15); 
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15); 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box; 
    -webkit-transition: width 0.6s ease; 
    -moz-transition: width 0.6s ease; 
    -o-transition: width 0.6s ease; 
    transition: width 0.6s ease; 
} 
.soon_people li>p>span{
    display:block;
    width:67px;
    float:left;
    font-size:12px;
    color:#333;
}
.soon_people li>p span:nth-child(1){
    text-align:left;
}
.soon_people li>p span:nth-child(2){
    text-align:center;
}
.soon_people li>p span:nth-child(3){
    text-align:right;
}
.soon_buy{
    width:1200px;    

}
.soon_buy input{
    border:1px solid #ddd;
}
.allbuy_title{
    width:1200px;
    height:40px;
    margin-top:20px;
    font-size:14px;
    color:#fff;
    text-align:center;
    line-height:40px;
    background-color:#41C7DB;
    border:1px solid #ddd;
}
</style>
