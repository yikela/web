<template>
  <div class="newshopdetail">
      <div class="newshopdetail_content">
          <dl>
              <dt><img src="../../assets/img/shop1.jpg"></dt>
              <dd>
                <p>苹果(APPLE)</p>
                <div  class="progress">
                    <span class="bar" id="bar" :style="'width:'+ (item.price - item.remaining)*100/(item.price) + '%'"></span> 
                </div>
                <ul class="soon_people">
                    <li>
                        <p>
                            <span>{{item.price - item.remaining}}</span>
                            <span>{{item.price}}</span>
                            <span>{{ item.remaining}}</span>
                        </p>
                        <p>
                            <span>已参与人次</span>
                            <span>总需人次</span>
                            <span>剩余人次</span>
                        </p>
                    </li>
                </ul>
              </dd>
          </dl>
      </div>
      <div class="soon_buy">我要购买<input type="number" :max="item.remaining" v-model="number"/>份</div>
      <div class="soon_click" ><span @click="buyGoods()">确定</span></div>
      <div class="all_buy">
          <div class="allbuy_title">所有参与记录<span></span></div>
          <ul class="allbuy_item">
                <li>日期</li>
                <li>参与人</li>
                <li>购买份数</li>
          </ul>
          <div v-for="(item,index) in allResultDetail" :key="index" v-if="allResultDetail.length != 0 && loading">
              <div class="allbuy_content">
                <p>{{item.created_at * 1000 | formDate}}</p>
              </div>
              <div class="allbuy_content">
                  <p>{{item.username}}</p>
              </div>
              <div class="allbuy_content">
                  <p>{{item.buy_count}}</p>
              </div>    
          </div>
          <p  tip="暂无数据" background-color="#fbf9fe" style="width:100%;text-align:center"  v-if="allResultDetail.length == 0 && loading"></p>
          <div v-if="tempItems.length == 10 & loading" class="more"  @click="getBoughtInfo()">
                加载更多
          </div>
          <div v-if="tempItems.length < 10 & loading" class="more" style="color:#999">
            已全部加载
          </div>     
           
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
  import formDate from '../../utils/formDate'
