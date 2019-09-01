import Vue from 'vue'
import Router from 'vue-router'
import MainContents from '@/components/main/MainContents'
import LocalContents from '@/components/local/LocalContents'
import Login from '@/components/login/Login'
import HelloWorld from '@/components/HelloWorld'
import { store } from '@/store/store'

Vue.use(Router)

const enhanceAccessToken = async () => {
  let { accessToken } = sessionStorage
  if (accessToken && accessToken.split(' ')[0] === 'Bearer') {
    // has token
  } else {
    await store.dispatch('getOauth2guestToken')
  }
}
enhanceAccessToken().then().catch()

const initToken = () => (from, to, next) => {
  return next()
}

const requireAuth = () => (from, to, next) => {
  const isAuthenticated = false
  if (isAuthenticated) return next()
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainContents,
      beforeEnter: initToken()
    },
    {
      path: '/hello',
      name: 'helloWorld',
      component: HelloWorld,
      beforeEnter: initToken()
    },
    {
      path: '/locals',
      name: 'locals',
      component: LocalContents,
      beforeEnter: requireAuth()
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      beforeEnter (to, from, next) {
        next('/')
      }
    }
  ]
})
