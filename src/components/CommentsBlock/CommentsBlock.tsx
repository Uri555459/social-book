import cn from 'clsx'
import { useEffect } from 'react'
import type { FC } from 'react'

import { Comment, NewComment } from '@/components'

import type { IClassName } from '@/@types/className.interface'

import styles from './CommentsBlock.module.css'

interface IComponentsBlockProps extends IClassName {
	postId: string
	commentIds: string[]
}
export const CommentsBlock: FC<IComponentsBlockProps> = ({
	className,
	postId,
	commentIds
}) => {
	useEffect(() => {}, [])

	return (
		<div className={cn(styles.commentsBlock, className)}>
			<NewComment
				id={postId}
				className={styles.form}
				placeholder='Новый комментарий ...'
			/>

			{/* <Comment
				commentId={commentId}
				postId={postId}
			/> */}
		</div>
	)
}
