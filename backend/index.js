const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const leadsRoute = require('./routes/leads');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Simple Lead Manager API');
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Unable to sync database:', err);
});

app.use('/leads', leadsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});