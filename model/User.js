/** @format */

import { Schema, model } from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';

const UserSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	hashPassword: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	dateOfBirth: {
		type: Date,
	},
	gender: {
		type: String,
	},
	photo: {
		data: Buffer,
		contentType: String,
	},
});

//Virtualize password
UserSchema.virtual('password')
	.set(function (password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hashPassword = this.hashingPass(password, this.salt);
	})
	.get(function () {
		return this._password;
	});

//Method for virtual
UserSchema.methods = {
	makeSalt: function () {
		return genSaltSync(10);
	},
	hashingPass: function (password, salt) {
		if (!password) return '';
		try {
			return hashSync(password, salt);
		} catch (err) {
			return '';
		}
	},
	comparePassword: function (password) {
		return compareSync(password, this.hashPassword);
	},
};

export default model('User', UserSchema, 'users');
