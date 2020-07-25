/** @format */

const config = {
	port: process.env.PORT || 5000,
	mongoUri:
		'mongodb+srv://event:changedPass@eventmanagement.utzmd.mongodb.net/EventManagementter?retryWrites=true&w=majority',
	mongoOPT: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	JwtSecret: 'hELLO_I_aM_tHE_tOKEN',
};

export default config;
