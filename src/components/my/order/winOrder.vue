<template>
  <div class="winOrder">
    <p class="tip">温馨提示：到账部分平台已收取10%的平台使用费</p>
    <h4>订单列表</h4>
      <table v-if="loading" style="background:#fff;">
        <thead style="background:red;">
          <tr>
            <th>图片</th>
            <th>信息</th>
            <th>价值</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(i,index) in items" :key="index">
              <th></th>
             <th>{{i.description.name}}</th>
              <th>{{i.price}}</th>
              <th>{{i.state}}</th>
              <!-- <router-link :to="'/exchange/'+ amount * rate" tag="th" style="color:blue">兑换</router-link> -->
            </tr>
        </tbody>
      </table>
      
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
  name: 'winOrder',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:null,
      loading:false
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
      get_list(){
      API.get(API.winners.url+`?session=${this.userLoginToken}&state=3`,{},{}).then(res => {
        if(res.data.code ==200){
          this.items =  res.data.data;
          this.loading = true
        }else if(res.data.code == 401){
          this.$toast(res.data.msg);
          this.USER_SIGNOUT();
          setTimeout(()=>{
            this.$router.push('/login');
          },2000)
        }else{
          this.$toast(res.data.msg);
        }
      })
    },
  },
  created(){
    this.get_list()
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.winOrder{
  width:80%;
  margin:auto;
}
table{
  width:100%;
  margin:auto
}
.tip{
  color:red;
  margin:20px 0;
  font-size:14px;
}
.winOrder h4{
  height:80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
</style>
