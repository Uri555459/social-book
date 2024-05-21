import type { Request, Response } from 'express'

class CommentController {
	async getAll(req: Request, res: Response) {}

	async create(req: Request, res: Response) {}

	async getOne(req: Request, res: Response) {}

	async update(req: Request, res: Response) {}

	async delete(req: Request, res: Response) {}
}

export const commentController = new CommentController()
