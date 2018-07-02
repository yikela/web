<template>
<div>
  <div class="questionDetail" v-if="loading">
      <h4>问题详细</h4>
      <p class="p"><span>问题编号：{{item.id}}</span> </p>
      <p class="p"><span>问题类型：</span>{{types[item.type_id]}}</p>
      <p class="p"><span>问题状态：</span>{{item.state == 1 ? '进行中':'解决'}}</p>
      <div class="myself"><span>{{item.created_at * 1000 }}  你：</span><p class="box">{{item.body}}</p></div>
      <div class="kefu" v-for="(i,index) in comItems" :key="index"><span>客服</span><p class="box">{{i.body}}<br>{{i.created_at * 1000 }}</p></div>
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
  name: 'questionDetail',
  data () {
    return {
      id:null,
      item:null,
      types:null,
      comItems:null,
      loading:false
    }
  },
  components:{

  },
   filters:{
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN']),
    ...mapActions(['userLogout', 'userLogin']),
    getIssueDetail(){
      API.get(API.getIssueInfo.url+`?issue_id=${this.$route.params.id}&session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.item = res.data.data;
          this.loading = true
        }
      })
    },
    getComment(){
      API.get(API.getCommitList.url+ `?issue_id=${this.$route.params.id}&session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.comItems = res.data.data
        }
      })
    }
  },
  created(){
    this.types = stateType
    this.id = this.$route.params.id
  },
  mounted(){
      this.getIssueDetail();
      this.getComment();
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.questionDetail{
  padding:20px;
  width:70%;
  margin:auto;
}
.questionDetail a{
  padding:3px 10px;
  border:1px solid #333;
  color:#000;
  border-radius:3px;
}
.questionDetail p.p{
  height:30px;
  line-height: 30px;
  font-size:14px;
  /* padding:0 20px; */
}
.questionDetail p span{
  margin-right:5px;
}
.myself{
    height:30px;
  line-height: 30px;
  font-size:14px;
  margin:10px 0;
}
.myself span{
  float: left;
  margin-right:5px;
}
.myself p{
 height:30px;
  line-height: 30px;
  text-indent: 5px;
}
.kefu{
  padding:30px 0;
}
.kefu span{
  float: right;
  margin-left:5px;
}
.kefu p{
 float: right;
 border:1px solid #dfdfdf;
 height:30px;
  line-height: 30px;
    text-indent: 5px;
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
