
const Lead = require('../models/Lead');

exports.addLead = async (req, res) => {
  try {
    const { name, email, status } = req.body;
    const newLead = new Lead({ name, email, status });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};