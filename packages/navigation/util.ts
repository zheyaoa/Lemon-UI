import { NavConfig, NameMap } from './type'
export const makeMap = (config: NavConfig[]) => {
	const result: NameMap = {}
	config.forEach(item => {
		result[item.name] = item
		Object.assign(result, makeMap(item.children ?? []))
	})
	return result
}
