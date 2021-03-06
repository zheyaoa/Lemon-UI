import Vue from 'vue'
import App from './app'
import { router, routes } from './router'
import store from './store'
import './common/reset.scss'
import { registerRouterFactory } from 'packages/navigation/'
import { sayHello } from '../../util'

sayHello()

registerRouterFactory(store, routes)
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
