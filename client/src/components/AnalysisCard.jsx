/**
 * SatQuery AI - AnalysisCard Component
 * Displays recent satellite scene query, detected features, coordinates, and evaluation scores.
 */
import React from 'react';
import {
  Calendar,
  Compass,
  CheckCircle2,
  Clock,
  ArrowRight,
  Crosshair,
  Sparkles,
  Layers,
  History,
  Activity,
} from 'lucide-react';

const taskTypeIconMap = {
  vqa: Sparkles,
  detection: Crosshair,
  segmentation: Layers,
  change: History,
};

const taskTypeColorMap = {
  vqa: 'cyan',
  detection: 'emerald',
  segmentation: 'amber',
  change: 'blue',
};

export const AnalysisCard = ({ analysis, onNavigate }) => {
  const {
    id,
    title,
    taskType = 'detection', // 'vqa' | 'detection' | 'segmentation' | 'change'
    taskLabel = 'Object Detection',
    sensor = 'Sentinel-2A MSI',
    date = 'Just now',
    coordinates = '51.95°N, 4.12°E',
    summaryMetric = '38 Vessels Identified',
    confidence = '96.2%',
    status = 'Completed',
    targetRoute = '/objects',
    isDemo = true,
  } = analysis;

  const Icon = taskTypeIconMap[taskType] || Activity;
  const badgeColor = taskTypeColorMap[taskType] || 'cyan';

  return (
    <div className="analysis-card glass-panel">
      <div className="analysis-card-header">
        <div className="analysis-type-group">
          <span className={`badge badge-${badgeColor}`}>
            <Icon size={12} /> {taskLabel}
          </span>
          {isDemo && <span className="demo-tag">Sample Data</span>}
        </div>
        <div className="analysis-status-pill">
          <CheckCircle2 size={13} color="var(--accent-emerald)" />
          <span>{status}</span>
        </div>
      </div>

      <div className="analysis-card-body">
        <h4 className="analysis-card-title">{title}</h4>
        <div className="analysis-metadata-grid">
          <div className="meta-item">
            <Calendar size={13} />
            <span>{date}</span>
          </div>
          <div className="meta-item">
            <Compass size={13} />
            <span>{coordinates}</span>
          </div>
          <div className="meta-item">
            <span className="sensor-tag">{sensor}</span>
          </div>
        </div>

        <div className="analysis-result-highlight">
          <div className="result-metric-text">{summaryMetric}</div>
          <div className="result-confidence">
            <span className="conf-label">Confidence:</span>
            <span className="conf-value">{confidence}</span>
          </div>
        </div>
      </div>

      <div className="analysis-card-footer">
        <button
          className="analysis-action-btn"
          onClick={() => onNavigate && onNavigate(targetRoute)}
        >
          <span>Open in {taskLabel}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default AnalysisCard;
