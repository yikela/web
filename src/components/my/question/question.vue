<template>
  <div class="question">
    <h4>提问</h4>
    <div class="selectDiv">
    <span class="labelspan">选择问题类型：</span>
      <p class="select">
        <select v-model='type'>
          <option v-for="(i,index) in types" v-bind:value="i" :key="index">
            {{i}}
          </option>
        </select>
      </p>
      </div>
      <p>
        <span class="labelspan">问题描述：</span><textarea :max="50" placeholder="问题描述"  v-model="dis"></textarea>
      </p>
     
    <p>
      <span class="labelspan">手机号码：</span><input title="手机号码"  v-model="phone" class="phone">
    </p>
    <p>
      <span @click="editIssue()"  class="sub">提问</span>
    </p>

  </div>
</template>

<script>
import stateType from '../../../utils/questionState.js'
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
  } from 'vuex'
export default {
  name: 'question',
  data () {
    return {
      showPopup:false,
      type:'充值',
      phone:18665987981,
      id:null,
      dis:null,
      types:null,
      image:null ,
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
    addIssue(){
      API.post(API.addIssue.url,{},{session:this.userLoginToken}).then(res => {
        if(res.data.code == 200){
          this.id = res.data.data;
          this.USER_SIGNIN(res.data.session)
        }
      })
    },
    editIssue(){
      var type_id = null;
      for(var i in  this.types){
        ((j)=>{
          if(this.types[j] == this.type){ 
            type_id = j
          }
        })(i)
       
      }
      const form = {
        session:this.userLoginToken,
        issue_id:this.id,
        type_id:type_id,
        body:this.dis,
        tel:this.phone,

      }
      console.log(form);
      return false
      API.post(API.editIssue.url,{},form).then(res => {
        if(res.data.code == 200){
          console.log(res);
        }
      })
    }
  },
  created(){
    this.types = stateType
    this.addIssue()
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.question{
  padding-top:20px;
  width:80%;
  margin:auto;
}
.question a.back{
  padding:3px 10px;
  border:1px solid #333;
  color:#000;
  border-radius:3px;
}
.selectDiv{
  display: flex;
  flex-flow: row nowrap
}
.labelspan{
  height:40px;
  line-height: 40px;
  text-align: center
}
.question div{
  height:40px;
  margin:10px 0;
}
.sub{
  display: inline-block;
  margin-top:10px;
  width:150px;
  height:40px;
  line-height: 40px;
  text-align: center;
  font-size:16px;
  color:#fff;
  background:brown;
  border-radius:5px;
}
P{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding:15px 0
}

  p.select{
      width: 150px;
      height: 40px;
      border-radius: 5px;
      box-shadow: 0 0 5px #ccc;
      position: relative;
  }
  select{
      border: none;
      outline: none;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-indent: 20PX;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
  }

  p.select:after{
      content: "";
      width: 14px;
      height: 8px;
      /* background: url(img/xiala.png) no-repeat center; */
      position: absolute;
      right: 20px;
      top: 45%;
      pointer-events: none;
  }
  textarea{
    height:100px;
    width:400px;
    padding:15px;
    font-size:16px;
    color:#000;
    border:1px solid #666;
    border-radius:5px;
  }
  .phone{
    height:40px;
    line-height: 40px;
    font-size:14px;
    text-indent: 10px;
    border:1px solid #666;
    border-radius:5px;
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
