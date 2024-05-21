import 'dotenv/config'
import 'colors'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import { postRouter } from './routes/post.route'

const server = express()

if (process.env.NODE_ENV !== 'development') {
	server.use(morgan('dev'))
}

server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api/posts', postRouter)

const start = async () => {
	try {
		await mongoose
			.connect('mongodb://localhost:27017/social-book')
			.then(() => console.log('Database Connected!'))

		server.listen(process.env.PORT, () =>
			console.log(`Server running on http://localhost:${process.env.PORT}`)
		)
	} catch (e) {
		console.log(e)
	}
}

start()
