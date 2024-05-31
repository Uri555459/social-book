import type { FC } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components'

import { fetchData } from '@/utils/axios.instance'

import styles from './Comment.module.css'

interface ICommentProps {
	text: string
	commentId: string
	postId: string
}

export const Comment: FC<ICommentProps> = ({
	text = '',
	commentId,
	postId
}) => {
	const removeComment = async (commentId: string, postId: string) => {
		try {
			const { data } = await fetchData.delete<{ message: string }>(
				`/comments/${commentId}/${postId}`
			)

			toast.success(`${data.message}`)
		} catch (error) {
			toast.error(`Ошибка удаления комментария`)
		}
	}

	return (
		<div className={styles.item}>
			<p className={styles.text}>{text}</p>
			<Button
				onClick={() => removeComment(commentId, postId)}
				color='red'
			>
				Удалить
			</Button>
		</div>
	)
}
