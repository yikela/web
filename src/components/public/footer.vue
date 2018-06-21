<template>
    <div class="footer">
        <div class="footer_main">
            <ul class="parents fl">
                <li><span>合作伙伴:</span></li>
                <li><a href="#"><img src="../../assets/img/parents.jpg"></a></li>
                <li><a href="#"><img src="../../assets/img/parents.jpg"></a></li>
                <li><a href="#"><img src="../../assets/img/parents.jpg"></a></li>
                <li><a href="#"><img src="../../assets/img/parents.jpg"></a></li>
            </ul>
            <ul class="icp fr">
                <li><span>icp备案</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'vFooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer{
        width:100%;
        height: 60px;
        background-color:#333;
    }
    .footer_main{
        width:1200px;
        height:60px;
        margin:0 auto;
    }
    .parents li{
        float: left;
    }
    .parents li span{
        font-size: 14px;
        color: #fff;
        height: 60px;
        line-height: 60px;
        margin-right: 10px;
    }
    .parents li a img{
        display: inline-block;
        padding-top: 15px;
        width: 96px;
        height: 44px;
        margin-right: 5px;
    }
    .icp span{
        font-size: 14px;
        color: #fff;
        height: 60px;
        line-height: 60px;
        margin-right: 10px;
    }
</style>
