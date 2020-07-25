/** @format */

import { body, validationResult } from 'express-validator';

const registerRules = () => {
	return [
		body('email', 'Valid Email is required').isEmail(),
		body('password', 'Minimum 6 characters are required').isLength({ min: 6 }),
	];
};

const loginRules = () => {
	return [
		body('email', 'Valid Email is required').isEmail(),
		body('password', 'Minimum 6 characters are required').not().isEmpty(),
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map((err) =>
		extractedErrors.push({
			[err.param]: err.msg,
		})
	);
	return res.json({
		errors: extractedErrors,
	});
};
export { registerRules, loginRules, validate };
