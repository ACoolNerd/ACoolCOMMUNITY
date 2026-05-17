const fs = require('fs');
const config = require('../core/config');

const logAudit = (event) => {
  const logEntry = `${new Date().toISOString()} - ${JSON.stringify(event)}
`;
  fs.appendFileSync(config.AUDIT_LOG_PATH, logEntry);
};

module.exports = { logAudit };
