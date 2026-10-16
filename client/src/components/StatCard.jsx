/**
 * SatQuery AI - StatCard Component
 * Displays key quantitative geospatial metrics with trend indicators, iconography, and demo tags.
 */
import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const StatCard = ({
  title,
  value,
  unit,
  subtitle,
  change,
  trend = 'up',
  icon: Icon,
  accentColor = 'cyan', // 'cyan' | 'blue' | 'emerald' | 'amber' | 'purple'
  isDemo = true,
  onClick,
}) => {
  return (
    <div
      className={`stat-card glass-panel stat-accent-${accentColor} ${
        onClick ? 'clickable' : ''
      }`}
      onClick={onClick}
    >
      <div className="stat-card-top">
        <span className="stat-card-title">{title}</span>
        {Icon && (
          <div className={`stat-icon-wrapper icon-accent-${accentColor}`}>
            <Icon size={18} />
          </div>
        )}
      </div>

      <div className="stat-card-value-row">
        <span className="stat-number">{value}</span>
        {unit && <span className="stat-unit">{unit}</span>}
      </div>

      <div className="stat-card-bottom">
        {change && (
          <div className={`stat-trend trend-${trend}`}>
            {trend === 'up' && <TrendingUp size={13} />}
            {trend === 'down' && <TrendingDown size={13} />}
            {trend === 'neutral' && <Minus size={13} />}
            <span>{change}</span>
          </div>
        )}
        {subtitle && <span className="stat-subtitle">{subtitle}</span>}
        {isDemo && (
          <span
            className="stat-demo-pill"
            title="Demonstration statistic for UI evaluation"
          >
            Demo Data
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
