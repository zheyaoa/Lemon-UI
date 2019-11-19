import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import Loading from 'packages/loading'

@Component
export default class LoadingView extends tsx.Component<{}> {
	render() {
		return (
			<div>
				<Loading loading={true}></Loading>
			</div>
		)
	}
}
