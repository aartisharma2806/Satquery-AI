/**
 * SatQuery AI - Interactive Dashboard Page
 * High-performance geospatial intelligence mission dashboard.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Crosshair,
  Layers,
  Clock,
  Database,
  Server,
  Cpu,
  ArrowRight,
  Radio,
  Image as ImageIcon,
  MapPin,
  RefreshCw,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Monitor,
  Activity,
  ShieldAlert,
  ExternalLink,
} from 'lucide-react';

import StatCard from '../components/StatCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import AnalysisCard from '../components/AnalysisCard.jsx';
import SatellitePreview from '../components/SatellitePreview.jsx';
import StatusIndicator from '../components/StatusIndicator.jsx';
import EmptyState from '../components/EmptyState.jsx';
import { useHealthCheck } from '../hooks/useHealthCheck.js';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { health, loading, error, refreshHealth } = useHealthCheck();

  // Filter state for recent analyses
  const [selectedTaskFilter, setSelectedTaskFilter] = useState('all');

  const isApiOnline = health && health.status === 'healthy';
  const isDbOnline = health?.subsystems?.database?.available;

  // Sample demonstration analysis records
  const demoAnalyses = [
    {
      id: 'an-01',
      title: 'Europort Container Terminal & Naval Airbase',
      taskType: 'detection',
      taskLabel: 'Object Detection',
      sensor: 'Sentinel-2A MSI (10m)',
      date: 'Today, 14:20 UTC',
      coordinates: '51.9542° N, 04.1203° E',
      summaryMetric: '42 Vessels & 8 Aircraft Localized',
      confidence: '98.4%',
      status: 'Completed',
      targetRoute: '/objects',
      isDemo: true,
    },
    {
      id: 'an-02',
      title: 'Suez Canal Southern Anchor Transit Inquiry',
      taskType: 'vqa',
      taskLabel: 'Ask SatQuery (VQA)',
      sensor: 'Landsat-9 OLI-2 (15m)',
      date: 'Today, 11:05 UTC',
      coordinates: '29.9281° N, 32.5599° E',
      summaryMetric: 'Query: "Are container berths congested?" → Answer: Normal Density',
      confidence: '96.2%',
      status: 'Completed',
      targetRoute: '/ask',
      isDemo: true,
    },
    {
      id: 'an-03',
      title: 'Rhine-Meuse Delta Coastal Land Classification',
      taskType: 'segmentation',
      taskLabel: 'Land Cover Analysis',
      sensor: 'Sentinel-2 Level-2A',
      date: 'Yesterday, 17:45 UTC',
      coordinates: '51.8821° N, 04.2891° E',
      summaryMetric: 'Water: 38.4% | Built-up: 32.1% | Vegetation: 29.5%',
      confidence: '95.1%',
      status: 'Completed',
      targetRoute: '/land-cover',
      isDemo: true,
    },
    {
      id: 'an-04',
      title: 'Valencia Outer Harbor Expansion (2023 vs 2026)',
      taskType: 'change',
      taskLabel: 'Change Explorer',
      sensor: 'Bi-Temporal Sentinel-2 Pair',
      date: 'Oct 14, 2026',
      coordinates: '39.4412° N, 00.3201° W',
      summaryMetric: '+1.8 km² New Pier Foundation Confirmed',
      confidence: '94.6%',
      status: 'Completed',
      targetRoute: '/change',
      isDemo: true,
    },
  ];

  const filteredAnalyses =
    selectedTaskFilter === 'all'
      ? demoAnalyses
      : demoAnalyses.filter((item) => item.taskType === selectedTaskFilter);

  return (
    <div className="dashboard-page-container">
      {/* 1. Welcome Hero Banner */}
      <div className="dashboard-hero">
        <div className="hero-top-row">
          <div className="hero-heading-group">
            <div className="hero-badge-pill">
              <Radio size={12} />
              <span>Multimodal Geospatial Intelligence</span>
            </div>
            <h1 className="hero-main-title">Satellite Intelligence, Simplified.</h1>
            <p className="hero-subtext">
              SatQuery AI transforms complex Earth observation imagery into conversational insights. Ask natural-language questions, detect tactical assets, segment land-use classes, and track bi-temporal planetary change through an interactive multimodal vision-language framework.
            </p>
          </div>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/ask')}
            >
              <Sparkles size={16} /> Launch Ask SatQuery
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/about')}
            >
              System Specs
            </button>
          </div>
        </div>
      </div>

      {/* 2. Key Summary Stat Cards */}
      <div style={{ marginTop: '28px' }}>
        <SectionHeader
          title="Mission Statistics & Analytics"
          subtitle="Real-time aggregation of ingested satellite scenes and analysis pipelines."
          badge="Demonstration Overview"
          badgeColor="cyan"
        />

        <div className="stats-grid">
          <StatCard
            title="Images Analyzed"
            value="1,420"
            unit="tiles"
            subtitle="Sentinel-2 & Landsat-9"
            change="+12.4% this month"
            trend="up"
            icon={ImageIcon}
            accentColor="cyan"
            isDemo={true}
          />
          <StatCard
            title="Objects Detected"
            value="8,940"
            unit="targets"
            subtitle="Vessels, Aircraft, Tanks"
            change="+18.2% this month"
            trend="up"
            icon={Crosshair}
            accentColor="emerald"
            isDemo={true}
          />
          <StatCard
            title="Areas Monitored"
            value="42,800"
            unit="km²"
            subtitle="Harbors & Watersheds"
            change="+5.8% coverage"
            trend="up"
            icon={MapPin}
            accentColor="amber"
            isDemo={true}
          />
          <StatCard
            title="Changes Identified"
            value="348"
            unit="alerts"
            subtitle="Inundation & Urban Growth"
            change="Bi-Temporal Diffs"
            trend="neutral"
            icon={Clock}
            accentColor="blue"
            isDemo={true}
          />
        </div>
      </div>

      {/* 3. Large Satellite Imagery Preview Viewer */}
      <div>
        <SectionHeader
          title="Interactive Satellite Scene Viewer"
          subtitle="High-resolution nadir observation with interactive AI bounding boxes and land-cover overlays."
          badge="Live Demonstration"
          badgeColor="emerald"
          icon={Radio}
        />

        <SatellitePreview />
      </div>

      {/* 4. Quick Access Analysis Modules */}
      <div>
        <SectionHeader
          title="Analysis Workstations"
          subtitle="Direct access to specialized remote sensing computer vision and VLM toolsets."
          badge="4 Workstations"
          badgeColor="slate"
        />

        <div className="quick-access-grid">
          <div
            className="quick-card glass-panel"
            onClick={() => navigate('/ask')}
          >
            <div className="quick-card-header">
              <div className="quick-card-icon icon-accent-cyan">
                <Sparkles size={20} />
              </div>
              <span className="badge badge-cyan">VLM</span>
            </div>
            <h4>Ask SatQuery</h4>
            <p>
              Conversational reasoning across satellite tiles. Query vessel density, harbor status, and landscape features using natural language prompts.
            </p>
            <div className="quick-card-link" style={{ color: 'var(--accent-cyan)' }}>
              <span>Launch Query Engine</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <div
            className="quick-card glass-panel"
            onClick={() => navigate('/objects')}
          >
            <div className="quick-card-header">
              <div className="quick-card-icon icon-accent-emerald">
                <Crosshair size={20} />
              </div>
              <span className="badge badge-emerald">Detection</span>
            </div>
            <h4>Object Explorer</h4>
            <p>
              Automated counting and localized bounding box extraction for aircraft, naval ships, storage containers, and logistical assets.
            </p>
            <div className="quick-card-link" style={{ color: 'var(--accent-emerald)' }}>
              <span>Open Object Detector</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <div
            className="quick-card glass-panel"
            onClick={() => navigate('/land-cover')}
          >
            <div className="quick-card-header">
              <div className="quick-card-icon icon-accent-amber">
                <Layers size={20} />
              </div>
              <span className="badge badge-amber">Segmentation</span>
            </div>
            <h4>Land Cover Analysis</h4>
            <p>
              Pixel-level semantic classification across multi-spectral bands. Segment surface water, urban concrete, forests, and cropland.
            </p>
            <div className="quick-card-link" style={{ color: 'var(--accent-amber)' }}>
              <span>Run Segmentation</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <div
            className="quick-card glass-panel"
            onClick={() => navigate('/change')}
          >
            <div className="quick-card-header">
              <div className="quick-card-icon icon-accent-blue">
                <Clock size={20} />
              </div>
              <span className="badge badge-cyan">Bi-Temporal</span>
            </div>
            <h4>Change Explorer</h4>
            <p>
              Co-register multi-date satellite scenes of identical footprints to isolate physical infrastructure changes and disaster flood zones.
            </p>
            <div className="quick-card-link" style={{ color: 'var(--accent-blue)' }}>
              <span>Explore Differences</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Recent Analyses Section */}
      <div>
        <SectionHeader
          title="Recent Scene Inquiries & Detections"
          subtitle="Sample analysis executions demonstrating grounding accuracy and confidence scores."
          badge="Sample Data"
          badgeColor="cyan"
          icon={Activity}
          actions={
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <button
                className={`toolbar-btn ${selectedTaskFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedTaskFilter('all')}
              >
                All Modules
              </button>
              <button
                className={`toolbar-btn ${selectedTaskFilter === 'detection' ? 'active' : ''}`}
                onClick={() => setSelectedTaskFilter('detection')}
              >
                Detection
              </button>
              <button
                className={`toolbar-btn ${selectedTaskFilter === 'vqa' ? 'active' : ''}`}
                onClick={() => setSelectedTaskFilter('vqa')}
              >
                VQA
              </button>
              <button
                className={`toolbar-btn ${selectedTaskFilter === 'segmentation' ? 'active' : ''}`}
                onClick={() => setSelectedTaskFilter('segmentation')}
              >
                Land Cover
              </button>
              <button
                className={`toolbar-btn ${selectedTaskFilter === 'change' ? 'active' : ''}`}
                onClick={() => setSelectedTaskFilter('change')}
              >
                Change
              </button>
            </div>
          }
        />

        {filteredAnalyses.length > 0 ? (
          <div className="analyses-grid">
            {filteredAnalyses.map((item) => (
              <AnalysisCard
                key={item.id}
                analysis={item}
                onNavigate={(route) => navigate(route)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No analyses match filter"
            description="Select another analysis module category or reset to 'All Modules'."
            actionText="Reset Filter"
            onAction={() => setSelectedTaskFilter('all')}
          />
        )}
      </div>

      {/* 6. Subsystem & Backend Connectivity Status */}
      <div className="system-status-container">
        <SectionHeader
          title="System Architecture & Service Telemetry"
          subtitle="Real-time connectivity monitoring to Express REST API, MongoDB, and future AI services."
          badge={isApiOnline ? 'Backend Online' : 'Connecting'}
          badgeColor={isApiOnline ? 'emerald' : 'amber'}
          actions={
            <button
              className="btn btn-secondary"
              onClick={refreshHealth}
              disabled={loading}
              style={{ fontSize: '0.78rem', padding: '6px 12px' }}
            >
              <RefreshCw size={13} className={loading ? 'spin' : ''} />
              <span>{loading ? 'Pinging API...' : 'Ping API Endpoint'}</span>
            </button>
          }
        />

        <div className="system-status-card glass-panel">
          <div className="system-subsystems-grid">
            {/* Express API Subsystem */}
            <div className="subsystem-item">
              <div className="subsystem-top">
                <span className="subsystem-name">
                  <Server size={16} color="var(--accent-cyan)" /> Express REST API
                </span>
                <StatusIndicator
                  status={loading ? 'loading' : isApiOnline ? 'online' : 'offline'}
                  size="sm"
                />
              </div>
              <div className="subsystem-details">
                {isApiOnline ? (
                  <>
                    <div>Host: <code>http://localhost:{health?.subsystems?.api?.port || 5000}</code></div>
                    <div>Uptime: <strong>{health?.uptimeSeconds || 0} seconds</strong></div>
                    <div>Environment: <strong>{health?.environment || 'development'}</strong></div>
                  </>
                ) : (
                  <div style={{ color: 'var(--accent-amber)' }}>
                    {loading ? 'Attempting connection...' : error || 'Backend server not responding.'}
                  </div>
                )}
              </div>
            </div>

            {/* MongoDB Subsystem */}
            <div className="subsystem-item">
              <div className="subsystem-top">
                <span className="subsystem-name">
                  <Database size={16} color="var(--accent-emerald)" /> MongoDB Database
                </span>
                <StatusIndicator
                  status={isDbOnline ? 'online' : 'warning'}
                  size="sm"
                />
              </div>
              <div className="subsystem-details">
                <div>Status: <strong>{isDbOnline ? 'Connected' : 'Standalone Mode'}</strong></div>
                <div>Provider: Mongoose ORM</div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>
                  {isDbOnline
                    ? 'Persistent analysis storage enabled.'
                    : 'Server active without persistent DB.'}
                </div>
              </div>
            </div>

            {/* Frontend Client Subsystem */}
            <div className="subsystem-item">
              <div className="subsystem-top">
                <span className="subsystem-name">
                  <Monitor size={16} color="var(--accent-blue)" /> React Frontend
                </span>
                <StatusIndicator status="online" size="sm" />
              </div>
              <div className="subsystem-details">
                <div>Framework: <strong>React 18 + Vite 6</strong></div>
                <div>Routing: React Router v6</div>
                <div>Status: <strong>Active & Responsive</strong></div>
              </div>
            </div>

            {/* Python AI Microservice Subsystem */}
            <div className="subsystem-item">
              <div className="subsystem-top">
                <span className="subsystem-name">
                  <Cpu size={16} color="var(--accent-purple)" /> Python AI Service
                </span>
                <StatusIndicator status="neutral" size="sm" />
              </div>
              <div className="subsystem-details">
                <div>Phase: <strong>Phase 2 Reserved</strong></div>
                <div>Target: <code>{health?.subsystems?.pythonAiService?.targetUrl || 'http://localhost:8000'}</code></div>
                <div style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>
                  Decoupled PyTorch & GDAL boundary.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
