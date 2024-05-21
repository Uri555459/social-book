import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { App } from '@/components'

import { store } from '@/store'

import './index.css'

import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		<ToastContainer
			theme='dark'
			draggable={false}
		/>
	</React.StrictMode>
)
