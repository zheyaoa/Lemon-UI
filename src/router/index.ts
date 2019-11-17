import VueRouter from 'vue-router'
import Vue from 'vue'
import Wrapper from 'packages/wrapper/index'
import { RouteConfig } from 'packages/index'
Vue.use(VueRouter)

const routeConfig: RouteConfig[] = [
	{
		path: '/component',
		component: Wrapper,
		meta: {
			title: 'component'
		},
		children: [
			{
				path: '/component/page',
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
		component: Wrapper,
		meta: {
			title: 'component2'
		},
		children: [
			{
				path: '/component1/page2',
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
	routes: routeConfig
})
export { router, routeConfig as routes }
