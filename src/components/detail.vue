<template>
<div>
    <ul>
        <li v-for="(v,k,index) in obj">
            {{k}}:{{v}}
          
        </li>
    </ul>

</div>
</template>
<script>
    export default{
        props:["type","id"],
        data(){
            return{
                obj:{}
                
            }
        },
        watch:{//watch这里监听了props接收过来的值
            $route:{//这里之所以要改成对象的形式，是因为有一个bug，就是点击一个的时候，出不来，需要点击另一个之后再
            //切换回来的时候，才会出现。所以为了改变这个，就把函数换成对象
                handler(n){
                    // this.type=n.params.type;
                    // console.log(n)
                    this.getData()
                },
                immediate:true //否则加载组件后，不会执行getData（）
            }
            
        },
        // beforeRouteEnter(to,from,next){
        //     next((vm)=>{
        //         vm.type = vm.$route.params.type;
        //         console.log(vm.type);
        //         vm.getData();
        //     })
        // },
        // beforeRouteUpdate(to,from,next){
        //     // console.log(to)
        //     this.type = to.params.type;
        //     console.log(this.type);
        //     this.getData();
        //     next();
        // },
        beforeRouteLeave(to,from,next){
            if(confirm("确定要离开嘛")){
                next();
            }else{
                next(false)
            }
        },
        methods:{
            getData(){
                this.$http.get("http://localhost:3000/"+this.type+"/"+this.id).then((res)=>{
                    this.obj=res.data
                    if(this.type==="list"){
                        this.$root.bus.$emit("bsf",res.data.name)
                    }else{
                        this.$root.bus.$emit("bsf",res.data.brand)
                    }
                })
            }
        }

    }
</script>
<style>
span{
    display: inline-block;
    width:80px;
}

</style>