import { useEffect } from 'react'
import type { FC } from 'react'
import { toast } from 'react-toastify'

import { NewItem, Post } from '@/components'

import { fetchPostsData } from '@/redux/features/post/asyncActions'
import { selectMessage, selectPosts } from '@/redux/features/post/selector'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux.hook'

import type { IPost } from '@/@types/post.interface'

import './App.css'

export const App: FC = () => {
	const dispatch = useAppDispatch()
	const posts = useAppSelector(selectPosts) || []
	const message = useAppSelector(selectMessage)

	useEffect(() => {
		dispatch(fetchPostsData())
	}, [dispatch])

	if (posts.length > 0) {
		toast.success(message)
	}

	return (
		<div className='container'>
			<NewItem />
			{posts.length > 0 &&
				posts
					.map((post: IPost) => (
						<Post
							commentIds={post.commentIds}
							key={post._id}
							text={post.text}
							postId={post._id}
							_id={post._id}
						/>
					))
					.reverse()}
		</div>
	)
}
