import type { FC } from 'react'

import { NewPost } from '@/components'

import './App.css'

export const App: FC = () => {
	return (
		<div className='container'>
			<NewPost />
		</div>
	)
}
