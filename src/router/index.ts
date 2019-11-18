import VueRouter from 'vue-router'
import Vue from 'vue'
import Wrapper from 'packages/wrapper/index'
import { NavConfig } from 'packages/navigation'
Vue.use(VueRouter)

const routes: NavConfig[] = [
	{
		path: '/component',
		name: 'component',
		component: Wrapper,
		meta: {
			title: 'component'
		},
		children: [
			{
				path: '/component/page',
				name: 'page',
				component: () => import('../page1'),
				meta: {
					title: 'page1'
				}
			},
			{
				path: '/component/button',
				name: 'button',
				component: () => import('../view/button'),
				meta: {
					title: 'button'
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
				path: '/component2/page2',
				name: 'page2',
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