export default {
  name: 'shopdetail',
  data () {
    return {
      item:{
        "description":{}
      },
      id:null,
      resultType:'allResult',
      allResultDetail:[],
      loginAlert:true,
      number:1,
      loading:false,
      loading:false,
      lastId:null,
      tempItems:[],
    }
  },
  components:{
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  filters:{
    formDate
  },
  methods:{
    ...mapMutations(['USER_SIGNIN','USER_SIGNOUT']),
    ...mapActions(['userLogout', 'userLogin']),
    getDetail(){
      API.get(API.goodDetial.url,{id:this.id},{}).then(res => {
        if(res.data.code == 200){
          this.item = res.data.data;
        }
      })
    },
      getBoughtInfo(){
      let url = null;
      if(this.lastId){
        url = API.boughtList.url + `?sell_id=${this.id}&session=${this.userLoginToken}&cursor_id=${this.lastId}`;
      }else{
        url = API.boughtList.url+`?sell_id=${this.id}&session=${this.userLoginToken}`
      }
      API.get(url,{},{}).then(res => {
        if(res.data.code == 200){
          if(this.lastId){
              this.allResultDetail = this.allResultDetail.concat(res.data.data);
          }else{
            this.allResultDetail = res.data.data;
          }
          
          this.tempItems = res.data.data;
          this.lastId = res.data.data[res.data.data.length -1].id;
          this.loginAlert = false;
          this.loading = true
        }else if(res.data.code == 401){
          this.$toast(res.data.msg);
          this.USER_SIGNOUT();
          setTimeout(()=>{
            this.$router.push('/login');
          },2000)
        }else{
          this.loginAlert = true;
          this.loading = true 
          this.$toast.text(res.data.msg);
        }
      })
    },
    buyGoods(){
      if(this.number > this.item.remaining){
        this.$toast("购买的数量错误");
        return false
      }
        const form ={
            id:this.id,
            number:this.number,
            session:this.userLoginToken
        }
        API.post(API.buyGoods.url,{},form).then(res => {
            if(res.data.code == 200){
              this.number = '';
               this.$toast("购买成功");
            }else{
                this.$toast(res.data.msg);
            }
        })
    },
    onItemClick(type){
      this.resultType = type
    }
  },
  created(){
    
  },
  mounted(){
    this.id = this.$route.params.id;
    this.getDetail();
    this.getBoughtInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newshopdetail{
    width:1200px;
    height:100%;
    min-height:800px;
    margin:0 auto;
    background-color:#fff;
}
.newshopdetail_content{
    padding-left:400px;
}
.newshopdetail_content dl{
    width:355px;
    height:180px;
}
.newshopdetail_content dl dt{
    float:left;
    width:140px;
    height:160px;
    margin:10px 5px;
}
.newshopdetail_content dl dt img{
    display:inline-block;
    width:140px;
    height:160px;
}
.newshopdetail_content dl dd{
    float:right;
    margin-top:10px;
}
.newshopdetail_content dl dd>p{
    height:60px;
    font-size:14px;
    line-height:60px;
}
.progress { 
    height: 15px;
    width:100%;
    margin:10px 0;
    overflow: hidden; 
    background-color: #f7f7f7; 
    background-image: -moz-linear-gradient(top, #999999, #999999); 
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#999999), to(#999999)); 
    background-image: -webkit-linear-gradient(top, #999999, #999999); 
    background-image: -o-linear-gradient(top, #999999, #999999); 
    background-image: linear-gradient(to bottom, #999999, #999999); 
    background-repeat: repeat-x; 
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#fff9f9f9', GradientType=0); 
    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); 
    -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); 
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); 
    -webkit-border-radius: 4px; 
    -moz-border-radius: 4px; 
    border-radius: 4px; 
}
.progress .bar { 
    height: 100%; 
    color: #ffffff; 
    float: left; 
    font-size: 12px; 
    text-align: center; 
    align-items: center; 
    display: flex; 
    justify-content: center; 
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); 
    background-color: #0e90d2; 
    background-image: -moz-linear-gradient(top, #FA0019, #FA0019); 
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#FA0019), to(#FA0019)); 
    background-image: -webkit-linear-gradient(top, #FA0019, #FA0019); 
    background-image: -o-linear-gradient(top, #FA0019, #FA0019); 
    background-image: linear-gradient(to bottom, #FA0019, #FA0019); 
    background-repeat: repeat-x; 
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf', endColorstr='#ff0480be', GradientType=0); 
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15); 
    -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15); 
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15); 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box; 
    -webkit-transition: width 0.6s ease; 
    -moz-transition: width 0.6s ease; 
    -o-transition: width 0.6s ease; 
    transition: width 0.6s ease; 
} 
.soon_people li>p>span{
    display:block;
    width:67px;
    float:left;
    font-size:12px;
    height:25px;
    line-height:25px;
    color:#333;
}
.soon_people li>p span:nth-child(1){
    text-align:left;
}
.soon_people li>p span:nth-child(2){
    text-align:center;
}
.soon_people li>p span:nth-child(3){
    text-align:right;
}
.soon_buy{ 
    margin-top:10px;
    padding:1px;  
    font-size:14px;
    text-align:center;
    
}
.soon_buy input{
    width:200px;
    height:30px;
    margin:0 10px;
    border:1px solid #ddd;
    border-radius:2px;
    text-indent: 10px;
}
.soon_click{
    width:1200px;
    margin-top:20px;
    text-align:center;
}
.soon_click span{
    padding:6px 25px;
    border:1px solid #ddd;
    border-radius:4px;
    background:#dc3838;
    color:#fff;
    cursor: pointer;
    
} 
.allbuy_title{
    width:1200px;
    height:40px;
    margin-top:20px;
    font-size:14px;
    color:#fff;
    text-align:center;
    line-height:40px;
    background-color:#41C7DB;
    border:1px solid #ddd;
}
.allbuy_item li{
    float:left;
    margin-top:20px;
    font-size:14px;
    width:33%;
    text-align:center;
}
.allbuy_content{
    float:left;
    width:33%;
    text-align:center;
}
.allbuy_content p{
    line-height:30px;
}
.more{
      clear:both;
      text-align:center;
      width:100%;
      padding:30px 0;
      cursor: pointer;
    }
    
</style>
