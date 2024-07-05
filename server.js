import express from 'express'
import { DBconnection } from './databases/dbConnection.js'
import { homeRouter } from './src/home.routes.js'
import cors from 'cors'
const app = express()
const port =  3000


app.use(cors())
app.use(express.static('public'))
app.use(homeRouter)

DBconnection()
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))