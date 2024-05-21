import cn from 'clsx'
import type { FC } from 'react'

import { ButtonGroup } from '@/components'

import type { IPost } from '@/@types/post.interface'

import styles from './Post.module.css'

interface IPostProps extends IPost {
	className?: string
}

export const Post: FC<IPostProps> = ({ className, text }) => {
	return (
		<article className={cn(styles.post, className)}>
			<p className={styles.content}>{text}</p>
			<ButtonGroup />
		</article>
	)
}
