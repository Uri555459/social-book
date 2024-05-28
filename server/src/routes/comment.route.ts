import { Router } from 'express'

import { commentController } from '../controllers/comment.controller'

export const commentRouter = Router()

commentRouter.get('/', commentController.getAll)
commentRouter.post('/', commentController.create)
// commentRouter.get('/:id', commentController.getOne)
commentRouter.put('/:id', commentController.update)
commentRouter.delete('/:id', commentController.delete)
