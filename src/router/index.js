import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Resume from '../views/Resume.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,

    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,

    },
    ,
    {
        path: '/resume',
        name: 'resume',
        component: Resume,

    },
    ,
    {
        path: '/about',
        name: 'about',
        component: About,

    },

]


export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth'
          }
        }
    }
})