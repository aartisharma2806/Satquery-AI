/**
 * SatQuery AI - Health Controller
 * Handles incoming health check requests.
 */
import { getHealthMetrics } from '../services/healthService.js';
import { sendSuccess } from '../utils/apiResponse.js';

/**
 * GET /api/health
 * Returns service status, uptime, and subsystem connectivity
 */
export const checkHealth = (req, res, next) => {
  try {
    const health = getHealthMetrics();
    return sendSuccess(res, 'SatQuery AI service is operational', health, 200);
  } catch (error) {
    next(error);
  }
};

export default { checkHealth };
