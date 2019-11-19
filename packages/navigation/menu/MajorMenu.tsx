import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import { NavConfig } from '../type'
import './menu.scss'
import { Prop } from 'vue-property-decorator'

interface Props {
	menus: NavConfig[]
	active: string
}

interface Events {
	onMajorMenuClick: (menuIndex: string) => void
}

@Component
export default class MajorMenu extends tsx.Component<Props, Events, {}> {
	@Prop() menus!: NavConfig[]
	@Prop() active!: string
	handleClick(route: NavConfig) {
		if (this.active == route.name) return
		this.$emit('majorMenuClick', route.name)
	}
	render() {
		const { menus, handleClick } = this
		return (
			<div class="major-menu">
				<div class="major-menu-icon">{this.$slots.default}</div>
				{menus.map(route => {
					return (
						<div
							class={
								this.active === route.name &&
								'major-menu-active'
							}
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
