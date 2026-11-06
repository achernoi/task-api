import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTaskCompleteParam, validateTask } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateTaskCompleteParam, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
