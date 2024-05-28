import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Post = new Schema(
	{
		author: {
			type: ObjectId,
			ref: 'comments'
		},
		text: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

export const PostModel = mongoose.model('posts', Post)
