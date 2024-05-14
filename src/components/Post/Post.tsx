import cn from 'clsx'
import type { FC } from 'react'

import { ButtonGroup } from '@/components'

import { IClassName } from '@/@types/className.interface'

import styles from './Post.module.css'

interface IPostProps extends IClassName {}

export const Post: FC<IPostProps> = ({ className }) => {
	return (
		<article className={cn(styles.post, className)}>
			<p className={styles.content}>
				Сегодня было замечательное предложение пойти поужинать этим вечером.
				Главное, чтобы погода была преимущественно теплой.
			</p>
			<ButtonGroup />
		</article>
	)
}
