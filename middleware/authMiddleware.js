/** @format */

import config from '../config/default';
import { verify } from 'jsonwebtoken';

export default async function authMiddleware(req, res, next) {
	const token = req.header('Authorization');
	if (!token) {
		return res.status(401).json({ errMsg: 'You are not regiserted user' });
	}
	try {
		const decode = await verify(token, config.JwtSecret);
		req.user = decode;
		next();
	} catch (err) {
		console.log(err);
		return res.status(500).json({ errMsg: 'Token is not valid and login again' });
	}
}
