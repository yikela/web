<template>
<div>
  <div class="questionDetail" v-if="loading">
      <h4>问题详细</h4>
      <p class="p"><span>提问时间：{{item.created_at * 1000 | formDate}}</span> </p>
      <p class="p"><span>问题编号：{{item.id}}</span> </p>
      <p class="p"><span>问题类型：</span>{{types[item.type_id]}}</p>
      <p class="p"><span>问题状态：</span>{{item.state == 1 ? '进行中':'解决'}}</p>
      <div class="addImage imageList" v-if="images.length>0">
       <p class="labelspan">上传的图片列表：</p>
        <span v-for="(i,index) in images" :key="index">
          <img :src="baseUrl+i.path" alt="">
        </span>
      </div>
      <p class="p"><span>问题描述：{{item.body}}</span> </p>
      <p class="p" v-for="(i,index) in comItems" :key="index">
        <span>客服回复：</span>
        <span class="box">{{i.body}}</span>
        <span>{{i.created_at * 1000 | formDate}}</span>
      </p>
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
import formDate from '../../../utils/formDate'
const url  = require('../../../utils/issue_image.js')
export default {
  name: 'questionDetail',
  data () {
    return {
      id:null,
      item:null,
      types:null,
      comItems:null,
      loading:false,
      images:[],
      baseUrl:null
    }
  },
  components:{

  },
   filters:{
     formDate
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods:{
    ...mapMutations(['USER_SIGNIN','USER_SIGNOUT']),
    ...mapActions(['userLogout', 'userLogin']),
    getIssueDetail(){
      API.get(API.getIssueInfo.url+`?issue_id=${this.$route.params.id}&session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.item = res.data.data;
          this.loading = true
        }else if(res.data.code == 401){
          this.$toast(res.data.msg);
          this.USER_SIGNOUT();
          setTimeout(()=>{
            this.$router.push('/login');
          },2000)
        }else{
          this.loading == true
          this.$toast(res.data.msg);
        }
      })
    },
    getPics(value){
       API.get(API.getIssuePic.url+`?session=${this.userLoginToken}&issue_id=${this.id}`,{},{}).then(res => {
         if(res.data.code == 200){
           this.images = res.data.data
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
    getComment(){
      API.get(API.getCommitList.url+ `?issue_id=${this.$route.params.id}&session=${this.userLoginToken}`,{},{}).then(res => {
        if(res.data.code == 200){
          this.comItems = res.data.data
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
    }
  },
  created(){
    this.types = stateType
    this.id = this.$route.params.id
    this.baseUrl = url.urlBase
  },
  mounted(){
      this.getIssueDetail();
      this.getComment();
      this.getPics()
    
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

 h4{
  height:40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  font-size:18px;
  color:#000;
}
.addImage{
  height: 150px;
  position: relative;
}
.imageList span img{
  width:150px;
  height:80px;
}
</style>
