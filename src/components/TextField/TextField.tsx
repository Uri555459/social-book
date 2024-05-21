import cn from 'clsx'
import type { ComponentProps, FC } from 'react'

import styles from './TextField.module.css'

interface ITextFieldProps extends ComponentProps<'textarea'> {
	className?: string
	setValue: (value: string) => void
	value: string
}

export const TextField: FC<ITextFieldProps> = ({
	className,
	setValue,
	value,
	...props
}) => {
	return (
		<textarea
			className={cn(styles.textarea, className)}
			onChange={event => setValue(event.target.value)}
			value={value}
			{...props}
		/>
	)
}
