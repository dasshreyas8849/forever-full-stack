import express from 'express'
import { placeOrder, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// COD Order Placement
orderRouter.post('/place', authUser, placeOrder)

// User Orders
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter
