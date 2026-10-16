/**
 * SatQuery AI - Centralized Error Handling Middleware
 */
import config from '../config/env.js';
import { sendError } from '../utils/apiResponse.js';

/**
 * 404 Route Not Found Middleware
 */
export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Resource not found: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

/**
 * Global Error Handler Middleware
 */
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // In production, do not leak internal stack traces
  const errorDetails = config.isProduction
    ? undefined
    : { stack: err.stack, details: err.details };

  console.error(`💥 [Error] ${statusCode} - ${message}`);
  if (err.stack && !config.isProduction) {
    console.error(err.stack);
  }

  sendError(res, message, errorDetails, statusCode);
};

export default errorHandler;
