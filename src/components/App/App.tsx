import type { FC } from 'react'

import { NewPost, Post } from '@/components'

import './App.css'

export const App: FC = () => {
	return (
		<div className='container'>
			<NewPost />
			<Post />
		</div>
	)
}
