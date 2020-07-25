/** @format */

import multer from 'multer';
import path from 'path';

//Set storage Engine
const storage = multer.diskStorage({
	destination: './public/images/',
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
	},
});

// Init Upload
const uploadImage = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
}).single('photo');

export default uploadImage;