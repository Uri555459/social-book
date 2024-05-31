import type { Request, Response } from 'express'
import { CommentModel } from '../models/comment.model'
import type { IComment } from '../@types/IComment.interface'
import { PostModel } from '../models/post.model'
import type { IPost } from '../@types/IPost.interface'

class CommentController {
	async getAll(req: Request, res: Response) {
		try {
			const comments: IComment[] = await CommentModel.find()

			if (!comments.length) {
				res.status(200).json({ message: 'Список комментариев пуст' })
			}
			res.status(200).json({ comments, message: 'Список комментариев получен' })
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Ошибка при получении всех комментариев' })
			console.log(error)
		}
	}

	async create(req: Request, res: Response) {
		try {
			const { text } = req.body
			const { postId } = req.params

			const comment = new CommentModel({
				text
			})

			await PostModel.updateOne(
				{ _id: postId },
				{ $push: { commentIds: comment._id } }
			)

			await comment.save()

			res.status(201).json({ comment, message: 'Комментарий успешно создан' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при создании комментария' })
			console.log(error, 'Ошибка при создании комментария'.white.bgRed.bold)
		}
	}

	async getOne(req: Request, res: Response) {
		try {
			const { id } = req.params
			const post = (await CommentModel.findById(id)) as IPost | null
			console.log(JSON.stringify(post).white.bgGreen.bold)

			if (post === null) {
				return res
					.status(404)
					.json({ message: 'Комментарий с таким ID не найден' })
			}
			res.status(200).json({ post, message: 'Комментарий успешно получен' })
		} catch (error) {
			res
				.status(500)
				.json({ message: 'Ошибка при получении комментария по ID' })
			console.log(
				error,
				'Ошибка при получении комментария по ID'.white.bgRed.bold
			)
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { id, postId } = req.params
			const comment: IComment | null = await CommentModel.findByIdAndDelete(id)

			if (comment === null) {
				return res.status(404).json({
					message: 'Такого комментария не существует'
				})
			}

			try {
				const post: IPost | null = await PostModel.findById({ _id: postId })

				if (post === null) {
					return res.status(404).json({
						message: 'Такого поста не существует'
					})
				}

				const commentIdsNew = post.commentIds.filter(id => id != comment._id)
				console.log(commentIdsNew)

				await PostModel.findByIdAndUpdate(
					postId,
					{ commentIds: commentIdsNew },
					{ new: true }
				)
			} catch (error) {
				res.status(500).json({
					message: 'Ошибка при удалении ID комментария из массива поста'
				})
				console.log(
					error,
					'Ошибка при удалении ID комментария из массива поста'.white.bgRed.bold
				)
			}

			res.status(200).json({ message: 'Комментарий удален' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при удалении комментария' })
			console.log(error, 'Ошибка при удалении комментария'.white.bgRed.bold)
		}
	}
}

export const commentController = new CommentController()
