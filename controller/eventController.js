/** @format */

import Event from '../model/Event';
import User from '../model/User';

const createEvent = async (req, res) => {
	try {
		if (new Date(req.body.eventDate) > new Date(Date.now())) {
			const newEvent = new Event(req.body);
			newEvent.createdBy = req.profile;
			const user = await User.findByIdAndUpdate(req.profile._id, {
				$push: { events: newEvent._id },
			});
			const resp = await newEvent.save();
			return res.status(200).json({ msg: 'Your event is been created' });
		} else {
			return res.status(401).json({ errMsg: 'Please provide the feature date not the past' });
		}
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'There is some error from server' });
	}
};

const eventList = async (req, res) => {
	try {
		const events = await Event.find()
			.populate('createdBy', 'firstName email')
			.populate('participants', 'firstName email')
			.exec();
		return res.status(200).json({ events: events });
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'There is some error from server' });
	}
};

const eventByID = async (req, res, next, id) => {
	try {
		let event = await Event.findById(id)
			.populate('createdBy', '_id firstName')
			.populate('participants', '_id firstName email')
			.exec();
		if (!event) {
			return res.status(400).json({ errMsg: 'Event Not found' });
		}
		req.event = event;
		next();
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'There is some error from server' });
	}
};

const readEvent = async (req, res) => {
	try {
		const event = await Event.findById(req.event._id)
			.populate('createdBy', '_id firstName email')
			.populate('participants', '_id firstName email')
			.exec();
		return res.status(200).json({ event });
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'There is some error from server' });
	}
};

const joinEvent = async (req, res) => {
	try {
		const event = await Event.findById(req.body.eventId);
		console.log(event);
		if (event.participants.length <= event.maxParticipants - 1) {
			const user = await User.findByIdAndUpdate(req.body.userId, {
				$push: { events: req.body.eventId },
			});
			const result = await Event.findByIdAndUpdate(
				req.body.eventId,
				{ $push: { participants: req.body.userId } },
				{ new: true }
			);
			return res.status(200).json({ msg: 'You are going to the event' });
		}
		return res.status(401).json({ errMsg: 'Event is full' });
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'There is some error from server' });
	}
};

const leaveEvent = async (req, res) => {
	try {
		const event = await Event.findByIdAndUpdate(req.body.eventId, {
			$pull: { participants: req.body.userId },
		});
		const user = await User.findByIdAndUpdate(req.body.userId, {
			$pull: { events: req.body.eventId },
		});
		return res.status(200).json({ msg: 'You have left the event successfully ' });
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'There is some error from server' });
	}
};
export default { createEvent, eventList, eventByID, readEvent, joinEvent, leaveEvent };
