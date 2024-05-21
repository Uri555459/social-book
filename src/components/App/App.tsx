import { type FC, useEffect } from 'react'
import { toast } from 'react-toastify'

import { NewItem, Post } from '@/components'

import { fetchPosts, selectPosts } from '@/store/features/post/postSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks/redux.hook'

import './App.css'

export const App: FC = () => {
	const dispatch = useAppDispatch()
	const posts = useAppSelector(selectPosts)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	if (posts.message) {
		toast.success(posts.message)
	}

	return (
		<div className='container'>
			<NewItem />
			<Post />
		</div>
	)
}
