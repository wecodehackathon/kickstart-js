const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    mongooseDebug: true,
    mongoUri: 'mongodb://localhost/gardens',
    port: 5001
  },
  production: {
    mongooseDebug: false,
    mongoUri: process.env.MONGODB_URI,
    port: process.env.PORT
  }
}

module.exports = config[env];
