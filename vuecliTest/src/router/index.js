import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/tableEdit'

Vue.use( Router )

export default new Router( {
  routes: [ {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
} )