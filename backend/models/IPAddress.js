const mongoose = require('mongoose');

const IPAddressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  state: { type: String, enum: ['Free', 'Static', 'Reserved'], default: 'Free' }
});

module.exports = mongoose.model('IPAddress', IPAddressSchema);
