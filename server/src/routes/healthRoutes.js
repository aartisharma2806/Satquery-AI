/**
 * SatQuery AI - Health Routes
 * Defines route bindings for system health and diagnostics.
 */
import { Router } from 'express';
import { checkHealth } from '../controllers/healthController.js';

const router = Router();

// GET /api/health
router.get('/', checkHealth);

export default router;
