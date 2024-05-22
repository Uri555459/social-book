import type { Request, Response } from 'express'
import { PostModel } from '../models/post.model'
import type { IPost } from '../@types/IPost.interface'

class PostController {
	async getAll(req: Request, res: Response) {
		try {
			const posts: IPost[] = await PostModel.find()

			if (!posts.length) {
				res.status(200).json({ message: 'Список постов пуст' })
			}
			res.status(200).json({ posts, message: 'Список постов получен' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при получении всех постов' })
			console.log(error)
		}
	}

	async getOne(req: Request, res: Response) {
		try {
			const { id } = req.params
			const post = await PostModel.findById(id)
			if (!post) {
				res.status(404).json({ message: 'Пост с таким ID не найдена' })
			}
			res.status(200).json({ post, message: 'Пост успешно получен' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при получении поста по ID' })
			console.log(error, 'Ошибка при получении поста по ID'.white.bgRed.bold)
		}
	}

	async create(req: Request, res: Response) {
		try {
			const { text }: IPost = req.body

			const post = new PostModel({ text })

			await post.save()

			res.status(201).json({ post, message: 'Пост успешно создан' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при создании поста' })
			console.log(error, 'Ошибка при создании поста'.white.bgRed.bold)
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { id } = req.params
			const { text }: IPost = req.body
			const post = await PostModel.findByIdAndUpdate(
				id,
				{ text },
				{ new: true }
			)

			if (!post) {
				res.status(404).json({ message: 'Ошибка обновления поста' })
			}
			res.status(200).json({ post, message: 'Пост обновлен' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при обновлении поста' })
			console.log(error, 'Ошибка при обновлении поста'.white.bgRed.bold)
		}
	}
	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params
			await PostModel.findByIdAndDelete(id)

			res.status(200).json({ message: 'Пост удален' })
		} catch (error) {
			res.status(500).json({ message: 'Ошибка при удалении поста' })
			console.log(error, 'Ошибка при удалении поста'.white.bgRed.bold)
		}
	}
}

export const postController = new PostController()
