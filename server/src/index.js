import express, { Router } from 'express'
import { getPosts, makePost } from './controllers/post.controller'

const app = express()

const router = Router()

router.get('/', getPosts)
router.post('/', makePost)

app.use('/posts', router)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`🍕🚀🎈 Server running on http://localhost:${PORT}/`)
})
