<template>
<div>
    <ul>
        <li v-for="item in list">
            <!-- <span v-for="(v,k,idx) in item">{{k}}:{{v}}</span> -->
            <span v-if="type==='list'">{{item.name}}</span>
            <span v-else>{{item.brand}}</span>
        </li>
    </ul>

</div>
</template>
<script>
    export default{
        props:["type"],
        data(){
            return{
                list:[]
                
            }
        },
        watch:{
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
                this.$http.get("http://localhost:3000/"+this.type).then((res)=>{
                    this.list=res.data
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
