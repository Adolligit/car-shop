import 'dotenv/config';
import app from './app';
import connectToDatabase from './connection/connect';

const PORT = process.env.API_PORT;

connectToDatabase()
  .then(() => app.listen(PORT, () => console.log(`Running server on port: ${PORT}`)))
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
