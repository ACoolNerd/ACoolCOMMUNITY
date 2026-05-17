const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Marketplace entity endpoint' });
});

module.exports = router;
