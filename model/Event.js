/** @format */

import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
	{
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		title: {
			type: String,
			required: true,
			maxlength: 180,
		},
		description: {
			type: String,
			maxlength: 1000,
		},
		eventDate: {
			type: Date,
		},
		place: {
			type: String,
			required: true,
		},
		participants: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],

		maxParticipants: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

export default model('Event', EventSchema, 'events');
