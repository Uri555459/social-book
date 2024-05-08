import cn from 'clsx'
import type { ComponentProps, FC } from 'react'

import styles from './TextField.module.css'

interface ITextFieldProps extends ComponentProps<'textarea'> {
	className?: string
}

export const TextField: FC<ITextFieldProps> = ({ className, ...props }) => {
	return (
		<textarea
			className={cn(styles.textarea, className)}
			{...props}
		/>
	)
}
