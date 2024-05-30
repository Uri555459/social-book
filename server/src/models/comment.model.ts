import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
	{
		text: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

export const CommentModel = mongoose.model('Comments', Comment)
