/** @format */

import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';
import eventCtrl from '../controller/eventController';
import userCtrl from '../controller/userController';

const router = Router();
const { createEvent, eventList, eventByID, readEvent, joinEvent, leaveEvent } = eventCtrl;
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
  @ to get all the events
  @ Public route
  @ GET Route
*/
router.get('/event/list', authMiddleware, eventList);

/*
  @ user Event Route
  @ private Route
  @ GET Route
*/
router.get('/event/:eventId', authMiddleware, readEvent);

/*
  @ User can join event
  @ PUT Route
  @ Private
*/
router.put('/event/join', authMiddleware, joinEvent);

/*
  @ user can leave event
  @ PUT Route
  @ Private
*/
router.put('/event/leave', authMiddleware, leaveEvent);
/*
   @ Params route to get the user profile
   @ Params route to get eventId
*/
router.param('userId', userByID);
router.param('eventId', eventByID);

export default router;
