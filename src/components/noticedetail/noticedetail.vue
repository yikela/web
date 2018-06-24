<template>
    <div class="noticedetail">
        <div class="noticedetail_title">
            <span>公告标题</span>
        </div>
        <div class="noticedetail_content">
            <p>尊敬的用户:</p>
            <p>为丰富平台玩法和产品，应各大用户要求，从5月18日期支持WICC的充值提现及夺宝奖品。</p>
            <p>夺宝团队</p>
            <p>2018-05-18</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'noticedetail',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noticedetail{
    width:1200px;
    height:100%;
    min-height:480px;
    margin:0 auto;
    overflow:hidden;
    background-color:#fff;
}
.noticedetail_title{
    height:60px;
    font-size:16px;
    color:#333;
    line-height:60px;
    text-align:center;
}
.noticedetail_content{
    width:1180px;
    padding:0 10px;
}
.noticedetail_content p{
    font-size:14px;
    color:#333;
    line-height:32px;
    text-indent:4px;
}
</style>
