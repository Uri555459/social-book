import cn from 'clsx'
import { type FC, type FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { Button, TextField } from '@/components'

import { fetchPosts } from '@/store/features/post/postSlice'
import { useAppDispatch } from '@/store/hooks/redux.hook'

import { fetchData } from '@/utils/axios.instance'

import { IClassName } from '@/@types/className.interface'
import { IData } from '@/@types/post.interface'

import styles from './NewItem.module.css'

interface INewItemProps extends IClassName {
	placeholder?: string
}

export const NewItem: FC<INewItemProps> = ({
	className,
	placeholder = 'Новый пост ...'
}) => {
	const dispatch = useAppDispatch()
	const [value, setValue] = useState('')

	const submitHandler = async (event: FormEvent) => {
		event.preventDefault()
		const { data } = await fetchData.post<IData>('/posts', { text: value })
		setValue('')
		dispatch(fetchPosts())
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
