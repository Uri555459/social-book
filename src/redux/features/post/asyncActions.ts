import { createAsyncThunk } from '@reduxjs/toolkit'

import type { IPostsData } from '@/@types/post.interface'

export const fetchPostsData = createAsyncThunk<IPostsData>(
	'posts/fetchPosts',
	async (_, { rejectWithValue }) => {
		const response = await fetch(`${import.meta.env.VITE_HOST_NAME}/posts`)
		const data = await response.json()
		if (response.status < 200 || response.status >= 300) {
			return rejectWithValue(data)
		}
		return data
	}
)
