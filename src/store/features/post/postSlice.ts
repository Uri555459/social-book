import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/store/store'

import { IPost } from '@/@types/post.interface'

// Define a type for the slice state
interface IPostState extends IPost {}

// Define the initial state using that type
const initialState: IPostState = {
	title: '',
	id: null
}

export const counterSlice = createSlice({
	name: 'posts',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		add: (state, action: PayloadAction<IPost>) => {
			state = action.payload
		}
	}
})

export const { add } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.posts

export const postsReducer = counterSlice.reducer
