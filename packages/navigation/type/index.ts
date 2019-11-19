import { RouteConfig } from 'vue-router'
interface metaConfig {
	title: string
}
interface NavConfig extends RouteConfig {
	name: string
	meta?: metaConfig
	children?: NavConfig[]
}

interface NameMap {
	[key: string]: NavConfig
}

export { NavConfig, NameMap }
