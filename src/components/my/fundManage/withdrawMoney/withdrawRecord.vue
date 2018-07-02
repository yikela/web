<template>
  <div class="withdrawList">
    <h4>提币记录</h4>

    <table>
        <thead>
          <tr>
            <th>提币时间</th>
            <th>提币数量</th>
            <th>提币地址</th>
            <th>提币状态</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i,index) in items" :key="index">
            <th>{{i.created_at}}</th>
            <th>{{i.amount}}{{coinType[i.coin_type]}}</th>
            <th>{{111111}}</th>
            <th>{{i.state}}</th>
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
import coinType from '../../../../utils/coin_type'
export default {
  name: 'withdraw',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[],
      lastId:null,
      coinType:null,
      typeId:null
    }
  },
  components:{
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    getList(){
      API.get(API.merchantCashHistory.url+`?session=${this.userLoginToken}&coin_type=${this.typeId}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.items = res.data.data
        } 
      })
    }
  },
  filters:{
  },
  created(){
    this.coinType = coinType;
    this.typeId = this.$route.params.id
  },
  mounted(){
     this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.withdrawList{
  width:60%;
  margin:auto;
}
h4{
  height:80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
table{
  width:100%;
  margin:auto
}
</style>
