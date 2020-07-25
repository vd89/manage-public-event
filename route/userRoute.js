/** @format */

import { Router } from 'express';
import userCtrl from '../controller/userController';
import { registerRules, validate } from '../helper/validation';
import uploadImage from '../helper/uploadImage';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();
const { createUser, userByID, read, update, list, removeUser } = userCtrl;

// //Test Route
// router.get('/api/users', (req, res) => {
// 	return res.json({ msg: 'This is the rest route from user' });
// });

/*
  @ GET all the users
  @ Public Route
*/
router.route('/users').get(list);
/*
  @ Signup route
  @ POST
  @ Public
*/
router.post('/users/signup', registerRules(), validate, createUser);

/*
  @ GET the user
  @ PUT to edit the user
  @ DELET the user
*/
router
	.route('/users/:userId')
	.get(authMiddleware, read)
	.put(authMiddleware, uploadImage, update)
	.delete(authMiddleware, removeUser);
/*
  @ user Params
  @ get params
*/
router.param('userId', userByID);

export default router;
