import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '../views/Shop.vue'
import NewEntry from '../views/NewEntry.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'newentry',
    component: NewEntry
  }
]

const router = new VueRouter({
  routes
})

export default router
