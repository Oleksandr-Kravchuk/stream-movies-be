module.exports = {
  PORT: process.env.PORT || 8080,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  DB_URL: process.env.DB_URL || 'mongodb+srv://testUser:testUser1@cluster0.6z3ld.mongodb.net/stream-movies?retryWrites=true&w=majority',
};
