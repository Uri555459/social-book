import { useState } from 'react'
import type { FC } from 'react'
import { toast } from 'react-toastify'

import { Button, CommentsBlock } from '@/components'

import { fetchPostsData } from '@/redux/features/post/asyncActions'
import { useAppDispatch } from '@/redux/hooks/redux.hook'

import { fetchData } from '@/utils/axios.instance'

import styles from './ButtonGroup.module.css'

interface IButtonGroupProps {
	id: string
}

export const ButtonGroup: FC<IButtonGroupProps> = ({ id }) => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	const openCommentsHandler = () => {
		setOpen(!isOpen)
	}

	const updatePost = async (id: string) => {
		const { data } = await fetchData.put(`/${id}`)
	}
	const deletePost = async (id: string) => {
		const { data } = await fetchData.delete(`/posts/${id}`)
		dispatch(fetchPostsData())

		toast.success(`${data.message}`)
	}

	return (
		<div
			style={{ display: isOpen ? 'block' : 'flex' }}
			className={styles.buttonGroup}
		>
			{isOpen && <CommentsBlock />}
			<div className={styles.left}>
				<Button onClick={openCommentsHandler}>
					{!isOpen ? 'Комментарии' : 'Спрятать'}
				</Button>
				<p>Количество комментариев - 2</p>
			</div>
			{!isOpen && (
				<div className={styles.right}>
					<Button onClick={() => updatePost(id)}>Изменить</Button>
					<Button
						onClick={() => deletePost(id)}
						color='red'
					>
						Удалить
					</Button>
				</div>
			)}
		</div>
	)
}
