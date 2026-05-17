const dotenv = require('dotenv');
const joi = require('joi');

dotenv.config();

const schema = joi.object({
  PORT: joi.number().default(3000),
  NODE_ENV: joi.string().valid('development', 'production', 'test').default('development'),
  PROJECT_TYPE: joi.string().valid('website', 'lms', 'marketplace', 'consultant', 'health', 'media', 'finance', 'social').required(),
  ACOOLAI_ENDPOINT: joi.string().uri().required(),
  ACOOLAI_KEY: joi.string().required(),
  ILAI_ENDPOINT: joi.string().uri().required(),
  ILAI_KEY: joi.string().required(),
}).unknown().required();

const { error, value: config } = schema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;
