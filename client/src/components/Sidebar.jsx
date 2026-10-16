/**
 * SatQuery AI - Collapsible Responsive Sidebar
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Sparkles,
  Crosshair,
  Layers,
  Clock,
  BarChart3,
  Info,
  Satellite,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { NAV_ITEMS } from '../utils/constants.js';

// Map icon names from constants to Lucide icons
const iconMap = {
  LayoutDashboard,
  Sparkles,
  Crosshair,
  Layers,
  Clock,
  BarChart3,
  Info,
};

export const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useApp();

  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      {/* Sidebar Header with Brand */}
      <div className="sidebar-header">
        <NavLink to="/" className="brand-link" onClick={closeSidebar}>
          <div className="brand-icon">
            <Satellite size={22} color="#06b6d4" />
          </div>
          <div>
            <div className="brand-title">SatQuery AI</div>
            <div className="brand-tag">Remote Sensing VLM</div>
          </div>
        </NavLink>
        <button
          className="menu-toggle"
          onClick={closeSidebar}
          aria-label="Close sidebar"
          style={{ display: sidebarOpen ? 'flex' : 'none' }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="sidebar-nav">
        <div className="nav-section-title">Analysis Modules</div>
        {NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.iconName] || Satellite;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="nav-item-icon" />
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.tag && (
                <span
                  style={{
                    fontSize: '0.65rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--text-dim)',
                  }}
                >
                  {item.tag}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Stack: MERN + Vite
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
            Node.js / Express / React / MongoDB
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
