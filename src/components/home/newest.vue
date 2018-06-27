<template>
    <div class="newest">
        <div class="newest_title">
            <span class="fl">最新开奖</span>
            <a href="./newestlist">更多开奖，点击查看>></a>
        </div>
        <ul class="newest_content">
            <li v-for="(item,index) in items" :key="index" v-if="loading">
                <a href="../shopdetail">
                    <dl>
                        <dt>
                            <p>{{item.description.name}}</p>
                            <p>总需：<span>{{item.price}}人次</span></p>
                            <p>获奖者：<span>{{item.winner_username}}</span></p>
                            <!-- <p>本期参与：<span>538人次</span></p> -->
                            <p>本期幸运号码：<span>{{item.calc_result}}</span></p>
                        </dt>
                        <dd><img src="../../assets/img/shop.jpg"></dd>
                    </dl>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'new',
        data(){
            return{
                loading:false,
                items:{
                    description:{
                        name:null
                    }
                }
            }
        },
        methods:{
            getList(){
                API.get(API.winners.url,{},{}).then(res => {
                    if(res.data.code ==200){
                        this.items = res.data.data.slice(0,2);
                        this.loading = true
                    }
                })
                }
        },
        created(){
            this.getList()
        },
        mounted(){
        }
    }
</script>
<style scoped>
.newest{
  width: 345px;
  height: 100%;
  background:#FFFFFF;
  float: left;
}
.newest_title{
    width: 345px;
    height:54px;
    font-size:16px;
    color:#333;
    text-align:left;
    line-height:54px;
    background-color:#F0F0F0;
    border-bottom:1px solid #333;
}
.newest_title a{
    float:right;
}
.newest_content  li{
    height:158px;
    border-bottom:1px solid #ddd;
}
.newest_content  li a{
    display:block;
}
.newest_content  li a dl dt{
    width:225px;
    float:left;
}
.newest_content  li a dl dt p{
    font-size:14px;
    color:#333;
    padding: 7px 0 0 15px;
}
.newest_content li a dl dd img{
    margin-top:26px;
    width:100px;
    height:100px;
}
</style>