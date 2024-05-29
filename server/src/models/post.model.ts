import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema(
	{
		commentIds: [
			{
				type: String,
				required: true,
				default: []
			}
		],
		text: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
)

export const PostModel = mongoose.model('posts', Post)
