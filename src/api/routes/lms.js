const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'LMS entity endpoint' });
});

module.exports = router;
