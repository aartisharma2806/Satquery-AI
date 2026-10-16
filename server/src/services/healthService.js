/**
 * SatQuery AI - Health Service
 * Gathers system operational metrics, service status, and subsystem health.
 */
import { isDBConnected } from '../config/db.js';
import config from '../config/env.js';

/**
 * Returns comprehensive health status object
 */
export const getHealthMetrics = () => {
  const dbConnected = isDBConnected();

  return {
    service: 'SatQuery AI Backend API',
    status: 'healthy',
    version: '1.0.0',
    environment: config.nodeEnv,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    subsystems: {
      api: {
        status: 'online',
        port: config.port,
      },
      database: {
        status: dbConnected ? 'connected' : 'disconnected (running without persistent storage)',
        provider: 'MongoDB via Mongoose',
        available: dbConnected,
      },
      pythonAiService: {
        status: 'not_configured',
        description: 'Reserved for future multimodal remote sensing AI microservice',
        targetUrl: config.pythonAiServiceUrl,
      },
    },
  };
};

export default { getHealthMetrics };
