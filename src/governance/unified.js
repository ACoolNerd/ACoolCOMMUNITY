const config = require('../core/config');
const logger = require('../core/logger');

const enforceGovernance = (req, res, next) => {
    const entityId = process.env.ENTITY_ID || 'UNKNOWN_ENTITY';
    const clusterId = process.env.CLUSTER_ID || '00';
    logger.info(`[GOVERNANCE] Entity: ${entityId} | Cluster: ${clusterId} | Path: ${req.path}`);
    res.setHeader('X-ACool-Branding', '#E8520F');
    res.setHeader('X-ACool-Governance', 'MEAP-PHASE-2-ACTIVE');
    res.setHeader('X-Timmy-Score', '9.8');
    next();
};

module.exports = { enforceGovernance };
