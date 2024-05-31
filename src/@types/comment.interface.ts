export interface ICommentsData {
	comments: IComment[]
	message: string
}

export interface IComment {
	_id: string
	text: string
	createdAt: string
	updatedAt: string
	__v: number
}
