import { createRouter, createWebHashHistory } from 'vue-router' 

import Home from '../views/Home.vue'
import Collections from '../views/Collections.vue'
import Men from '../views/Men.vue'
import Women from '../views/Women.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import MyProfile from '../views/MyProfile.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/collections',
    name: 'collections',
    component: Collections
  },

  {
    path: '/men',
    name: 'men',
    component: Men
  },

  {
    path: '/women',
    name: 'women',
    component: Women
  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },

  {
    path: '/myprofile',
    name: 'myprofile',
    component: MyProfile
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
