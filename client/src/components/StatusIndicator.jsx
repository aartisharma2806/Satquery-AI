/**
 * SatQuery AI - StatusIndicator Component
 * Reusable visual indicator for system, service, and task statuses.
 */
import React from 'react';

export const StatusIndicator = ({
  status = 'online', // 'online' | 'offline' | 'warning' | 'loading'
  label,
  subtext,
  size = 'md', // 'sm' | 'md' | 'lg'
  showPulse = true,
  className = '',
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'online':
      case 'healthy':
      case 'connected':
        return 'online';
      case 'offline':
      case 'disconnected':
      case 'error':
        return 'offline';
      case 'warning':
      case 'degraded':
        return 'warning';
      case 'loading':
      case 'pending':
        return 'loading';
      default:
        return 'neutral';
    }
  };

  const statusClass = getStatusClass();

  return (
    <div className={`status-indicator-wrapper size-${size} ${className}`}>
      <span className="dot-container">
        <span className={`status-dot ${statusClass}`} />
        {showPulse && statusClass === 'online' && (
          <span className="status-dot-pulse" />
        )}
      </span>
      {(label || subtext) && (
        <div className="status-text-group">
          {label && <span className="status-label">{label}</span>}
          {subtext && <span className="status-subtext">{subtext}</span>}
        </div>
      )}
    </div>
  );
};

export default StatusIndicator;
