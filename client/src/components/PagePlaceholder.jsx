/**
 * SatQuery AI - Reusable Page Placeholder Component
 * Presents page context, planned capabilities, and architecture status cleanly.
 */
import React from 'react';
import { ArrowRight, CheckCircle2, CircleDashed } from 'lucide-react';

export const PagePlaceholder = ({
  title,
  icon: Icon,
  badgeText = 'Planned Phase',
  badgeColor = 'cyan',
  summary,
  capabilities = [],
  actionText,
  onAction,
}) => {
  return (
    <div className="placeholder-container">
      {/* Hero Banner */}
      <div className="placeholder-hero glass-panel">
        <div className="placeholder-header">
          <div className="placeholder-title-group">
            {Icon && (
              <div className="placeholder-icon-box">
                <Icon size={26} />
              </div>
            )}
            <div>
              <span className={`badge badge-${badgeColor}`} style={{ marginBottom: '8px' }}>
                {badgeText}
              </span>
              <h1 className="placeholder-title">{title}</h1>
            </div>
          </div>

          {actionText && (
            <button className="btn btn-primary" onClick={onAction}>
              {actionText} <ArrowRight size={16} />
            </button>
          )}
        </div>

        <p className="placeholder-desc">{summary}</p>
      </div>

      {/* Planned Capabilities Section */}
      {capabilities.length > 0 && (
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-main)' }}>
            Planned Capabilities & Specifications
          </h3>
          <div className="capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="capability-card glass-panel">
                <h4>
                  {cap.ready ? (
                    <CheckCircle2 size={18} color="var(--accent-emerald)" />
                  ) : (
                    <CircleDashed size={18} color="var(--accent-cyan)" />
                  )}
                  {cap.name}
                </h4>
                <p>{cap.description}</p>
                {cap.tag && (
                  <span
                    className="badge badge-slate"
                    style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
                  >
                    {cap.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PagePlaceholder;
