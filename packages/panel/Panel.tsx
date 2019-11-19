import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import { Prop } from 'vue-property-decorator'
import './style.scss'
interface Props {
	title: string
}

@Component
export default class Panel extends tsx.Component<Props> {
	@Prop() title!: string
	render() {
		const { title } = this
		return (
			<div class="le-panel">
				<div class="le-panel-title"> {title} </div>
				<div class="le-panel-inner">{this.$slots.default}</div>
			</div>
		)
	}
}
