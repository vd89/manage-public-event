/** @format */

import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import config from './config/default';
import dbController from './controller/dbController';
import userRoute from './route/userRoute';
import authRoute from './route/authRoute';
import eventRoute from './route/eventRoute';

const { port } = config;
const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Database connection
dbController();

// Swagger options
const swaggerDocs = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Router
app.use('/api', userRoute);
app.use('/auth', authRoute);
app.use('/api', eventRoute);

//Server
app.listen(port, (err) => {
	if (err) console.log('server err:>> ', err);
	console.log(`Server is running on port ${port}..... 🌵 🌵 🌵 `);
});
