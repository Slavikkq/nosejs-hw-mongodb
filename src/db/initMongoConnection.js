import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';

export const initMongoConnection = async () => {
  const connectionLink = `mongodb+srv://yaroslavmanuljak:<password>@cluster0.rnu1gqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";`

  try {
    await mongoose.connect(connectionLink);
    console.log('Successfully established database connection!');
  } catch (error) {
    console.log(error);
    throw error;
  }
};