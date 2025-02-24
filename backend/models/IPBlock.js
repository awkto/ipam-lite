const mongoose = require('mongoose');

const IPBlockSchema = new mongoose.Schema({
  cidr: { type: String, required: true },
  subnets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subnet' }]
});

module.exports = mongoose.model('IPBlock', IPBlockSchema);
