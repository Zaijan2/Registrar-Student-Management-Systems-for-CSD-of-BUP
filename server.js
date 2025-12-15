require('dotenv').config(); // must be first

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/residents', require('./routes/residents'));
app.use('/api/requests', require('./routes/requests'));
app.use('/api/certificates', require('./routes/certificates'));
app.use('/api/announcements', require('./routes/announcements'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port', PORT));
