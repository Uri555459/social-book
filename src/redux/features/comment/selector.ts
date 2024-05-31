import type { RootState } from '@/redux/store'

export const selectComments = (state: RootState) => state.posts.posts
export const selectMessage = (state: RootState) => state.posts.message
