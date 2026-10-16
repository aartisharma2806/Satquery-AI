/**
 * SatQuery AI - Express Application Setup
 * Configures middleware, security policies, routes, and error handling.
 */
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config/env.js';
import apiRoutes from './routes/index.js';
import requestLogger from './middleware/requestLogger.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ============================================================================
// Core Middleware
// ============================================================================

// Enable Cross-Origin Resource Sharing with configured client origin
app.use(
  cors({
    origin: config.clientUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

// Body parsing with safe size limits for JSON payloads
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging
app.use(requestLogger);

// Static uploads directory (for serving uploaded satellite images safely)
const uploadsPath = path.resolve(__dirname, '../uploads');
app.use('/uploads', express.static(uploadsPath));

// ============================================================================
// API Routes
// ============================================================================
app.use('/api', apiRoutes);

// Root informational endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'SatQuery AI API',
    description: 'Interactive Vision-Language Assistant for Remote Sensing Image Analysis',
    status: 'online',
    healthCheckUrl: '/api/health',
    version: '1.0.0',
  });
});

// ============================================================================
// Error Handling
// ============================================================================
// Handle 404 routes
app.use(notFoundHandler);

// Centralized error handler
app.use(errorHandler);

export default app;
