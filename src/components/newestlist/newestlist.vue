<template>
    <div class="newestlist">
        <div class="newestlist_content">
           <dl  v-for="(item,index) in items" :key="index">
                        <dt><img src="../../assets/img/shop1.jpg"></dt>
                        <dd>
                            <p>价值：<span>{{item.price}}</span></p>
                            <div  class="progress">
                                <span class="bar" id="bar" :style="'width:'+ (item.price - item.remaining)*100/(item.price) + '%'" ></span> 
                            </div>
                            <ul class="newshop_people">
                                <li>
                                    <p>
                                        <span>{{item.price - item.remaining}}</span>
                                        <span>{{item.price}}</span>
                                        <span>{{ item.remaining}}</span>
                                    </p>
                                    <p>
                                        <span>已参与</span>
                                        <span>总份数</span>
                                        <span>剩余</span>
                                    </p>
                                </li>
                            </ul>
                            <p style="text-align:center;margin-top:5px"><router-link class="buy" disabled   tag="button" :to="{name: 'goodsDetail', params: { id: item.id}}">我要夺宝</router-link></p>
                        </dd>
                    </dl>  
        </div>
    </div>
</template>

<script>
export default {
  name: 'newestlist',
  data () {
    return {
      items:[]
    }
  },
  methods:{
     getList(){
      API.get(API.nearClose.url,{},{}).then(res => {
        if(res.data.code ==200){
          this.items = res.data.data
        }
      })
    }
  },
  mounted(){
    this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.newestlist_content{
  padding:20px 10px
}
dl{
  float:left;
  padding:10px;
  width: 220px;
  height: 315px;
  margin-right: 20px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
}
dl dt{
  text-align: center
}
dl dt img {
    width: 125px;
    height: 165px;
    margin: 10px auto;
    vertical-align: middle;
}
.more{
    width:100%;
    line-height: 35px;
    height:35px;
    text-align: center;
    clear: both;
    padding-top:20px;
}
.more span{
    display: inline-block;
    width:100px;
    line-height: 35px;
    height:35px;
    text-align: center;
    border-radius:3px;
    background:#0e90d2;
    color:#fff;
    cursor: pointer;
}
.noMore span{
    background:#999;
    color:#333
}
.newshop_people{
  line-height: 20px;
}
.newestlist>li a dl dd>p button:disabled {
    color:graytext;
    background:#cfcfcf;
}
.progress { 
height: 15px;
width:100%;
margin:2px 0;
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
width: 49%; 
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
.newshop_people>li p{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between
}
.newshop_people>li p span{
    display:block;
    font-size:12px;
    color:#333;
}
.newshop_people>li p span:nth-child(1){
    text-align:left;
}
.newshop_people>li p span:nth-child(2){
    text-align:center;
}
.newshop_people>li p span:nth-child(3){
    text-align:right;
}
.buy{
  margin:auto
}
</style>
