import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import Button, { ButtonSize, ButtonType } from 'packages/button'
import Panel from 'packages/panel'

@Component
export default class ButtonView extends tsx.Component<{}> {
	render() {
		return (
			<div>
				<Panel title="size">
					<Button size={ButtonSize.mini}>mini</Button>
					<Button size={ButtonSize.small}>small</Button>
					<Button size={ButtonSize.medium}>medium</Button>
				</Panel>
				<Panel title="type">
					<Button type={ButtonType.primary}>primary</Button>
					<Button type={ButtonType.default}>defult</Button>
					<Button type={ButtonType.danger}>danger</Button>
				</Panel>
			</div>
		)
	}
}
