/**
 * SatQuery AI - Backend Health Check Hook
 * Monitors API connection and reports operational status.
 */
import { useState, useEffect, useCallback } from 'react';
import { fetchHealthStatus } from '../services/api.js';
import { useApp } from '../context/AppContext.jsx';

export const useHealthCheck = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { serverHealth, setServerHealth } = useApp();

  const checkHealth = useCallback(async () => {
    setLoading(true);
    setError(null);
    const res = await fetchHealthStatus();
    if (res.success && res.data) {
      setServerHealth(res.data);
      setError(null);
    } else {
      setServerHealth(null);
      setError(res.message || 'Backend server is not responding');
    }
    setLoading(false);
  }, [setServerHealth]);

  useEffect(() => {
    checkHealth();
  }, [checkHealth]);

  return {
    health: serverHealth,
    loading,
    error,
    refreshHealth: checkHealth,
  };
};

export default useHealthCheck;
