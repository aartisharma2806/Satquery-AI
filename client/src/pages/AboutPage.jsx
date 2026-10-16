/**
 * SatQuery AI - About Page
 * Architectural overview, mission, sensor support, and implementation roadmap.
 */
import React from 'react';
import { Info, Cpu, Database, Server, Monitor } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder.jsx';

export const AboutPage = () => {
  const capabilities = [
    {
      name: 'MERN Full-Stack Foundation',
      description: 'React + Vite frontend, Express + Node.js backend, and Mongoose database abstraction designed for high modularity.',
      tag: 'Web Architecture',
      ready: true,
    },
    {
      name: 'Decoupled Python AI Service Architecture',
      description: 'Clean boundary reserved for PyTorch, OpenCV, GDAL/Rasterio, and Remote Sensing Vision-Language Models.',
      tag: 'AI Service Design',
      ready: true,
    },
    {
      name: 'Multi-Sensor Remote Sensing Ingestion',
      description: 'Built to support Sentinel-2 (ESA), Landsat 8/9 (USGS/NASA), PlanetScope, NAIP, and high-res commercial imagery.',
      tag: 'Sensors Supported',
      ready: false,
    },
    {
      name: 'Safe File & Geospatial Data Handling',
      description: 'Strict upload validation, size caps, local scratch retention, and secure API parameterization.',
      tag: 'Security & Safety',
      ready: true,
    },
  ];

  return (
    <div className="placeholder-container">
      <PagePlaceholder
        title="About SatQuery AI"
        icon={Info}
        badgeText="System Specs"
        badgeColor="emerald"
        summary="SatQuery AI is an interactive multimodal vision-language assistant engineered to bridge natural language inquiries with complex Earth observation datasets. It empowers analysts, researchers, and decision makers to query satellite imagery using intuitive text commands."
        capabilities={capabilities}
      />

      {/* Tech Stack Breakdown */}
      <div className="capability-card glass-panel" style={{ marginTop: '12px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '12px' }}>
          Technology Stack Overview
        </h3>
        <div className="capabilities-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '6px' }}>
              <Monitor size={18} /> Frontend: React.js & Vite
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Fast development server, modular components, React Router navigation, Lucide icons, and Vanilla CSS design tokens tailored for dark geospatial themes.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '6px' }}>
              <Server size={18} /> Backend: Express.js & Node.js
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Lightweight RESTful API layer providing centralized logging, CORS policies, health diagnostics, and routing between frontend and AI services.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-amber)', fontWeight: 600, marginBottom: '6px' }}>
              <Database size={18} /> Database: MongoDB & Mongoose
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Document persistence for user queries, image metadata, detected bounding boxes, segmentation masks, and system logs with graceful fallback when offline.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '6px' }}>
              <Cpu size={18} /> Future: Python AI Microservice
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Reserved for deep learning inference: PyTorch, Hugging Face Transformers, Remote Sensing VLMs (e.g., GeoChat, EarthMarker), and GDAL raster math.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
