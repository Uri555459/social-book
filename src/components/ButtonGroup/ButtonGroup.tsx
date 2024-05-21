import { useState } from 'react'
import type { FC } from 'react'

import { Button, CommentsBlock } from '@/components'

import styles from './ButtonGroup.module.css'

export const ButtonGroup: FC = () => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const openCommentsHandler = () => {
		setOpen(!isOpen)
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
					<Button>Изменить</Button>
					<Button color='red'>Удалить</Button>
				</div>
			)}
		</div>
	)
}