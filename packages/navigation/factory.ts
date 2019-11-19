import { NavConfig } from './type'
import { Store, GetterTree, MutationTree } from 'vuex'
import { namespace } from 'vuex-class'
export enum Getters {
	router = 'router'
}
type RouteStore = {
	routes: NavConfig[]
}
export enum Mutations {
	router = 'router'
}

const ModuleName = 'router'
const a = namespace(ModuleName)
export const NavGetter = a.Getter
export const NavMutation = a.Mutation

const getters: GetterTree<RouteStore, void> = {
	[Getters.router](store) {
		return store.routes
	}
}
const mutations: MutationTree<RouteStore> = {
	[Mutations.router](store, value) {
		store.routes = value
	}
}
export const registerRouterFactory = (
	store: Store<any>,
	routes: NavConfig[]
) => {
	store.registerModule('router', {
		namespaced: true,
		state: {
			routes: routes
		},
		getters,
		mutations
	})
}
