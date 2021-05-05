import Router from 'vue-router'
import Vue from'vue'

// 导入刚才编写的组件
import AppIndex from '../views'
import Login from '../views/Login'
import Register from "../views/Register";
import Help from "../views/Help";
import PersonalCenter from "../views/PersonalCenter";
import QuestionBank from "../views/QuestionBank";
import Status from "../views/Status";
import question from "../views/Question/question";
import compiledetails from"../views/Question/CompileDetails";
import usersetting from"../views/UserSetting"

Vue.use(Router);

const VueRouterPush=Router.prototype.push;
Router.prototype.push=function push(to){
  return VueRouterPush.call(this,to).catch(err=>err)
};


export default new Router({
  mode:"history",
  routes:[
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/logout',
      name:'Logout',
    },
    {
      path:'/index',
      name:'Index',
      component:AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/help',
      name:'Help',
      component:Help
    },
    {
      path:'/personalcenter',
      name:'PersonalCenter',
      component:PersonalCenter
    },
    {
      path:'/questionbank',
      name:'QuestionBank',
      component:QuestionBank
    },
    {
      path:'/status',
      name:'Status',
      component:Status
    },

    {
      path:'/question',
      name:'Question',
      meta: {
        requireAuth: true //表示该路由需要登录验证后才能进入  在切换路径跳转路由之前作判断
      },
      component:question
    },
    {
      path:'/compiledetails',
      name:'CompileDetails',
      meta: {
        requireAuth: true //表示该路由需要登录验证后才能进入  在切换路径跳转路由之前作判断
      },
      component:compiledetails
    },
    {
      path:'/personalcenter/usersetting',
      name:'UserSetting',
      component:usersetting
    },

  ]
});
