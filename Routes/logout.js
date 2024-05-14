const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const admin = require("../models/Admin");
const bcrypt = require('bcrypt');

router.post('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
