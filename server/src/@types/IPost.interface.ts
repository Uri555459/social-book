import mongoose from 'mongoose'

export interface IPost {
	_id: string
	author: mongoose.Types.ObjectId
	text: string
	createdAt: Date
	updatedAt: Date
}
