import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import Panel from 'packages/panel'

@Component
export default class PanelView extends tsx.Component<{}> {
	render() {
		return <Panel title="this is panel titie">this is panel content</Panel>
	}
}
