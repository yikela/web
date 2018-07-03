<template>
  <div class="transferOutside">


    <p>
        <label>转账地址：</label>
        <input title="转账地址" type="text" placeholder="输入您的转账地址" v-model="address" class="fontSize" >
    </p>

    <p>
        <label>转账数量：</label>
        <input title="转账数量" type="text" placeholder="请输入转账数量" v-model="number" class="fontSize">
    </p>

      <button @click.native="sub()" type="primary" class="sub fontSize">转账</button>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'

import coinType from '../../../../utils/coin_type'
export default {
  name: 'withdraw',
  data () {
    return {
      address:null,
      number:1
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
    sub(){
      if(!this.address){
        this.$toast('请输入转账地址');
　　　　　return false;
      }
      if (!(/(^[1-9]\d*$)/.test(this.number))) { 
          this.$toast.text('请输入正整数');
　　　　　  return false; 
　　　　}

      var form = {
        session:this.userLoginToken,
        address:this.address,
        amount:this.number
      }
      
      API.post(API.getOtcTransfer.url,{},form).then(res => {
        if(res.data.code == 200){
          this.$toast('转账成功');
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
    }
    
  },
  created(){
   
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fontSize{
  font-size:14px;
}
.transferOutside{
  padding:15px 0;
}
.transferOutside .back {
  float:left
}

.transferOutside .detail {
  float:right
}

.transferOutside p{
height:40px;
margin:10px 0 10px 25px;
}
.transferOutside input{
  height:40px;
  font-size:14px;
  border:1px solid #666;
  text-indent: 15px;
}
.sub{
  display: block;
  margin-top:20px;
  width:150px;
  height:40px;
  line-height: 40px;
  text-align: center;
  font-size:16px;
  color:#fff;
  background:brown;
  border-radius:5px;
   margin-left:30px;
}

</style>
