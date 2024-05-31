import { createAsyncThunk } from '@reduxjs/toolkit'

import { IComment } from '@/@types/post.interface'

export const fetchCommentsData = createAsyncThunk<IComment[]>(
	'comments/fetchComments',
	async (_, { rejectWithValue }) => {
		const response = await fetch(`${import.meta.env.VITE_HOST_NAME}/comments`)
		const data = await response.json()
		if (response.status < 200 || response.status >= 300) {
			return rejectWithValue(data)
		}
		return data
	}
)
