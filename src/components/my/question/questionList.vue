<template>
<div class='questionList'>
  <div class="issue" v-if="loading">
    <h4>提问</h4>
    <table :cell-bordered="false" style="background-color:#fff;">
        <thead>
          <tr>
            <th>问题编号</th>
            <th>问题类型</th>
            <th>进度</th>
            <th>操作</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i,index) in items" :key="index">
            <th>{{i.id}}</th>
            <th>{{stateType[i.type_id]}}</th>
            <th>{{i.state ==1 ? '进行中':'已解决'}}</th>
            <router-link :to="'/my/question/'+i.id" tag="th">查看</router-link>
          </tr>
        </tbody>
      </table>
  </div>
  </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
import stateType from '../../../utils/questionState.js'
export default {
  name: 'issueList',
  data () {
    return {
      items:null,
      loading:false,
      stateType:null
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
    getIssue(item){
      API.get(API.getIssueList.url+`?session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.items = res.data.data;
          this.loading = true
        } 
      });
    },
  },
  created(){
    this.stateType = stateType
  },
  mounted(){
    this.getIssue()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.questionList{
  padding-top:20px;
  width:60%;
  margin:auto;
}
.questionList a.back{
  padding:3px 10px;
  border:1px solid #333;
  color:#000;
  border-radius:3px;
}
.issueList{
  padding-top:30px;
}
table{
  width:100%;
}
 h4{
  height:40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
</style>
