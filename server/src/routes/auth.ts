import express from 'express';
import { Request, Response } from 'express';
import { signupUser, loginUser } from '../controllers/auth';

const router = express.Router();

router.get('/', (req:Request, res: Response) => {
	console.log(req.body);
	return res.status(201).send({
		username: "user.username",
	});
});
router.post('/signup', signupUser);
router.post('/login', loginUser);

export default router;
