import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Comment = new Schema(
	{
		author: {
			type: ObjectId
		},
		text: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

export const PostModel = mongoose.model('comments', Comment)
