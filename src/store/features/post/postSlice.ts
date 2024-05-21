import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store/store'

import type { IData, IPost } from '@/@types/post.interface'

export const fetchPosts = createAsyncThunk<IData>(
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
interface IPostState extends IData {}

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
		// builder.addCase(fetchPosts.pending, (state, action) => {})

		builder.addCase(
			fetchPosts.fulfilled,
			(state, action: PayloadAction<IData>) => {
				state.posts = action.payload.posts
				state.message = action.payload.message
			}
		)

		// builder.addCase(fetchPosts.rejected, (state, action) => {})
	}
})

export const { add } = counterSlice.actions

export const selectPosts = (state: RootState) => state.posts.posts
export const selectMessage = (state: RootState) => state.posts.message

export const postsReducer = counterSlice.reducer
