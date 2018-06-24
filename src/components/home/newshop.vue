<template>
    <div class="newshop">
        <div class="newshop_title">
            <span class="fl">最新上架</span>
            <a href="./allreward">更多新品，点击查看>></a>
        </div>
        <ul class="newshop_content">
            <li v-for="(item,index) in items" :key="index">
                <a href="#">
                    <dl>
                        <dt><img src="../../assets/img/shop1.jpg"></dt>
                        <dd>
                            <p>苹果(APPLE)</p>
                            <p>价值：<span>{{item.price}}</span></p>
                            <div  class="progress">
                                <span class="bar" id="bar" :style="'width:'+ (item.price - item.remaining)*100/(item.price) + '%'"></span> 
                            </div>
                            <ul class="newshop_people">
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
                            <p><router-link class="buy" :disabled="item.remaining == 0 ? true:false"   tag="button" :to="{name: 'goodsDetail', params: { id: item.id}}">我要购买</router-link></p>
                        </dd>
                    </dl>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'newshop',
    data(){
        return{
           items:{
               description:{}
           }
        }
    },
    methods:{
        getList(){
        API.get(API.newsgoods.url,{},{}).then(res => {
            if(res.data.code ==200){
            this.items = res.data.data.slice(0,5)
            }
        })
        }
    },
    created(){

    },
    mounted(){
        this.getList()
    }
}
</script>
<style scoped>
.newshop_title{
    width: 1200px;
    height:54px;
    font-size:16px;
    color:#333;
    line-height:54px;
    background-color:#F0F0F0;
    border-bottom:1px solid #333;
}
.newshop_title a{
    float:right;
}
.newshop_content{
    padding:5px 10px;
}

.newshop_content>li{
    float:left;
    width:220px;
    height:310px;
    margin-right:20px;
    margin-bottom:5px;
    border:1px solid #ddd;
}
.newshop_content>li:nth-child(5n+5){
    margin-right:0;
}
.newshop_content>li a dl dt{
    padding:0 40px;
}
.newshop_content>li a dl dt img{
    width:125px;
    height:165px;
    margin-top:10px;
    vertical-align: middle;
}
.newshop_content>li a dl dd>p{
    font-size:12px;
    color:#333;
    padding-top:5px;
    padding-left:10px;
}
.newshop_content>li a dl dd>p button{
    width: 110px;
    height: 30px;
    margin-left:45px;
    background-color: #dc3838;
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
    border:0;
    outline:none;
    -webkit-appearance: button;
    cursor: pointer;
    text-transform: none
}

.newshop_content>li a dl dd>p button:disabled {
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
.newshop_people li p span{
    display:block;
    width:72px;
    float:left;
    font-size:12px;
    color:#333;
}
.newshop_people li p span:nth-child(1){
    text-align:left;
}
.newshop_people li p span:nth-child(2){
    text-align:center;
}
.newshop_people li p span:nth-child(3){
    text-align:right;
}
</style>


