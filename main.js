// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from'../src/router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(router);
Vue.use(ElementUI);
Vue.config.productionTip = false

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api8.141.70.34:8443
var axios = require('axios')
axios.defaults.baseURL = 'http://8.141.70.34:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
      if (store.state.user.username) {
        next()
      } else {
        next({
          path: 'login',
          query: {redirect: to.fullPath}
        })
      }
    } else {
      next()
    }
  }
)

new Vue({

  el: '#app',
  router,
  render:h=>h(App),
  store,
})
