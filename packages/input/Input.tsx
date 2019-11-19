import Component from 'vue-class-component'
import * as tsx from 'vue-tsx-support'
import { Prop, Emit } from 'vue-property-decorator'
import './style.scss'
interface Props {
	value: string | number
	maxLength?: number
	placeholder?: string
	disabled?: boolean
}
interface Events {
	onInput: (val: string | number) => void
	onChange: (val: string) => void
	onFocus: (event: Event) => void
	onBlur: (event: Event) => void
}

@Component
export default class Input extends tsx.Component<Props, Events> {
	@Prop() value!: string | number
	@Prop() maxLength?: number
	@Prop() placeholder?: string
	@Prop() disabled?: boolean
	@Emit('input')
	handleOnInput(event: Event) {
		return (event.target as HTMLInputElement).value
	}
	@Emit('change')
	handleOnChange(event: Event) {
		return (event.target as HTMLInputElement).value
	}
	@Emit('focus')
	handleOnFocus(event: Event) {
		return event
	}
	@Emit('blur')
	handleOnBlur(e: Event) {
		return e
	}
	render() {
		const {
			value,
			handleOnInput,
			handleOnChange,
			maxLength,
			placeholder,
			handleOnFocus,
			handleOnBlur,
			disabled
		} = this
		return (
			<div
				class={[
					'le-input',
					this.$slots.prepend || this.$slots.append
						? 'le-input-group'
						: ''
				]}
			>
				{this.$slots.prepend ? (
					<span class="le-input-prpend">{this.$slots.prepend}</span>
				) : null}
				<input
					class={['le-input-inner', disabled && 'le-input-disabled']}
					value={value}
					disabled={disabled}
					maxlength={maxLength}
					placeholder={placeholder}
					onInput={handleOnInput}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					onChange={handleOnChange}
				></input>
				{this.$slots.append ? (
					<span class="le-input-append">{this.$slots.append}</span>
				) : null}
			</div>
		)
	}
}
