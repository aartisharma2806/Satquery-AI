/**
 * SatQuery AI - Server Entry Point
 * Initializes database connection and starts HTTP listener.
 */
import app from './app.js';
import config from './config/env.js';
import { connectDB } from './config/db.js';

const startServer = async () => {
  const server = app.listen(config.port, () => {
    console.log('====================================================');
    console.log(`🛰️  SatQuery AI Server running in [${config.nodeEnv}] mode`);
    console.log(`🌐 Base URL:      http://localhost:${config.port}`);
    console.log(`🩺 Health Check:  http://localhost:${config.port}/api/health`);
    console.log(`🎯 Client Origin: ${config.clientUrl}`);
    console.log('====================================================');
  });

  // Attempt to connect to MongoDB (non-blocking fallback if offline)
  connectDB().catch((err) => {
    console.warn('ℹ️  MongoDB initialization notice:', err.message);
  });

  // Graceful shutdown handling
  const shutdown = () => {
    console.log('\n🛑 SatQuery AI Server shutting down gracefully...');
    server.close(() => {
      console.log('👋 Process terminated.');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
};

startServer().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
