import { Router } from 'express'

import { postController } from '../controllers/post.controller'

export const postRouter = Router()

postRouter.get('/', postController.getAll)
postRouter.post('/', postController.create)
postRouter.get('/:id', postController.getOne)
postRouter.put('/:id', postController.update)
postRouter.delete('/:id', postController.delete)
