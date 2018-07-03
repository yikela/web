<template>
  <div class="invite">
    <h4>我的邀请</h4>
    <p class="title">我的邀请收益（收益按周结算）</p>
     <table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
          <tr style="background-color: #F7F7F7">
            <th>未兑换</th>
            <th>已兑换</th>
            <th>累积收益</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{detail.remaining}}</th>
            <th>{{detail.total-detail.remaining}}</th>
            <th>{{detail.total}}</th>
          </tr>
          
        </tbody>
      </table>

      <p>
        <label for="">兑现的数量：</label>
        <input title="兑现的数量"  placeholder="请输入需要兑换的数量" class="fontSize" v-model="amount" type="number">
      </p>
      


      <span @click.native="sub()"   class="sub fontSize">兑换</span>
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
  name: 'invite',
  data () {
    return {
      detail:{
        remaining:200,
        total:500,
      },
      amount:null,
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
    gethetail(){
      API.get(API.getRefDetail.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
            this.detail = res.data.data
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
    sub(){
      var form = {
        session:this.userLoginToken,
        amount:this.amount
      }
      API.post(API.exchangeRefCash.url,{},form).then(res => {
        if(res.data.code == 200){
          this.$toast('兑换成功', 'center');
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
    this.gethetail()
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invite{
  width:70%;
  margin:auto;
}

.invite p{
  height:40px;
  margin:20px 0;
}
h4{
  width: 100%;
  text-align: center;
  height:40px;
  line-height: 40px;
  margin:5px 0;
}
.title{
  margin:10px 0;
}
.fontSize{
  font-size:14px;
}
table{
  width:100%;
}
.invite input{
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
   margin-left:10px;
}
</style>
