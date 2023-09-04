// @ts-check

// require('dotenv').config()

const app = require('./app')
const PORT = 8080
// const { PORT } = require('./common')
// const mongo = require('./mongo');
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
}) 
// mongo.connectToDatabase()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`App listening at http://localhost:${PORT}`);
//     }) 
//   })
//   .catch(error => {
//     console.error('Failed to connect to MongoDB:', error);
//     throw error;
//   });

