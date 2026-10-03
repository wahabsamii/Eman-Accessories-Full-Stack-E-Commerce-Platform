import express from 'express';
import { getAllOrders, getUserOrder, updateStatus } from '../controllers/orderController.js';

const router = express.Router();
router.get('/all', getAllOrders);
router.get('/:id', getUserOrder);
router.post('/status', updateStatus);

export default router;
