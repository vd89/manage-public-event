/** @format */

import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import eventCtrl from '../controller/eventController';
import userCtrl from '../controller/userController';

const router = Router();
const { createEvent } = eventCtrl;
const { userByID } = userCtrl;

//Test Route
router.get('/event', authMiddleware, (req, res) => {
	res.status(200).json({ msg: 'This is authorized route to create event' });
});

/*
  @ create Event
  @ POST Route
  @ Private
*/
router.post('/event/new/:userId', authMiddleware, createEvent);

/*
  @ Params route to get the user profile
*/
router.param('userId', userByID);
export default router;
