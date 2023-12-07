import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ContactPage from '../components/ContactPage.vue';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/projects', component: ProjectsPage },
    { path: '/contact', compontent: ContactPage },
]

const router = new VueRouter({
    routes,
})

export default router