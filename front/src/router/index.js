import { createRouter, createWebHistory } from 'vue-router'
import CheckPassport from '../views/CheckPassport.vue'
import YouAreReady from '../views/YouAreReady.vue'
import RegisterEmployee from '../views/RegisterEmployee.vue'
import VerifyEmail from '../views/VerifyEmail.vue'
import RegisterCustom from '../views/RegisterCustom.vue'
import LetOut from '../views/LetOut.vue'
import Presence from '../views/Presence.vue'

const routes = [
  {
    path: '/',
    name: 'CheckPassport',
    component: CheckPassport
  },
  {
    path: '/Message',
    name: 'YouAreReady',
    component: YouAreReady
  },
  {
    path: '/RegisterEmployee',
    name: 'RegisterEmployee',
    component: RegisterEmployee
  },
  {
    path: '/VerifyEmail',
    name: 'VerifyEmail',
    component: VerifyEmail
  },
  {
    path: '/RegisterCustomer',
    name: 'RegisterCustomer',
    component: RegisterCustom
  },
  {
    path: '/LetOut',
    name: 'LetOut',
    component: LetOut
  },
  {
    path: '/Presense',
    name: 'Presence',
    component: Presence
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
