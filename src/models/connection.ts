import mongoose from 'mongoose';
import 'dotenv/config';

const HOST = process.env.MDB_HOST;
const PORT = process.env.MDB_PORT;
const NAME = process.env.MDB_NAME;

const MDB_LOCAL = `mongodb://${HOST}:${PORT}/${NAME}`;

const connectToDatabase = (
  mongoDatabaseURI = process.env.MDB_URI
    || MDB_LOCAL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
