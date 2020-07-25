/** @format */

import User from '../model/User';
import { sign } from 'jsonwebtoken';
import config from '../config/default';

const signin = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(401).json({ errMsg: 'User not found' });
		}
		if (!user.comparePassword(req.body.password)) {
			return res.status(401).json({ errMsg: "Email and password don't match" });
		}
		const paylod = {
			_id: user._id,
		};
		const token = sign(paylod, config.JwtSecret, { expiresIn: 9999 });
		return res.status(200).json(token);
	} catch (err) {
		console.log(err);
		return res.status(400).json({ errMsg: 'Could not sign in' });
	}
};

export default { signin };
