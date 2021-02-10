import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Players from '@/components/Players'
import PlayerCards from '@/components/PlayersCards'

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
      path: '/PlayerCards',
      name: 'Players',
      component: PlayerCards
    },
  ]
})
