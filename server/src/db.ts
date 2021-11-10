import 'reflect-metadata';
import { createConnection } from 'typeorm';

export const connectToDB = async () => {
  try {
    await createConnection();
    console.log('MySQL connected!');
  } catch (error) {
    console.log(error);
  }
};
