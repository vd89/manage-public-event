/** @format */

import User from '../model/User';

const createUser = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(500).json({ errMsg: `${email} is registered so Please login` });
		}
		const newUser = new User(req.body);
		await newUser.save();
		return res.status(200).json({ msg: 'The user is register you can login' });
	} catch (err) {
		console.log('err :>> ', err);
		return res.status(400).json({ errMsg: 'Registration failed from server' });
	}
};

const list = async (req, res) => {
	try {
		const users = await User.find().select('email name');
		return res.status(200).json(users);
	} catch (err) {
		console.log(err);
		return res.status(400).json({ errMsg: 'Failed to send the list request' });
	}
};

/*
	To get the user and append req
*/
const userByID = async (req, res, next, id) => {
	try {
		const user = await User.findById(id);
		if (!user) {
			return res.status(400).json({ errMsg: 'User is not found' });
		}
		req.profile = user;
		next();
	} catch (err) {
		console.log(err);
		return res.status(400).json({ errMsg: 'Could not find user' });
	}
};

const read = (req, res) => {
	req.profile.hashPassword = undefined;
	return res.status(200).json(req.profile);
};

const update = async (req, res) => {
	try {
		const photo = req.file.filename;
		console.log(photo);
		const { firstName, lastName, gender, dateOfBirth } = req.body;
		const user = await User.findByIdAndUpdate(
			{ _id: req.profile._id },
			{ firstName, lastName, gender, dateOfBirth, photo }
		);
		await user.save();
		return res.status(200).json({ msg: 'The user profile updated successfully..' });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ errMsg: 'Error from server ' });
	}
};

const removeUser = async (req, res) => {
	try {
		const user = req.profile;
		const deletedUser = await user.remove();
		deletedUser.hashedPasswor = undefined;
		return res.status(200).json(deletedUser);
	} catch (err) {
		console.log(err);
		return res.status(400).json({ errMsg: 'Error from server ' });
	}
};
export default { createUser, userByID, read, update, list, removeUser };
