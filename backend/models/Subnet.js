const mongoose = require('mongoose');

const SubnetSchema = new mongoose.Schema({
  cidr: { type: String, required: true },
  ips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'IPAddress' }]
});

module.exports = mongoose.model('Subnet', SubnetSchema);
