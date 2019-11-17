import { RouteConfig as Config } from 'vue-router'
interface RouteConfig extends Config {
	meta?: {
		title: string
	}
}

export { RouteConfig }
