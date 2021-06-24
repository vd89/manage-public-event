/** @format */

const config = {
	port: process.env.PORT || 5000,
	mongoUri: process.env.MONGO_URL || ',
	mongoOPT: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	JwtSecret: process.env.JWT_SECRET || '',
};

export default config;
