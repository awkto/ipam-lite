const express = require('express');
const mongoose = require('mongoose');
const ipamRoutes = require('./routes/ipam');

const app = express();
app.use(express.json());
app.use('/api', ipamRoutes);

mongoose.connect('mongodb://localhost:27017/ipam', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
