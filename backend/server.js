const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const leadsRoute = require('./routes/leads');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

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