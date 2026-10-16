/**
 * SatQuery AI - Change Explorer Page (Bi-Temporal Change Detection Placeholder)
 */
import React from 'react';
import { Clock } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder.jsx';

export const ChangeExplorerPage = () => {
  const capabilities = [
    {
      name: 'Bi-Temporal Image Registration',
      description: 'Spatial and radiometric co-registration of pre-event and post-event satellite observations.',
      tag: 'Alignment',
      ready: false,
    },
    {
      name: 'Pixel-Wise Difference Mapping',
      description: 'Isolate significant structural and vegetation changes while filtering out atmospheric variations and clouds.',
      tag: 'Diff Engine',
      ready: false,
    },
    {
      name: 'Disaster Damage Assessment',
      description: 'Quantify flood inundation, wildfire burn scars, and hurricane structural destruction.',
      tag: 'Hazard Monitoring',
      ready: false,
    },
    {
      name: 'Interactive Split-Screen Swipe Comparison',
      description: 'Side-by-side and interactive swipe curtains for before-and-after visual inspection.',
      tag: 'Comparison UI',
      ready: false,
    },
  ];

  return (
    <PagePlaceholder
      title="Change Explorer — Bi-Temporal Remote Sensing Analysis"
      icon={Clock}
      badgeText="Module Placeholder"
      badgeColor="cyan"
      summary="Compare multi-date satellite observations of the exact same geographic footprint. Detect human development, disaster aftermath, seasonal changes, and environmental shifts over time."
      capabilities={capabilities}
    />
  );
};

export default ChangeExplorerPage;
