/**
 * SatQuery AI - Request Logger Middleware
 * Logs incoming HTTP method, URL, and completion time.
 */
export const requestLogger = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    const statusColor = status >= 400 ? '❌' : '⚡';
    console.log(`${statusColor} [${req.method}] ${req.originalUrl} ${status} - ${duration}ms`);
  });
  next();
};

export default requestLogger;
