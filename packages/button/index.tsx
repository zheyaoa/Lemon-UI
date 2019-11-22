import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import './style.scss'
import { Prop, Emit } from 'vue-property-decorator'

interface Props {
	size?: ButtonSize
	type?: ButtonType
	plain?: boolean
	disable?: boolean
	icon?: string
}
interface Events {
	onClick: (e: Events) => void
}
enum ButtonSize {
	mini = 'mini',
	small = 'small',
	medium = 'medium'
}
enum ButtonType {
	primary = 'primary',
	default = 'default',
	danger = 'danger'
}
@Component
export default class Button extends tsx.Component<Props, Events> {
	@Prop({ default: ButtonSize.medium }) size!: ButtonSize
	@Prop({ default: ButtonType.default }) type!: ButtonType
	@Prop() disable?: boolean

	@Emit('click')
	onClick(event: MouseEvent) {
		return event
	}

	render() {
		const { disable, size, type, onClick } = this
		return (
			<button
				class={[
					'le-button',
					size && 'button-size-' + size,
					type && 'button-type-' + type
				]}
				disabled={disable}
				onClick={onClick}
			>
				{this.$slots.default ?? 'default'}
			</button>
		)
	}
}

export { ButtonSize, ButtonType }
