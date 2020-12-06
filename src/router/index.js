import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Players from '@/components/Players'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Players',
      component: Players
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Players',
      name: 'Players',
      component: Players
    },
  ]
})
