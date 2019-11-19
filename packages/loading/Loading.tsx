import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import { Prop } from 'vue-property-decorator'
import './style.scss'
interface Props {
	loading: boolean
}

@Component
export default class Loading extends tsx.Component<Props> {
	@Prop() loading!: boolean
	render() {
		const { loading } = this
		return loading ? <div class="loading-container"></div> : null
	}
}
