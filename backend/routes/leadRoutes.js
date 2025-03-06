const express = require('express');
const { addLead, getLeads } = require('../controllers/leadController');

const router = express.Router();

router.post('/', addLead);
router.get('/', getLeads);

module.exports = router;