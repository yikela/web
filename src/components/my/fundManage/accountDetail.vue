<template>
  <div class="accountDetail">
   <h4>账户明细</h4>
   <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>类型</th>
            <th>币种</th>
            <th>数量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>2018.5.18</th>
            <th>充值</th>
            <th>BTC</th>
            <th>+2</th>
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
import coinType from '../../../utils/coin_type'
export default {
  name: 'accountDetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[],
      coinType:null,
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
    }
  },
  created(){
    this.coinType = coinType
  },
  mounted(){
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4{
  height:80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
table{
  width:80%;
  margin:auto
}
table tr{
  line-height: 40px;
  height: 40px;
}
</style>
