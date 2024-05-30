import type { FC } from 'react'

import { Button } from '@/components'

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
	const removeComment = (commentId, postId) => {}

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
