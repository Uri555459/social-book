import type { FormEvent } from 'react'

import { Button, TextField } from '@/components'

import styles from './NewPost.module.css'

export const NewPost = () => {
	const submitHandler = (event: FormEvent) => {
		event.preventDefault()
	}

	return (
		<form
			onSubmit={submitHandler}
			className={styles.form}
		>
			<TextField placeholder='Новый пост ...' />
			<Button>Добавить</Button>
		</form>
	)
}
