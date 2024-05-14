import type { FC } from 'react'

import { NewItem, Post } from '@/components'

import './App.css'

export const App: FC = () => {
	return (
		<div className='container'>
			<NewItem />
			<Post />
		</div>
	)
}
