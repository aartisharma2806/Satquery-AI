/**
 * SatQuery AI - Main API Router
 * Aggregates all modular route handlers under the /api prefix.
 */
import { Router } from 'express';
import healthRoutes from './healthRoutes.js';

const router = Router();

// Health check endpoint -> /api/health
router.use('/health', healthRoutes);

// Placeholder notice for future satellite analysis routes
router.use('/query', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'SatQuery natural language query pipeline will be implemented in the next phase.',
  });
});

router.use('/images', (req, res) => {
  res.status(501).json({
    success: false,
    message: 'Satellite image upload and preprocessing pipeline will be implemented in the next phase.',
  });
});

export default router;
