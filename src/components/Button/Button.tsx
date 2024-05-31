import cn from 'clsx'
import type { ComponentProps, FC, ReactNode } from 'react'

import styles from './Button.module.css'

type ButtonColor = 'blue' | 'red'

interface IButtonProps extends ComponentProps<'button'> {
	children: ReactNode
	className?: string
	color?: ButtonColor
	onClick?: () => void
}

export const Button: FC<IButtonProps> = ({
	children,
	className,
	color = 'blue',
	onClick,
	...props
}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.blue]: color === 'blue',
				[styles.red]: color === 'red'
			})}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}
