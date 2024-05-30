import { useState } from 'react';
import type { FC } from 'react';
import { createPortal } from 'react-dom';
import { toast } from 'react-toastify';



import { Button, CommentsBlock } from '@/components';



import { fetchPostsData } from '@/redux/features/post/asyncActions';
import { useAppDispatch } from '@/redux/hooks/redux.hook';



import { fetchData } from '@/utils/axios.instance';



import styles from './ButtonGroup.module.css';


interface IButtonGroupProps {
	postId: string
}

export const ButtonGroup: FC<IButtonGroupProps> = ({ postId }) => {
	const [isOpen, setOpen] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	const openCommentsHandler = () => {
		setOpen(!isOpen)
	}

	const updatePost = async (postId: string) => {
		const { data } = await fetchData.put(`/posts/${postId}`)
		console.log(data)
	}
	const deletePost = async (postId: string) => {
		const { data } = await fetchData.delete(`/posts/${postId}`)
		dispatch(fetchPostsData())

		toast.success(`${data.message}`)
	}

	return (
		<div
			style={{ display: isOpen ? 'block' : 'flex' }}
			className={styles.buttonGroup}
		>
			{createPortal(
				<p>This child is placed in the document body!!!dd.</p>,
				document.body
			)}
			{isOpen && <CommentsBlock postId={postId} />}
			<div className={styles.left}>
				<Button onClick={openCommentsHandler}>
					{!isOpen ? 'Комментарии' : 'Спрятать'}
				</Button>
				<p>Количество комментариев - 2</p>
			</div>
			{!isOpen && (
				<div className={styles.right}>
					<Button onClick={() => updatePost(postId)}>Изменить</Button>
					<Button
						onClick={() => deletePost(postId)}
						color='red'
					>
						Удалить
					</Button>
				</div>
			)}
		</div>
	)
}