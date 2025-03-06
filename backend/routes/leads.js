const express = require('express');
const Lead = require('../models/Lead');

const router = express.Router();

// Get all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.findAll();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// Add a new lead
router.post('/', async (req, res) => {
  try {
    const { name, email, status } = req.body;
    const newLead = await Lead.create({ name, email, status });
    res.json(newLead);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add lead' });
  }
});

module.exports = router;