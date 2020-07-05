import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Table from'@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }
  ]
})
