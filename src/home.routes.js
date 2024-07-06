import express from 'express'
import { contactUsControler, homeControler } from './home.controler.js'

const homeRouter = express.Router()

homeRouter.get('/',homeControler)
homeRouter.get('/contact',contactUsControler)

export {
    homeRouter
}