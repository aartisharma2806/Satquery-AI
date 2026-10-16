/**
 * SatQuery AI - Frontend API Service Client
 * Handles HTTP communication with the backend Express server.
 */
import { API_BASE_URL } from '../utils/constants.js';

/**
 * Fetch backend health status
 * @returns {Promise<{success: boolean, data?: object, message?: string}>}
 */
export const fetchHealthStatus = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      message: error.message || 'Unable to communicate with SatQuery AI backend server',
      error,
    };
  }
};

export default {
  fetchHealthStatus,
};
