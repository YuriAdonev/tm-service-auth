export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/auth',
  port: process.env.PORT || 5050
}