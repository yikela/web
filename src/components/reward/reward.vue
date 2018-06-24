<template>
<div>
  <div class="reward" v-if="loading">
    <div class="reward_title"><b>最新揭晓</b>(到目前为止工揭晓商品<span>106</span>件)</div>
    <ul class="reward_content">
      <li v-for="(item,index) in items" :key="index">
        <dl>
          <dt><img src="../../assets/img/shop1.jpg"></dt>
          <dd>
              <ul class="reward_people">
                <li><img src="../../assets/img/shop.jpg"></li>
                <li>
                  <p>获得者：<b>{{item.winner_username}}</b></p>
                  <p>云购： <span>{{item.price}}</span>人次</p>
                </li>
              </ul>
          </dd>
          <dd>第1期： <span>{{item.description.name}}</span></dd>
          <dd>商品价值：<span>{{item.price}}</span></dd>
          <dd>揭晓时间：<span>{{item.updated_at}}</span></dd>
        </dl>
        <p>幸运云购码：<span>{{item.calc_result}}</span><a href="#">查看详情</a></p>
      </li>
    </ul>

    <div class="more"  v-show="!noMore"><span @click="more()">加载更多</span></div>
    <div class="more noMore"  v-show="noMore"><span>没有更多了</span></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'reward',
  data () {
    return {
      items: [],
      lastId:null,
      loading:false,
      noMore:false
    }
  },
  filters:{
  },
  methods:{
    get_list(){
        API.get(API.winners.url,{},{}).then(res => {
            if(res.data.code ==200){
            this.items =  res.data.data;
            this.lastId = res.data.data[res.data.data.length -1].id;
            this.loading = true;
            if(res.data.data.length < 10){
                this.noMore = true
            }
            }
        })
    },
    more(){
          let url = API.winners.url + `?cursor_id=${this.lastId}`;
          API.get(url,{},{}).then(res => {
            if(res.data.code ==200){
            this.items =  this.items.concat(res.data.data);
            this.lastId = res.data.data[res.data.data.length -1].id;
            this.loading = true;
            if(res.data.data.length < 10){
                this.noMore = true
            }
            }
        })
    }
},
mounted(){
    this.get_list()
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.more{
    width:100%;
    height:40px;
    text-align: center;
    clear: both;
    padding-top:20px;
}
.more span{
    display: inline-block;
    width:100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background:#0e90d2;
    color:#fff;
    cursor: pointer;
}
.noMore span{
    background:#999;
    color:#333
}
.reward{
  width: 1200px;
  height:100%;
  margin:0 auto;
  overflow:hidden;
  background-color:#fff;
  padding:10px 0 80px 0;
}
.reward_title{
  width:1180px;
  height:44px;
  font-size:14px;
  color:#333;
  line-height:44px;
  margin:5px 10px;
  border:1px solid #ddd;
}
.reward_title b{
  font-size:16px;
  color:#ff6868;
  margin-left:10px;
}
.reward_title span{
  color:#ff6868;
}
.reward_content{
  padding:5px 10px;

}
.reward_content>li{
  float:left;
  width:580px;
  height:250px;
  margin-right:20px;
  margin-bottom:5px;
  border:1px solid #ff6868;
  box-sizing:border-box;
}
.reward_content>li dl{
  padding:10px 10px 0 10px;
  height:190px;
}
.reward_content>li dl dt{
  float:left;
  width:170px;
  height:180px;
  border:1px solid #ddd
}
.reward_content>li dl dt img{
  width:80px;
  height:160px;
  margin:5px 45px;
}
.reward_content>li dd{
  float:right;
  width:375px;
  padding-left:5px;
  color:#333;
  font-size:14px;
  line-height:30px;
}
.reward_people li{
  float:left;
}
.reward_people li img{
  width:65px;
  height:65px;
}
.reward_people li p{
  color:#333;
  font-size:12px;
  line-height:24px;
}
.reward_people li p span{
  color:#ff6868;
}
.reward_content>li>p{
  margin-top:10px;
  padding-left:20px;
  height:48px;
  line-height:48px;
  font-size:14px;
  color:#333;
  background-color:#FFF4ED;
}
.reward_content>li>p span{
  font-weight: 700;
  color:#DA3553;
  margin-right:10px
}
.reward_content>li>p a{
  padding:4px 10px;
  color:#ff6868;
  border:1px solid #ddd;
  border-radius:4px;
}
.reward_content>li:nth-child(2n+2){
  margin-right:0;
}
</style>
