import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store/store'

import type { IMessage, IPost } from '@/@types/post.interface'

export const fetchPosts = createAsyncThunk<IPost>(
	'posts/fetchPosts',
	async (_, { rejectWithValue }) => {
		const response = await fetch(`http://localhost:3001/api/posts`)
		const data = await response.json()
		if (response.status < 200 || response.status >= 300) {
			return rejectWithValue(data)
		}
		return data
	}
)

// Define a type for the slice state
interface IPostState {
	message: IMessage
	posts: IPost[]
}

// Define the initial state using that type
const initialState: IPostState = {
	message: '',
	posts: [{ _id: '', text: '' }]
}

export const counterSlice = createSlice({
	name: 'posts',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// add: (state, action: PayloadAction<IPost>) => {
		// 	state = action.payload
		// 	console.log(action.payload)
		// }
	},
	extraReducers: builder => {
		// builder.addCase(fetchPosts.pending, (state, action) => {})

		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = action.payload
			state.message = action.payload.message
			// console.log(action.payload)
		})

		// builder.addCase(fetchPosts.rejected, (state, action) => {})
	}
})

// export const { add } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts

export const postsReducer = counterSlice.reducer
