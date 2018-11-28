<template>
    <div>{{title}}</div>
</template>
<script>
export default {
    data(){
      return{
        title:""
      }
    },
    created(){
        this.$root.bus.$on("bsf",(data)=>{
          this.title=data;
        })
        this.changeTitle("/one")
        this.$router.beforeEach((to,from,next)=>{//这里也可以用afterEach,但是最后不用写next
        this.changeTitle(to.path)
        console.log(to.path);
        next();

        })
  },
  methods:{
         changeTitle(path){
         switch(path){
           case "/one":this.title="one";break;
           case "/one/kn":this.title="柯南";break;
           case "/list/list":this.title="用户列表";break;
           case "/list/comp":this.title="电脑品牌";break;
         }
    }

  }
}
</script>

