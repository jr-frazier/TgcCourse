import express from 'express';
import { addUser, getUserById } from '../controllers/user';

const router = express.Router();

router.post('/add', addUser)
router.get('/get/:id', getUserById)

module.exports = router;