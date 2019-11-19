import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import Input from 'packages/input'

@Component
export default class InputView extends tsx.Component<{}> {
	public value: string = 'aabbcc'
	render() {
		return (
			<div>
				<Input
					value={this.value}
					onInput={v => (this.value = v as string)}
				>
					<slot slot="prepend">aabbcc</slot>
					<slot slot="append">eeffgg</slot>
				</Input>
				<Input value={this.value} disabled></Input>
			</div>
		)
	}
}
