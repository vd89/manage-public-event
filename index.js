/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import config from './config/default';
import dbController from './controller/dbController';
import userRoute from './route/userRoute';
import authRoute from './route/authRoute';

const { port } = config;
const app = express();

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Database connection
dbController();

//Router
app.use('/api', userRoute);
app.use('/auth', authRoute);

//Server
app.listen(port, (err) => {
	if (err) {
		console.log('server err:>> ', err);
	}
	console.log(`Server is running on port ${port}..... 🌵 🌵 🌵 `);
});
