import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one'
import two from '@/components/two'
import kn from '@/components/kn'
import xx from '@/components/xx'
import list from '@/components/list'

import infor from '@/components/infor'
import login from '@/components/login'
import detail from '@/components/detail'


Vue.use(Router)

var router =  new Router({
  routes: [
    {
      path: '/',
      redirect:{"name":"one"}
      
    },
    {
      path:"/one",
      name:"one",
      component:one,
      children:[
        {
          path:"/one/kn",
          component:kn
        },
        {
          path:"/one/xx",
          component:xx
        }
      ]
    },
    {
      path:"/two",
      name:"two",
      component:two
    },
    {
      path:"/login",
      name:"login",
      component:login
    },
    {
      path:"/infor",
      name:"infor",
      component:infor,
      meta:{
        login:true
      }
    },
    {
      path:"/detail/:type/:id",
      name:"detail",
      component:detail,
      props:true
    },
    {
      path:"/list/:type",
      name:"list",
      component:list,
      props:true,
      meta:{//只有先登录验证才能进行下一步
        login:true
      }
    }


  ]
})
router.beforeEach((to,from,next)=>{
  // console.log(sessionStorage.getItem("user"))
  if(to.meta && to.meta.login){//判断是否有to.meta并且是否有登录
    if(sessionStorage.getItem("user")){//sessionStorage里如果有名字了，就没有登录的环节了
        next();
        
    }else{
      router.push("/login")
    }
  }else{
    next();
  }
})
export default router;