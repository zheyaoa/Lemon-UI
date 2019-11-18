import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import {
	NavGetter,
	Getters as NavGetters,
	NavMutation,
	Mutations as NavMutations
} from '../factory'
import { Watch } from 'vue-property-decorator'
import { NavConfig } from '../type'
import './menu.scss'

@Component
export default class MajorMenu extends tsx.Component<{}, {}, {}> {
	@NavGetter(NavGetters.router)
	public routes!: NavConfig[]
	@NavGetter(NavGetters.majorActive)
	public active!: NavConfig
	@NavMutation(NavMutations.majorActive)
	updateActive!: (route: NavConfig) => void
	// @Watch('active')
	// handleActiveUpdate() {
	// 	this.$router.push({ path: this.active.path })
	// }
	handleClick(route: NavConfig) {
		this.updateActive(route)
	}
	render() {
		const { routes, handleClick } = this
		return (
			<div class="major-menu">
				<div class="major-menu-icon">{this.$slots.default}</div>
				{routes.map(route => {
					return (
						<div
							class={this.active === route && 'major-menu-active'}
							onClick={() => handleClick(route)}
						>
							{route.meta?.title ?? route.name}
						</div>
					)
				})}
			</div>
		)
	}
}
