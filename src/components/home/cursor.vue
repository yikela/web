<template>
    <div class="cursor">
        <ul>
            <li><a href="#"><img src="../../assets/img/login_banner.jpg"></a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'cursors',
    data(){
        return{
            items:null,
        }
    },
    computed:{
            // ...mapGetters(['userLoginToken']),
        },
        methods:{
            // ...mapMutations(['USER_SIGNIN']),
            // ...mapActions(['userLogout', 'userLogin']),
            getList(){
            API.get(API.swiperList.url,{},{}).then(res => {
            if(res.data.code == 200){
                this.items = res.data.data;
            }
            })
            },
        },
        created(){

        },
        mounted(){
            this.getList()
        }
}
</script>
<style scoped>
.cursor{
    width: 640px;
    height: 310px;
    float: left;
}
.cursor ul li a img{
    display:inline-block;
    width:640px;
    height:310px;
}
</style>