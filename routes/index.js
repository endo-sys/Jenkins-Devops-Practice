const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to My WebApp' });
});

module.exports = router; // ✅ this line is critical
