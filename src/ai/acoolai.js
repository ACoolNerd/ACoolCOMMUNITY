const axios = require('axios');
const config = require('../core/config');
const logger = require('../core/logger');
const ilai = require('./ilai');

class ACoolAI {
  async complete(prompt) {
    try {
      logger.info(`ACoolAI request: ${prompt}`);
      const response = await axios.post(`${config.ACOOLAI_ENDPOINT}/complete`, {
        prompt,
      }, {
        headers: { 'Authorization': `Bearer ${config.ACOOLAI_KEY}` }
      });
      return response.data;
    } catch (error) {
      logger.error(`ACoolAI error, falling back to ILAI: ${error.message}`);
      return await ilai.complete(prompt);
    }
  }
}

module.exports = new ACoolAI();
