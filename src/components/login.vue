<template>
    <div>
        <input type="text" v-model="username"><br/>
        <input type="text" v-model="password"><br/>
        <button @click="login">登录</button>

    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            if(this.username==="czy" && this.password==="0818"){
                sessionStorage.setItem("user",this.username);
                this.$router.push("/infor");
                this.$emit("name",this.username)
            }
        }
    }
}
</script>

