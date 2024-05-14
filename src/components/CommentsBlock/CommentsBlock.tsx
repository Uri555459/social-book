import cn from 'clsx'
import type { FC } from 'react'

import { NewItem } from '@/components'

import { IClassName } from '@/@types/className.interface'

import styles from './CommentsBlock.module.css'

interface IComponentsBlockProps extends IClassName {}
export const CommentsBlock: FC<IComponentsBlockProps> = ({ className }) => {
	return (
		<div className={cn(styles.commentsBlock, className)}>
			<NewItem
				className={styles.form}
				placeholder='Новый комментарий ...'
			/>
		</div>
	)
}
