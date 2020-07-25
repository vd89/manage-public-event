/** @format */

import { Router } from 'express';
import userCtrl from '../controller/userController';
import { registerRules, validate } from '../helper/validation';

const router = Router();
const { createUser } = userCtrl;

//Test Route
router.get('/api/users', (req, res) => {
	return res.json({ msg: 'This is the rest route from user' });
});

/*
  @ POST route
  @ signup user will create user
  @ Public Route
*/
router.post('/api/users', registerRules(), validate, createUser);

export default router;
