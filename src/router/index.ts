import VueRouter from 'vue-router'
import Vue from 'vue'
import Wrapper from 'packages/wrapper/index'
import { NavConfig } from 'packages/navigation'
Vue.use(VueRouter)

const routes: NavConfig[] = [
	{
		path: '/',
		name: '',
		redirect: { name: 'component:page' }
	},
	{
		path: '/component',
		name: 'component',
		component: Wrapper,
		meta: {
			title: 'component'
		},
		children: [
			{
				path: 'page',
				name: 'component:page',
				component: () => import('../page1'),
				meta: {
					title: 'page1'
				}
			},
			{
				path: 'button',
				name: 'component:button',
				component: () => import('../view/button'),
				meta: {
					title: 'button'
				}
			},
			{
				path: 'loading',
				name: 'component:loading',
				component: () => import('../view/loading'),
				meta: {
					title: 'loading'
				}
			},
			{
				path: 'input',
				name: 'component:input',
				component: () => import('@/view/input'),
				meta: {
					title: 'input'
				}
			},
			{
				path: 'panel',
				name: 'component:panel',
				component: () => import('@/view/panel'),
				meta: {
					title: 'panel'
				}
			}
		]
	},
	{
		path: '/component2',
		name: 'component2',
		component: Wrapper,
		meta: {
			title: 'component2'
		},
		children: [
			{
				path: 'page2',
				name: 'component2:page2',
				component: () => import('../page2'),
				meta: {
					title: 'page2'
				}
			}
		]
	}
]
const router: VueRouter = new VueRouter({
	mode: 'history',
	routes: routes
})
export { router, routes }
