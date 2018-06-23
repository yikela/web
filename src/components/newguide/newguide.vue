<template>
    <div class="newguide">
        <span>新手常见问题解答</span>
        <div class="newguide_content">
            <p><a href="./novicedetail">1.怎么人民币充值夺宝</a></p>
            <p><a href="#">2.如何夺宝</a></p>
            <p><a href="#">3.如何场外充值</a></p>
            <p><a href="#">4.问题反馈</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'newguide',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .newguide{
        width:1200px;
        height:100%;
        min-height:500px;
        margin:0 auto;
        background-color:#fff
    }
    .newguide span{
        display:inline-block;
        width:1190px;
        height:60px;
        font-size:14px;
        color:#333;
        text-align:left;
        line-height:60px;
        margin-left:20px;
    }
    .newguide p a{
        font-size:14px;
        color:#ff6868;
        padding:20px;
        line-height:36px;
    }
</style>
