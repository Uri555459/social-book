import cn from 'clsx'
import { type FC, type FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { Button, TextField } from '@/components'

import { fetchPostsData } from '@/redux/features/post/asyncActions'
import { useAppDispatch } from '@/redux/hooks/redux.hook'

import { fetchData } from '@/utils/axios.instance'

import type { IClassName } from '@/@types/className.interface'
import type { IPostsData } from '@/@types/post.interface'

import styles from './NewComment.module.css'

interface NewCommentProps extends IClassName {
	placeholder?: string
	id: string
}

export const NewComment: FC<NewCommentProps> = ({
	id,
	className,
	placeholder = 'Новый пост ...'
}) => {
	const dispatch = useAppDispatch()
	const [value, setValue] = useState('')

	const submitHandler = async (event: FormEvent) => {
		event.preventDefault()
		const { data } = await fetchData.post<IPostsData>(`/comments/${id}`, {
			text: value
		})
		setValue('')
		dispatch(fetchPostsData())
		toast.success(data.message)
	}

	return (
		<form
			onSubmit={submitHandler}
			className={cn(styles.form, className)}
		>
			<TextField
				setValue={setValue}
				placeholder={placeholder}
				value={value}
			/>
			<Button>Добавить</Button>
		</form>
	)
}
