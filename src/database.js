import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/api-design-dev';
export const connect = (url = dbUrl, options = {}) => {
  return mongoose.connect(
    url,
    { ...options, useNewUrlParser: true }
  );
};
