import mongoose from 'mongoose';

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONFO_URI);
    console.log('connected by sharif');
    return conn;
  } catch (err) {
    console.log(err);
  }
}
