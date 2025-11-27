const serverless = require('serverless-http');
const app = require('../app');
const connectDB = require('../config/database');

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  await connectDB();
  return await handler(event, context);
};
