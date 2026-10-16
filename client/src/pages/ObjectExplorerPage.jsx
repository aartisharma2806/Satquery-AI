/**
 * SatQuery AI - Object Explorer Page (Detection & Counting Placeholder)
 */
import React from 'react';
import { Crosshair } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder.jsx';

export const ObjectExplorerPage = () => {
  const capabilities = [
    {
      name: 'Small-Object Remote Sensing Detection',
      description: 'Specialized detectors trained on DOTA, FAIR1M, and DIOR benchmarks for small geospatial targets.',
      tag: 'Object Detection',
      ready: false,
    },
    {
      name: 'Automated Density & Inventory Counting',
      description: 'Zero-shot and category-specific counting of cargo containers, vehicles, airplanes, and ships.',
      tag: 'Counting',
      ready: false,
    },
    {
      name: 'Oriented Bounding Boxes (OBB)',
      description: 'Rotated bounding box predictions for directional targets regardless of flight heading.',
      tag: 'Geospatial BBoxes',
      ready: false,
    },
    {
      name: 'Confidence Threshold Filtering',
      description: 'Interactive sliders to adjust detection sensitivity, IOU thresholds, and category toggles.',
      tag: 'Interactive Filters',
      ready: false,
    },
  ];

  return (
    <PagePlaceholder
      title="Object Explorer — Geospatial Detection & Counting"
      icon={Crosshair}
      badgeText="Module Placeholder"
      badgeColor="emerald"
      summary="Pinpoint, classify, and enumerate localized features in satellite scenes. Detect aircraft on runways, naval vessels in ports, industrial fuel tanks, and traffic patterns with oriented bounding boxes."
      capabilities={capabilities}
    />
  );
};

export default ObjectExplorerPage;
