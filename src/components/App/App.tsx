import { type FC, useEffect } from 'react'
import { toast } from 'react-toastify'

import { NewItem, Post } from '@/components'

import {
	fetchPosts,
	selectMessage,
	selectPosts
} from '@/store/features/post/postSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux.hook'

import { IPost } from '@/@types/post.interface'

import './App.css'

export const App: FC = () => {
	const dispatch = useAppDispatch()
	const posts = useAppSelector(selectPosts)
	const message = useAppSelector(selectMessage)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	if (posts.length > 0) {
		toast.success(message)
	}

	return (
		<div className='container'>
			<NewItem />
			{posts.map((post: IPost) => (
				<Post
					key={post._id}
					text={post.text}
				/>
			))}
		</div>
	)
}
