
import config from '../config/default'
import { connect } from 'mongoose';

const {mongoOPT,mongoUri} = config

export default async () => {
  try {
    await connect(mongoUri, mongoOPT);
    console.log(`Database is connected to application ... 🚀 🚀 🚀`);
  } catch (err) {
    console.log('MongoConnection -> :>> ', err);
  }
}