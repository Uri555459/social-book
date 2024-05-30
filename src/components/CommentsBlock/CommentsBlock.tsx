import cn from 'clsx'
import type { FC } from 'react'

import { Comment, NewComment } from '@/components'

import { IClassName } from '@/@types/className.interface'

import styles from './CommentsBlock.module.css'

interface IComponentsBlockProps extends IClassName {
	postId: string
}
export const CommentsBlock: FC<IComponentsBlockProps> = ({
	className,
	postId
}) => {
	return (
		<div className={cn(styles.commentsBlock, className)}>
			<NewComment
				id={postId}
				className={styles.form}
				placeholder='Новый комментарий ...'
			/>
			<Comment text={'lkdjfldddddddd dddddddd ddddddddd ddddddddddddddddkj'} />
		</div>
	)
}
