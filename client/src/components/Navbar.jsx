/**
 * SatQuery AI - Top Navigation Bar
 */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, RefreshCw, Radio } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { useHealthCheck } from '../hooks/useHealthCheck.js';
import { NAV_ITEMS } from '../utils/constants.js';

export const Navbar = () => {
  const { toggleSidebar } = useApp();
  const { health, loading, refreshHealth } = useHealthCheck();
  const location = useLocation();

  // Find active nav item based on route
  const activeNav = NAV_ITEMS.find((item) => item.path === location.pathname) || {
    label: 'SatQuery AI',
  };

  const isServerHealthy = health && health.status === 'healthy';

  return (
    <header className="top-navbar">
      <div className="navbar-left">
        <button
          className="menu-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
        >
          <Menu size={20} />
        </button>
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
            {activeNav.label}
          </h2>
          <span className="navbar-subtitle">
            Multimodal Remote Sensing Vision-Language Assistant
          </span>
        </div>
      </div>

      <div className="navbar-right">
        {/* Backend Connectivity Status Pill */}
        <div
          className="health-pill"
          title={
            isServerHealthy
              ? `Backend Connected (Port ${health.subsystems?.api?.port || 5000})`
              : 'Backend disconnected or starting up'
          }
        >
          <span
            className={`status-indicator ${
              loading ? 'warning' : isServerHealthy ? 'online' : 'offline'
            }`}
          />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {loading
              ? 'Checking API...'
              : isServerHealthy
              ? 'Backend API Online'
              : 'Backend Offline'}
          </span>
          <button
            onClick={refreshHealth}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dim)',
              cursor: 'pointer',
              display: 'flex',
              padding: '2px',
            }}
            title="Refresh backend status"
          >
            <RefreshCw size={13} className={loading ? 'spin' : ''} />
          </button>
        </div>

        <Link to="/about" className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
          <Radio size={14} color="var(--accent-cyan)" /> System Specs
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
