/** @format */

import Event from '../model/Event';

const createEvent = async (req, res) => {
	try {
		const newEvent = new Event(req.body);
		newEvent.createdBy = req.profile;
		const resp = await newEvent.save();
		return res.status(200).json(resp);
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'There is some error from server' });
	}
};

export default { createEvent };
