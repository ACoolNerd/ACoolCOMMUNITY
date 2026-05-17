const express = require('express');
const config = require('../core/config');
const logger = require('../core/logger');
const { validateRequest } = require('../governance/validator');
const acoolai = require('../ai/acoolai');

const app = express();
app.use(express.json());
app.use(validateRequest);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', project: config.PROJECT_TYPE });
});

app.post('/chat', async (req, res) => {
  const { prompt } = req.body;
  try {
    const result = await acoolai.complete(prompt);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(config.PORT, () => {
  logger.info(`ACoolAPI server running on port ${config.PORT}`);
});
