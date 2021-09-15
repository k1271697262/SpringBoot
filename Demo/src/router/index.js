import Vue from 'vue'
import login from "../moudle/login.vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'login',
	component: login
}]

const router = new VueRouter({
	routes
})

export default router