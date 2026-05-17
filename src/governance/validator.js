const config = require('../core/config');
const logger = require('../core/logger');

const validateRequest = (req, res, next) => {
  const level = config.MEAP_ENFORCEMENT_LEVEL;
  logger.info(`MEAP check: ${req.path} at level ${level}`);

  // Placeholder for real governance logic
  if (level === 'BLOCK' && req.path === '/prohibited') {
    return res.status(403).json({ error: 'Governance block: MEAP Phase-2' });
  }

  next();
};

module.exports = { validateRequest };
