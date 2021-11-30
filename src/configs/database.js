import { connect } from 'mongoose';

const initDBConnection = () => {
  try {
    connect(process.env.MONGODB_URL);
    console.log('Sucessfully connected to database');
  } catch (error) {
    next(error);
  }
};

export default initDBConnection;
