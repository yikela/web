<template>
    <div class="cursor">
        <ul>
            <li><a href="#"><img src="../../assets/img/login_banner.jpg"></a></li>
        </ul>
    </div>
</template>
<script>
export default{
    name: 'cursors',
    data(){
        return{
            msg: 'Welcome to Your Vue.js App'
        }
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