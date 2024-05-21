export interface IData {
	posts: IPost[]
	message: string
}

export interface IPost {
	_id: string
	text: string
	__v?: number
}

export interface IComment {
	_id: string
	text: string
}
