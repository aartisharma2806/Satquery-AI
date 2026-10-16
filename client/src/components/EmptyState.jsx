/**
 * SatQuery AI - EmptyState Component
 * Clean fallback view when lists, query histories, or filter results are empty.
 */
import React from 'react';
import { Layers } from 'lucide-react';

export const EmptyState = ({
  icon: Icon = Layers,
  title = 'No records found',
  description = 'There are no active data points to display at this time.',
  actionText,
  onAction,
  className = '',
}) => {
  return (
    <div className={`empty-state-wrapper glass-panel ${className}`}>
      <div className="empty-state-icon">
        <Icon size={32} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-description">{description}</p>
      {actionText && (
        <button className="btn btn-secondary empty-state-btn" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
