<template>
  <div class="home">
    <div class="homeTop">
      <notice></notice>
      <cursors></cursors>
      <div class="intro">
        <ul>
          <li>
            <a><img src="../../assets/img/homeLogo1.jpg"></a>
            <span>100%公平公正</span>
          </li>
          <li>
            <a><img src="../../assets/img/homeLogo2.jpg"></a>
            <span>区块链上运算</span>
          </li>
          <li>
            <a><img src="../../assets/img/homeLogo3.jpg"></a>
            <span>支持多币种</span>
          </li>
          <li>
            <a><img src="../../assets/img/homeLogo4.jpg"></a>
            <span>知名机构投资</span>
          </li>
          <li>
            <a><img src="../../assets/img/homeLogo5.jpg"></a>
            <span>支付安全保障</span>
          </li>
          <li>
            <a><img src="../../assets/img/homeLogo6.jpg"></a>
            <span>资金安全保障</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="middle">
      <newest></newest>
      <soon></soon>
    </div>
    <div class="grounding">
      <newshop></newshop>
    </div>
  </div>
</template>

<script>
import notice from './notice'
import cursors from './cursor'
import newest from './newest'
import soon from './soon'
import newshop from './newshop'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    notice,
    cursors,
    newest,
    soon,
    newshop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  padding-top:1px;
  max-width: 1200px;
  height:100%;
  margin:0 auto;
}
.homeTop{
  width: 100%;
  height: 310px;
}
.homeTop .intro{
  width: 370px;
  height: 310px;
  float: left;
  background-color:rgb(51,51,51);
}
.intro ul li{
  width:120px;
  float:left;
  margin-top:50px;
}
.intro ul li a{
  display:block;
  width:120px;
  text-align:center;
}
.intro ul li a img{
  display:inline-block;
  width:56px;
  height:56px;
  vertical-align: middle;
}
.intro ul li span{
  display:inline-block;
  width:120px;
  height:30px;
  color:#fff;
  font-size:14px;
  text-align:center;
  line-height:30px;
}
.middle{
  width: 100%;
  height: 370px;
}
.grounding{
  width:1200px;
  height: 390px;
  background:#fff;
}
</style>
