import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './menu.scss'
import { NavConfig } from '../type/'
import { Prop } from 'vue-property-decorator'

interface Props {
	menus: NavConfig
	active: string
}
interface Events {
	onSubMenuClick: (munuIndex: string) => void
}
@Component
export default class LeftMenu extends tsx.Component<Props, Events> {
	@Prop() menus!: NavConfig
	@Prop() active!: string
	handleClick(item: NavConfig) {
		if (!(item.name == this.active)) {
			this.$emit('subMenuClick', item.name)
		}
	}
	render() {
		const { menus, active, handleClick } = this
		return (
			<div class="sub-menu">
				<div class="sub-menu-title">
					{menus.meta?.title || menus.name}
				</div>
				<div>
					{menus.children?.map(item => {
						return (
							<div
								class={[
									'sub-menu-tab',
									item.name.endsWith(active) &&
										'sub-menu-active-tab'
								]}
								onClick={() => handleClick(item)}
							>
								{item.meta?.title ?? item.name}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
