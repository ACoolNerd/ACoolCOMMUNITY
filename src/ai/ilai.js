const axios = require('axios');
const config = require('../core/config');
const logger = require('../core/logger');

class ILAI {
  async complete(prompt) {
    try {
      logger.info(`ILAI request: ${prompt}`);
      const response = await axios.post(`${config.ILAI_ENDPOINT}/complete`, {
        prompt,
      }, {
        headers: { 'Authorization': `Bearer ${config.ILAI_KEY}` }
      });
      return response.data;
    } catch (error) {
      logger.error(`ILAI error: ${error.message}`);
      throw error;
    }
  }
}

module.exports = new ILAI();
