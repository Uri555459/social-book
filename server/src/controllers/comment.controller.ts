import type { Request, Response } from 'express'
import { CommentModel } from '../models/comment.model'
import { IComponent } from '../@types/IComment.interface'

class CommentController {
	async getAll(req: Request, res: Response) {
		try {
			const comments: IComponent[] = await CommentModel.find()

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
			const { text }: IComponent = req.body

			const post = new CommentModel({ text })

			await post.save()

			res.status(201).json({ post, message: 'Комментарий успешно создан' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при создании комментария' })
			console.log(error, 'Ошибка при создании комментария'.white.bgRed.bold)
		}
	}

	// async getOne(req: Request, res: Response) {
	// 	try {
	// 		const { id } = req.params
	// 		const post = await CommentModel.findById(id)
	// 		if (!post) {
	// 			res.status(404).json({ message: 'Пост с таким ID не найдена' })
	// 		}
	// 		res.status(200).json({ post, message: 'Пост успешно получен' })
	// 	} catch (error) {
	// 		res.status(500).json({ message: 'Ошибка при получении поста по ID' })
	// 		console.log(error, 'Ошибка при получении поста по ID'.white.bgRed.bold)
	// 	}
	// }

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params
			const { text }: IComponent = req.body
			const post = await CommentModel.findByIdAndUpdate(
				id,
				{ text },
				{ new: true }
			)

			if (!post) {
				res.status(404).json({ message: 'Ошибка обновления комментария' })
			}
			res.status(200).json({ post, message: 'Комментарий обновлен' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при обновлении комментария' })
			console.log(error, 'Ошибка при обновлении комментария'.white.bgRed.bold)
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params
			await CommentModel.findByIdAndDelete(id)

			res.status(200).json({ message: 'Комментарий удален' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при удалении комментария' })
			console.log(error, 'Ошибка при удалении комментария'.white.bgRed.bold)
		}
	}
}

export const commentController = new CommentController()
