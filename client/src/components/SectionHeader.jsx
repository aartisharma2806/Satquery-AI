/**
 * SatQuery AI - SectionHeader Component
 * Standardized section title with optional badge, icon, description, and action controls.
 */
import React from 'react';

export const SectionHeader = ({
  title,
  subtitle,
  badge,
  badgeColor = 'cyan',
  icon: Icon,
  actions,
  className = '',
}) => {
  return (
    <div className={`section-header-component ${className}`}>
      <div className="section-header-text">
        <div className="section-title-row">
          {Icon && (
            <span className="section-header-icon">
              <Icon size={18} />
            </span>
          )}
          <h2 className="section-main-title">{title}</h2>
          {badge && (
            <span className={`badge badge-${badgeColor} section-badge`}>
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="section-subtitle-text">{subtitle}</p>}
      </div>

      {actions && <div className="section-header-actions">{actions}</div>}
    </div>
  );
};

export default SectionHeader;
