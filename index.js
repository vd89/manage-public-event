import express from 'express';
import dbController from './controller/dbController';
import config from './config/default'


const {port} =config
const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Database connection
dbController()

//Server
app.listen(port,(err) => {
  if (err) {
    console.log('server err:>> ', err);
  }
  console.log(`Server is running on port ${port}..... 🌵 🌵 🌵 `);
}
)