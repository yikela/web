<template>
  <div class="hello">
      <div id="tabPanel">
        <div class="item">
        <div class="menutitle" @click="toggle()"><i class="icon-th-list"></i> {{parsentProp.parentItem}}</div>
        <div class="sildermun" v-show="status">
        <ul>
          <router-link v-for="(i,v) in parsentProp.childItems" :key="v" :to="i.to" tag="li" active-class="u-link--Active" exact><i class="icon-star" ></i> {{i.name}}</router-link>
        </ul>
        </div>
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
export default {
  props:['prop'],
  name: 'HelloWorld',
  data () {
    return {
      status: false,
      parsentProp:null,
      parentItem: "我的订单",
      childItems: ["子级菜单", "子级菜单", "子级菜单", "子级菜单"]
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
    toggle: function() {
      this.status = !this.status;
    }
  },
  created(){
    this.parsentProp = this.prop
  },
  mounted(){
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #tabPanel {
  width: 120px;
  height: auto;
  margin: 0 auto;
 }
 
 #tabPanel .item .sildermun ul li {
  height: 40px;
  line-height: 40px;
  list-style: none;
  cursor: pointer;
  color: #666
 }
 
 #tabPanel .item .sildermun ul li:hover {
  /* background: #fff; */
  color:#dc3838
 }

 #tabPanel .item .sildermun ul li.u-link--Active{
    color:#dc3838
  }
 
 #tabPanel .item .menutitle {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #cfcfcf;
  cursor: pointer;
 }
 
 #tabPanel .item .sildermun {
  text-align: center;
  background: #fff;
  
 }
</style>
