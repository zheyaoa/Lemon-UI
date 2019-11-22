import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import Input from 'packages/input'
import Panel from 'packages/panel'

@Component
export default class InputView extends tsx.Component<{}> {
	public value: string = 'aabbcc'
	render() {
		return (
			<div>
				<Panel title="正常Input">
					<Input value={this.value}></Input>
				</Panel>
				<Panel title="disabled Input">
					<Input value={this.value} disabled></Input>
				</Panel>
				<Panel title="prepend">
					<Input
						value={this.value}
						onInput={v => (this.value = v as string)}
					>
						<slot slot="prepend">aabbcc</slot>
						<slot slot="append">eeffgg</slot>
					</Input>
				</Panel>
			</div>
		)
	}
}
