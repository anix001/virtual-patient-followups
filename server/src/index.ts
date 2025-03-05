import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import { config, Logger } from './utils/index.js'
import { corsOptions, errorHandler } from './middleware/index.js'
import appRoutes from './routes/index.js'
import DbConnection from './db/dbConnection.js'

const app: Express = express()
const port = config.port

// [DB Connection]
DbConnection();

//[for json parse]
app.use(express.json())
//[for cors]
app.use(cors(corsOptions))
//[for logging API Request]
app.use((req: Request, res: Response, next: NextFunction) => {
    Logger.info(`Incoming Request: ${req.method} ${req.url}`)
    next()
})

//routes
app.use('/api', appRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Boilerplate')
})

//[error middleware]
app.use(errorHandler)

app.listen(port, () => {
    Logger.info(`Server is running on port ${port}!!`)
    console.log(`[server]: Server is running on port ${port}!!`)
})
