import cn from 'clsx'
import type { FC, FormEvent } from 'react'

import { Button, TextField } from '@/components'

import { IClassName } from '@/@types/className.interface'

import styles from './NewItem.module.css'

interface INewItemProps extends IClassName {
	placeholder?: string
}

export const NewItem: FC<INewItemProps> = ({
	className,
	placeholder = 'Новый пост ...'
}) => {
	const submitHandler = (event: FormEvent) => {
		event.preventDefault()
	}

	return (
		<form
			onSubmit={submitHandler}
			className={cn(styles.form, className)}
		>
			<TextField placeholder={placeholder} />
			<Button>Добавить</Button>
		</form>
	)
}
