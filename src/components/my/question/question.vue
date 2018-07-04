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

    <div class="addImage imageList">
       <p class="labelspan">上传的图片列表：</p>
        <span v-for="(i,index) in images" :key="index">
          <img :src="baseUrl+i.path" alt="">
          <span @click="del(i.id,id)" class="del">删除</span>
        </span>
        <a href="javascript:;" class="file">选择图片上传
          <input type="file" name="image" id="image" @change='adImage()' class="file">
        </a>
    </div>
    <p>
      <span @click="editIssue()"  class="sub">提问</span>
    </p>

  </div>
</template>

<script>
import stateType from '../../../utils/questionState.js'
const url  = require('../../../utils/issue_image.js')
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
      phone:null,
      id:null,
      dis:null,
      types:null,
      images:null ,
      baseUrl:null
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
    addIssue(){
      API.post(API.addIssue.url,{},{session:this.userLoginToken}).then(res => {
        if(res.data.code == 200){
          this.id = res.data.data;
          this.getPics();
          this.USER_SIGNIN(res.data.session)
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
    adImage(){
      var issue_id = this.id;
      var session = this.userLoginToken
      var url = "/1/issue/upload-image";
      var formData = new FormData();
      var file = document.getElementById('image').files[0]
        formData.append('image', file);
        formData.append('issue_id', issue_id);
        formData.append('session', session);
      axios.post(
        url,
        formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        }
      ).then(res => {
        if(res.data.code == 200){
          this.getPics()
          this.$toast('上传成功','top');
        }
      })
    },
        del(id,issue_id){
      var form = {
        session:this.userLoginToken,
        issue_id:issue_id,
        image_id:id
      }
      API.post(API.delIssueImage.url,{},form).then(res => {
        if(res.data.code == 200){
          this.getPics()
          this.$toast('删除成功');
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
    editIssue(){
      var type_id = null;
      for(var i in  this.types){
        ((j)=>{
          if(this.types[j] == this.type){ 
            type_id = j
          }
        })(i)
       
      }

       if(!this.dis || !this.phone){
        this.$toast('请填写相关信息');
        return false
      }

      var regPhone = /^1(3|4|5|7|8)\d{9}$/;
      if (!regPhone.test(this.phone)) {
          this.$toast('手机号码格式不正确');
          return false
      }
      const form = {
        session:this.userLoginToken,
        issue_id:this.id,
        type_id:type_id,
        body:this.dis,
        tel:this.phone,

      }
      API.post(API.editIssue.url,{},form).then(res => {
        if(res.data.code == 200){
          this.addIssue();
          this.getPics();
          this.dis = '';
          this.phone = '';
          this.$toast('提问成功');
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
    this.types = stateType
    this.baseUrl = url.urlBase
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
  /* height:40px; */
  margin:10px 0;
}
.sub{
  display: inline-block;
  margin-top:30px;
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


.file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    margin:15px auto;
}
.file input {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
}
.file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
}
.addImage{
  height: 100px;
  position: relative;
}
.imageList span img{
  width:150px;
  height:80px;
}
.imageList span.del{
  width:80px;
  line-height: 30px;
  height:30px;
  font-size:14px;
  text-align: center;
  background:red;
  color:#fff;
  border-radius:5px;
display: inline-block
}
</style>
