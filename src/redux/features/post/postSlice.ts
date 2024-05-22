import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import type { IPost, IPostsData } from '@/@types/post.interface'

import { fetchPostsData } from './asyncActions'

// Define a type for the slice state
interface IPostState extends IPostsData {}

// Define the initial state using that type
const initialState: IPostState = {
	posts: [],
	message: ''
}

export const counterSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<IPost>) => {
			state.posts.push(action.payload)
		}
	},
	extraReducers: builder => {
		// builder.addCase(fetchPostsData.pending, (state, action) => {
		// 	toast.loading('Идёт загрузки постов!')
		// })

		builder.addCase(
			fetchPostsData.fulfilled,
			(state, action: PayloadAction<IPostsData>) => {
				state.posts = action.payload.posts
				state.message = action.payload.message
			}
		)

		builder.addCase(fetchPostsData.rejected, () => {
			toast.error('Ошибка загрузки постов!')
		})
	}
})

export const { add } = counterSlice.actions

export const postsReducer = counterSlice.reducer
