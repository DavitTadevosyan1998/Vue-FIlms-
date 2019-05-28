import Vue from 'vue';
import Router from 'vue-router';
import FilmsBody from './components/FilmsBody';
import ItemsData from './components/ItemsData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: FilmsBody
    },
    {
      path: '/itemsData/:id',
      name: 'itemsData',
      component: ItemsData
    },    
  ]
})
