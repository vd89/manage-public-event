/** @format */

import { Router } from 'express';
import userCtrl from '../controller/userController';
import { registerRules, validate } from '../helper/validation';
import uploadImage from '../helper/uploadImage';

const router = Router();
const { createUser, userByID, read, update, list, removeUser } = userCtrl;

// //Test Route
// router.get('/api/users', (req, res) => {
// 	return res.json({ msg: 'This is the rest route from user' });
// });

/*
  @ GET all the users
  @ POST route
  @ signup user will create user
  @ Public Route
*/
router.route('/api/users').get(list).post(registerRules(), validate, createUser);

/*
  @ GET the user
  @ PUT to edit the user
  @ DELET the user
*/
router.route('/api/users/:userId').get(read).put(uploadImage, update).delete(removeUser);
/*
  @ user Params
  @ get params
*/
router.param('userId', userByID);
export default router;
