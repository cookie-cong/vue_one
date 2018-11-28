<template>
  <div>
    <headers></headers>
    <div v-if="username">你好{{username}}
      <button @click="quit">退出</button>
    </div>
    <router-link to="/one">one</router-link>
    <router-link to="/two">two</router-link>
    <!-- <router-link to="/list/list">list</router-link>
    <router-link to="/list/comp">comp</router-link> -->
    <button @click="go('list')">用户列表</button>
    <button @click="go('comp')">电脑品牌</button>
    <router-view @name="receive"/>
  </div>
</template>

<script>
import headers from './components/headers'
export default {
  //还可以新建一个组件，然后把这些东西都放在那个组件里
  // created(){
  //   this.changeTitle("/one")
  //   this.$router.beforeEach((to,from,next)=>{//这里也可以用afterEach,但是最后不用写next
  //     this.changeTitle(to.path)
  //     console.log(to.path);
  //     next();

  //   })
  // },
  components:{
    headers
  },
  data(){
    return{
      username:""
    }
  },
  methods:{
    go(type){
      this.$router.push({path:"/list/"+type})//可以利用Vue实例中的$router.push方法
    },
    receive(name){
      this.username=name
    },
    quit(){
      this.username="";
      sessionStorage.clear();
      this.$router.push("/login")
    }
    // changeTitle(path){
    //      switch(path){
    //        case "/one":document.title="one";break;
    //        case "/one/kn":document.title="柯南";break;
    //        case "/list/list":document.title="用户列表";break;
    //        case "/list/comp":document.title="电脑品牌";break;
    //      }
    // }

  }
}
</script>

<style>

</style>
