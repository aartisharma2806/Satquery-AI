/**
 * SatQuery AI - SatellitePreview Component
 * Interactive satellite imagery viewer with telemetry HUD, detection bounding boxes,
 * land-cover overlays, and geospatial targeting reticles.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Crosshair,
  Layers,
  Grid,
  Maximize2,
  Eye,
  Info,
  Sparkles,
  Compass,
  Radio,
  Sliders,
  Check,
} from 'lucide-react';
import demoImage from '../assets/demo_satellite_port.jpg';

export const SatellitePreview = () => {
  const navigate = useNavigate();

  // Interactive Layer Toggles
  const [showBoxes, setShowBoxes] = useState(true);
  const [showLandCover, setShowLandCover] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [bandPreset, setBandPreset] = useState('natural'); // 'natural' | 'cir' | 'ndvi'
  const [activeObject, setActiveObject] = useState(null);

  // Mouse coordinate tracker for GIS HUD
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50, lat: '51.9542° N', lon: '4.1203° E' });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);

    // Calculate approximate coordinates based on bounding footprint
    const lat = (51.97 - (y / 100) * 0.04).toFixed(4);
    const lon = (4.10 + (x / 100) * 0.05).toFixed(4);

    setCursorPos({ x, y, lat: `${lat}° N`, lon: `${lon}° E` });
  };

  // Synthetic demo detections mapped to normalized percentages on the image
  const demoDetections = [
    {
      id: 'obj-1',
      label: 'Cargo Vessel #1 (Container Carrier)',
      category: 'maritime',
      box: { top: '51%', left: '32.5%', width: '10%', height: '4%' },
      confidence: '98.4%',
      heading: '88° E',
      dimensions: '220m × 32m',
    },
    {
      id: 'obj-2',
      label: 'Cargo Vessel #2 (Bulk Carrier)',
      category: 'maritime',
      box: { top: '64.5%', left: '23.8%', width: '9%', height: '3.8%' },
      confidence: '97.1%',
      heading: '90° E',
      dimensions: '190m × 28m',
    },
    {
      id: 'obj-3',
      label: 'Commercial Airliner (Airbus A320)',
      category: 'aviation',
      box: { top: '28%', left: '60.5%', width: '4.5%', height: '4.5%' },
      confidence: '95.6%',
      heading: '270° W',
      dimensions: '37m × 34m',
    },
    {
      id: 'obj-4',
      label: 'Commercial Airliner (Boeing 737)',
      category: 'aviation',
      box: { top: '28%', left: '65.2%', width: '4.2%', height: '4.2%' },
      confidence: '94.2%',
      heading: '270° W',
      dimensions: '39m × 35m',
    },
    {
      id: 'obj-5',
      label: 'Industrial Fuel Storage Tank Cluster',
      category: 'infrastructure',
      box: { top: '54%', left: '66%', width: '16%', height: '18%' },
      confidence: '99.1%',
      heading: 'N/A',
      dimensions: '24 × 40m Tanks',
    },
  ];

  return (
    <div className="satellite-preview-card glass-panel">
      {/* Top Telemetry Header */}
      <div className="preview-header">
        <div className="telemetry-left">
          <div className="telemetry-badge">
            <Radio size={12} className="pulse-icon" />
            <span>LIVE SCENE TELEMETRY</span>
          </div>
          <div className="target-title-group">
            <h3 className="target-name">Sector 04-B: Coastal Maritime Logistics & Airfield</h3>
            <span className="target-sub">Sentinel-2 MSI Level-2A • 10m Ground Sample Distance</span>
          </div>
        </div>

        <div className="telemetry-right">
          <div className="telemetry-stat">
            <span className="tel-label">Coordinates:</span>
            <span className="tel-val">{cursorPos.lat}, {cursorPos.lon}</span>
          </div>
          <div className="telemetry-stat">
            <span className="tel-label">Cloud Cover:</span>
            <span className="tel-val">0.1% (Optimal)</span>
          </div>
          <div className="telemetry-stat">
            <span className="tel-label">Acquired:</span>
            <span className="tel-val">Sep 18, 2026 • 10:42 UTC</span>
          </div>
        </div>
      </div>

      {/* Main Viewport Container */}
      <div
        className={`preview-viewport band-${bandPreset}`}
        onMouseMove={handleMouseMove}
      >
        <img
          src={demoImage}
          alt="Satellite Remote Sensing Observation Tile"
          className="preview-image"
          loading="eager"
        />

        {/* MGRS Geospatial Reticle Grid Overlay */}
        {showGrid && (
          <div className="viewport-grid-overlay">
            <div className="grid-crosshair center-crosshair" />
            <div className="grid-tick tick-top">31U ET 4210</div>
            <div className="grid-tick tick-right">5756000m N</div>
            <div className="grid-tick tick-bottom">31U ET 4250</div>
            <div className="grid-tick tick-left">0576000m E</div>
          </div>
        )}

        {/* Land Cover Classification Semantic Tint Overlay */}
        {showLandCover && (
          <div className="landcover-overlay-layer">
            <div className="landcover-legend">
              <span className="legend-item"><span className="swatch swatch-water" /> Water (38%)</span>
              <span className="legend-item"><span className="swatch swatch-urban" /> Port Infrastructure (32%)</span>
              <span className="legend-item"><span className="swatch swatch-veg" /> Agriculture / Greens (30%)</span>
            </div>
          </div>
        )}

        {/* Object Detection Oriented Bounding Boxes */}
        {showBoxes &&
          demoDetections.map((det) => (
            <div
              key={det.id}
              className={`detection-bbox bbox-${det.category} ${
                activeObject?.id === det.id ? 'active-target' : ''
              }`}
              style={{
                top: det.box.top,
                left: det.box.left,
                width: det.box.width,
                height: det.box.height,
              }}
              onClick={() => setActiveObject(det)}
            >
              <div className="bbox-label">
                <span className="bbox-text">{det.label.split('(')[0]}</span>
                <span className="bbox-conf">{det.confidence}</span>
              </div>
            </div>
          ))}

        {/* Selected Object Attributes Popover */}
        {activeObject && (
          <div className="object-inspector-popover glass-panel">
            <div className="popover-header">
              <div className="popover-title">
                <Crosshair size={14} color="var(--accent-cyan)" />
                <span>{activeObject.label}</span>
              </div>
              <button
                className="popover-close"
                onClick={() => setActiveObject(null)}
              >
                ✕
              </button>
            </div>
            <div className="popover-body">
              <div className="popover-row">
                <span>Class:</span>
                <strong style={{ textTransform: 'capitalize' }}>{activeObject.category}</strong>
              </div>
              <div className="popover-row">
                <span>Confidence:</span>
                <strong style={{ color: 'var(--accent-emerald)' }}>{activeObject.confidence}</strong>
              </div>
              <div className="popover-row">
                <span>Dimensions:</span>
                <strong>{activeObject.dimensions}</strong>
              </div>
              <div className="popover-row">
                <span>Heading:</span>
                <strong>{activeObject.heading}</strong>
              </div>
            </div>
            <button
              className="btn btn-primary popover-action-btn"
              onClick={() => navigate('/objects')}
            >
              Open Object Explorer
            </button>
          </div>
        )}

        {/* Live HUD Floating Compass & Scale */}
        <div className="hud-corner-watermark">
          <div className="hud-scale">
            <div className="scale-bar" />
            <span>200 meters</span>
          </div>
          <div className="hud-compass" title="True North">
            <Compass size={18} />
            <span>N</span>
          </div>
        </div>

        {/* Demo Notice Badge */}
        <div className="demo-notice-pill">
          <span>Demonstration Satellite Tile • Sentinel-2 Simulation</span>
        </div>
      </div>

      {/* Interactive Controls & Filter Toolbar */}
      <div className="preview-toolbar">
        <div className="toolbar-group">
          <span className="toolbar-label">
            <Sliders size={14} /> Layer Overlays:
          </span>
          <button
            className={`toolbar-btn ${showBoxes ? 'active' : ''}`}
            onClick={() => setShowBoxes((v) => !v)}
            title="Toggle Object Detection Bounding Boxes"
          >
            <Crosshair size={14} />
            <span>Bounding Boxes</span>
            {showBoxes && <Check size={12} className="btn-check" />}
          </button>

          <button
            className={`toolbar-btn ${showLandCover ? 'active' : ''}`}
            onClick={() => setShowLandCover((v) => !v)}
            title="Toggle Semantic Land Cover Segmentation Masks"
          >
            <Layers size={14} />
            <span>Land Cover Mask</span>
            {showLandCover && <Check size={12} className="btn-check" />}
          </button>

          <button
            className={`toolbar-btn ${showGrid ? 'active' : ''}`}
            onClick={() => setShowGrid((v) => !v)}
            title="Toggle MGRS Coordinate Grid"
          >
            <Grid size={14} />
            <span>MGRS Grid</span>
            {showGrid && <Check size={12} className="btn-check" />}
          </button>
        </div>

        <div className="toolbar-group">
          <span className="toolbar-label">Band Composite:</span>
          <div className="band-selector-pill">
            <button
              className={`band-chip ${bandPreset === 'natural' ? 'active' : ''}`}
              onClick={() => setBandPreset('natural')}
            >
              Natural (RGB)
            </button>
            <button
              className={`band-chip ${bandPreset === 'cir' ? 'active' : ''}`}
              onClick={() => setBandPreset('cir')}
            >
              Color Infrared (CIR)
            </button>
            <button
              className={`band-chip ${bandPreset === 'ndvi' ? 'active' : ''}`}
              onClick={() => setBandPreset('ndvi')}
            >
              NDVI Veg
            </button>
          </div>
        </div>

        <div className="toolbar-actions">
          <button
            className="btn btn-secondary toolbar-cta"
            onClick={() => navigate('/ask')}
          >
            <Sparkles size={14} color="var(--accent-cyan)" />
            <span>Ask SatQuery About This Scene</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SatellitePreview;
