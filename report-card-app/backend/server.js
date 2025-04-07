const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/reportCardApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/students', studentRoutes);

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);
