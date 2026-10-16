/**
 * SatQuery AI - MongoDB Database Connection
 * Configures Mongoose connection with graceful fallback when MongoDB is not running.
 */
import mongoose from 'mongoose';
import config from './env.js';

let isConnected = false;

/**
 * Connect to MongoDB instance with fallback
 */
export const connectDB = async () => {
  if (!config.mongoUri) {
    console.warn('⚠️  MONGODB_URI is not defined in environment. Database features will be disabled.');
    isConnected = false;
    return false;
  }

  try {
    // Attempt connection with a short serverSelectionTimeoutMS so server doesn't hang if MongoDB is offline
    const conn = await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 3000,
    });
    isConnected = true;
    console.log(`✅ MongoDB connected successfully: ${conn.connection.host}`);
    return true;
  } catch (error) {
    isConnected = false;
    console.warn('⚠️  MongoDB connection failed: ' + error.message);
    console.warn('ℹ️  The SatQuery AI server will continue running, but database-dependent features remain unavailable.');
    return false;
  }
};

/**
 * Helper to check current database connectivity status
 * @returns {boolean}
 */
export const isDBConnected = () => {
  return isConnected && mongoose.connection.readyState === 1;
};

export default connectDB;
