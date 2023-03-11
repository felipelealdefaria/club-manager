import dotenv from 'dotenv'
import express, { Express } from 'express'
import cors from '@server/middleware/cors'

dotenv.config();
const PORT = process.env.PORT
const app: Express = express()

app.use(cors)
const server = app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })

process.on('SIGTERM', () => {
  server.close(() => { console.log('Process terminated') })
})
