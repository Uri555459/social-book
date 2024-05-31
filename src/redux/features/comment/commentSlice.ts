import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import type { ICommentsData } from '@/@types/comment.interface'

import { fetchCommentsData } from './asyncActions'

// Define a type for the slice state
interface ICommentState extends ICommentsData {}

// Define the initial state using that type
const initialState: ICommentState = {
	comments: [],
	message: ''
}

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {
		// add: (state, action: PayloadAction<IComment>) => {
		// 	state.comments = action.payload
		// }
	},
	extraReducers: builder => {
		// builder.addCase(fetchPostsData.pending, (state, action) => {
		// 	toast.loading('Идёт загрузки постов!')
		// })

		builder.addCase(fetchCommentsData.fulfilled, (state, action) => {
			state.comments = action.payload.comments
			state.message = action.payload.message
		})

		// builder.addCase(
		// 	fetchCommentsData.fulfilled,
		// 	(state, action: PayloadAction<IComment[]>) => {
		// 		// 		state.comments = action.payload.comments
		// 		// 		state.message = action.payload.message
		// 	}
		// )

		builder.addCase(fetchCommentsData.rejected, () => {
			toast.error('Ошибка загрузки постов!')
		})
	}
})

// export const { add } = commentSlice.actions

export const commentsReducer = commentSlice.reducer
