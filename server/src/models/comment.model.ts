import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Comment = new Schema(
	{
		author: {
			type: ObjectId,
			ref: 'posts'
		},
		text: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

export const CommentModel = mongoose.model('comments', Comment)
