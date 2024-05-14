import cn from 'clsx'
import type { FC, FormEvent } from 'react'

import { Button, TextField } from '@/components'

import { IClassName } from '@/@types/className.interface'

import styles from './NewPost.module.css'

interface INewPostProps extends IClassName {}

export const NewPost: FC<INewPostProps> = ({ className }) => {
	const submitHandler = (event: FormEvent) => {
		event.preventDefault()
	}

	return (
		<form
			onSubmit={submitHandler}
			className={cn(styles.form, className)}
		>
			<TextField placeholder='Новый пост ...' />
			<Button>Добавить</Button>
		</form>
	)
}
