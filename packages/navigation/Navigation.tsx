import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './style.scss'
import MajorMenu from './menu/MajorMenu'
import SubMenu from './menu/SubMenu'
import { NavGetter, Getters as NavGetters } from './factory'
import { NavConfig, NameMap } from './type'
import { makeMap } from './util'
import { Watch } from 'vue-property-decorator'

@Component
export default class Navigation extends tsx.Component<{}> {
	@NavGetter(NavGetters.router)
	public navConfig!: NavConfig[]
	public selectMajorMenuIndex: string = ''
	public selectSubMenuIndex: string = ''
	public nameMaps: NameMap = {}

	@Watch('$route', { immediate: true })
	handleRouteChange() {
		const name = this.$route.name?.split(':') ?? []
		const [major, sub] = name
		this.selectMajorMenuIndex = major ?? ''
		this.selectSubMenuIndex = sub ? major + ':' + sub : ''
	}

	public handleMajorMenuUpdate(menuIndex: string) {
		this.selectMajorMenuIndex = menuIndex
		let name = menuIndex
		let nav = this.nameMaps[name]
		while (nav?.children?.[0]) {
			nav = nav.children[0]
		}
		this.$router.push({ name: nav?.name })
	}

	public handleSubMenuUpdate(menuIndex: string) {
		this.$router.push({ name: menuIndex })
	}

	created() {
		this.nameMaps = makeMap(this.navConfig)
	}

	render() {
		const {
			navConfig,
			selectMajorMenuIndex,
			handleMajorMenuUpdate,
			selectSubMenuIndex,
			handleSubMenuUpdate
		} = this
		return (
			<div class="container">
				<div class="header">
					<MajorMenu
						menus={navConfig}
						active={selectMajorMenuIndex}
						onMajorMenuClick={handleMajorMenuUpdate}
					></MajorMenu>
				</div>
				<div class="context">
					<div class="aside">
						<SubMenu
							menus={this.nameMaps[this.selectMajorMenuIndex]}
							active={selectSubMenuIndex}
							onSubMenuClick={handleSubMenuUpdate}
						></SubMenu>
					</div>
					<div class="main">
						<router-view></router-view>
					</div>
				</div>
			</div>
		)
	}
}
