import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Services from './components/Services.vue'
import Fact from './components/Fact.vue'
import Portfolio from './components/Portfolio.vue'
import Team from './components/Team.vue'
import Login from './components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/fact',
    name: 'fact',
    component: Fact
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
    path: '/services',
    name: 'services',
    component: Services
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
