<template>
  <div class="rechargeOutside" v-if="address">
    <a href="javascript:history.back(-1)">返回</a>
    <p class="address">您的场外充值地址为：{{address}}</p>
    <div >
      <button type="button" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError" class="btnCopy">复制多重签名</button>
    </div>
    <p>场外交易流程：</p>
    <p><span>1、</span><span>提供地址给卖家</span></p>
    <p><span>2、</span><span>协商数量价格</span></p>
    <p><span>3、</span><span>打款给卖家</span></p>
    <p><span>4、</span><span>卖家确认打币</span></p>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'

export default {
  name: 'rechargeOutside',
  data () {
    return {
      address:null,
    }
  },
  components:{

  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN','USER_SIGNOUT']),
    ...mapActions(['userLogout', 'userLogin']),
    getOtcAddress(){
      API.get(API.getOtcAddress.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code ==200){
          this.address = res.data.data
        }else if(res.data.code == 401){
          this.$toast(res.data.msg);
          this.USER_SIGNOUT();
          setTimeout(()=>{
            this.$router.push('/login');
          },1000)
        }else{
          this.$toast(res.data.msg);
        }
      })
    },
    onCopy: function (e) {
      this.$toast('复制成功');
    },
    onError: function (e) {
      this.$toast('复制失败');
    }
  },
  created(){
    this.getOtcAddress()
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rechargeOutside{
  width:80%;
  margin:auto;
  padding:15px;
}
.rechargeOutside a{
  padding:3px 10px;
  border:1px solid #333;
  color:#000;
  border-radius:3px;
}
.address{
  width:100%;
  height:40px;
  line-height: 40px;
  margin-top:20px;
  text-align: center
}
.btnCopy{
  padding:8px 10px;
  border-radius:3px;
  background: #fff;
  box-shadow: none;
  border:1px solid #000;
  margin-bottom:20px
}
.rechargeOutside p{
  font-size:14px;
  line-height: 1.8;
  display: flex;
  flex-flow: row nowrap;
}

</style>
