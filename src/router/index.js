import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=> import('../views/Home.vue'),
        
    },
    {
        path: '/first-step',
        name: 'app-first',
        component: () => import('../views/FirstStep.vue'),
    },
    {
        path: '/second-step',
        name: 'app-second',
        component: ()=> import('../views/SecondStep.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router