/**
 * SatQuery AI - Standardized API Response Utilities
 * Provides consistent JSON response shapes for success and error cases.
 */

/**
 * Send a standardized success response
 * @param {import('express').Response} res
 * @param {string} message - Descriptive message
 * @param {object|array|null} data - Response payload
 * @param {number} statusCode - HTTP status code (default 200)
 */
export const sendSuccess = (res, message = 'Success', data = null, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Send a standardized error response
 * @param {import('express').Response} res
 * @param {string} message - Error description
 * @param {object|string|null} error - Additional error details
 * @param {number} statusCode - HTTP status code (default 500)
 */
export const sendError = (res, message = 'An error occurred', error = null, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error || null,
    timestamp: new Date().toISOString(),
  });
};
