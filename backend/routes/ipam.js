const express = require('express');
const router = express.Router();
const IPBlock = require('../models/IPBlock');
const Subnet = require('../models/Subnet');
const IPAddress = require('../models/IPAddress');

// Create a new IP block
router.post('/ipblocks', async (req, res) => {
  const ipBlock = new IPBlock(req.body);
  await ipBlock.save();
  res.status(201).send(ipBlock);
});

// Create a new subnet
router.post('/subnets', async (req, res) => {
  const subnet = new Subnet(req.body);
  await subnet.save();
  res.status(201).send(subnet);
});

// Create a new IP address
router.post('/ips', async (req, res) => {
  const ipAddress = new IPAddress(req.body);
  await ipAddress.save();
  res.status(201).send(ipAddress);
});

// Get all IP blocks
router.get('/ipblocks', async (req, res) => {
  const ipBlocks = await IPBlock.find().populate('subnets');
  res.send(ipBlocks);
});

// Get all subnets
router.get('/subnets', async (req, res) => {
  const subnets = await Subnet.find().populate('ips');
  res.send(subnets);
});

// Get all IP addresses
router.get('/ips', async (req, res) => {
  const ips = await IPAddress.find();
  res.send(ips);
});

module.exports = router;
