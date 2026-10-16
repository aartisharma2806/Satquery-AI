/**
 * SatQuery AI - Environment Configuration
 * Centralized loading and validation of environment variables.
 */
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env relative to server root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const config = {
  port: parseInt(process.env.PORT, 10) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/satquery_ai',
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE, 10) || 52428800, // 50MB
  pythonAiServiceUrl: process.env.PYTHON_AI_SERVICE_URL || 'http://localhost:8000',
  isProduction: process.env.NODE_ENV === 'production',
};

export default config;
