<template>
    <div class="shopdetail">
        <dl class="shopdetail_content">
            <dt><img src="../../assets/img/shop1.jpg"></dt>
            <dd>{{item.description['round no']}}期： <span>{{item.description.name}}</span></dd>
            <dd>获得者：<span>{{item.winner_username}}</span></dd>
            <dd>夺宝人次：<span>{{item.price}}人次</span></dd>
            <dd>商品价值：<span>{{item.price}}平台币</span></dd>
            <dd>揭晓时间：<span>{{item.updated_at*1000 }}</span></dd>
            <dd>中奖号码：<span>{{item.calc_result}}</span></dd>
        </dl>
        <ul class="tabs">
            <li v-for="(item,index) in tabsParam" :key = "index" @click="toggleTabs(index)" :class="index===nowIndex ? 'active':''">{{item}}</li>
        </ul>
        <div class="tabs_content" v-show="nowIndex===1">
            <p style="padding:20px 0">计算规则：以夺宝结束后第一个以太坊区块的hash值作为随机数据结果</p>
        </div>
        <div class="tabs_content" v-show="nowIndex===0">
            <ul style="overflow:hidden">
                <li><a href="#">日期</a></li>
                <li><a href="#">参与人</a></li>
                <li><a href="#">购买份数</a></li>
            </ul>
            <div v-for="(item,index) in allResultDetail" :key="index" v-if="allResultDetail.length != 0">
              <div class="computer">
                <p>{{item.created_at * 1000}}</p>
            </div>
            <div class="computer">
                <p>{{item.username}}</p>
            </div>
            <div class="computer">
                <p>{{item.buy_count}}</p>
            </div>
            </div>
            <p v-if="allResultDetail.length == 0" style="text-align:center;padding:20px 0">
              暂无数据
            </p>
            <p class="resultDetail"  v-if="loginAlert" style="text-align:center;padding:20px 0;">
                请登录后查看
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
export default {
  name: 'shopdetail',
  data () {
    return {
        tabsParam:['所有参与记录','计算结果'],
        nowIndex:0,
        isShow:false,
        item:{
          "description":{}
        },
        id:null,
        allResultDetail:[],
        loginAlert:false,
        number:1,
        show:false,
        loading:true
    }
  },
  computed:{
    ...mapGetters(['userLoginToken']),
  },
  methods : {
     ...mapMutations(['USER_SIGNIN','USER_SIGNOUT']),
    ...mapActions(['userLogout', 'userLogin']),
      toggleTabs(index){
        this.nowIndex = index;
        // $(window).resize();
    },
    
    getDetail(){
      API.get(API.goodDetial.url,{id:this.id},{}).then(res => {
        if(res.data.code == 200){
          this.item = res.data.data; 
          console.log(res.data.data)
        }
      })
    },
    getBoughtInfo(){
      API.get(API.boughtList.url+'?sell_id='+this.id + '&session='+this.userLoginToken,{},{}).then(res => {
        console.log(res)
        if(res.data.code == 200){
            this.allResultDetail = res.data.data;
            this.loginAlert = false;
            this.loading = false 
        }else if(res.data.code == 401){
          this.$toast(res.data.msg);
          this.USER_SIGNOUT();
          setTimeout(()=>{
            this.$router.push('/login');
          },1000)
        }else{
          this.loginAlert = true;
          this.loading = false 
          this.$toast(res.data.msg);
        }
      })
    },
    buyGoods(){
        const form ={
            id:this.id,
            number:this.number,
            session:this.userLoginToken
        }
        
        API.post(API.buyGoods.url,{},form).then(res => {
            if(res.data.code == 200){
               this.show = true;
            }else{
                this.$toast(res.data.msg);
            }
        })
    },
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
.shopdetail{
    width:1200px;
    height:100%;
    margin:0 auto;
    overflow:hidden;
    background-color:#fff;
    margin-bottom:10px;
}
.shopdetail_content{
    width:1180px;
    height:400px;
    margin:10px;
    padding-top:20px;
}
.shopdetail_content dt{
    margin-left:30px;
    width:220px;
    height:300px;
    float:left;
}
.shopdetail_content dt img{
    display:inline-block;
    width:220px;
    height:300px;
}
.shopdetail_content dd{
    margin-top:9px;
    margin-left:270px;
    font-size:18px;
    color:#333;
    line-height:42px;
}
.tabs{
    width:1180px;
    height:40px;
    margin:0 10px;
}
.tabs li{
    float:left;
    width:590px;
    height:40px;
    border:1px solid #ddd;
    height:40px;
    font-size:14px;
    color:#333;
    text-align:center;
    line-height:40px;
    cursor: pointer;
}

.tabs_content{
    width:1180px;
    margin:0 10px;
}
.tabs_content p{
    padding:10px 2px;
    color:#333;
    font-size:14px;
}
.tabs_content ul{
  display: flex;
  flex-flow: row nowrap;
}
.tabs_content ul li{
    float:left;
    padding:15px 0;
    flex:1;
    text-align:center;
    background: #dfdfdf
}
.computer{
    float:left;
    width:33%;
    text-align:center;
}
.computer p{
    line-height:24px;
}
li.active{
  color:red;
}
</style>
