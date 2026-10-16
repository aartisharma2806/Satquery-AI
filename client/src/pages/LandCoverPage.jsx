/**
 * SatQuery AI - Land Cover Analysis Page (Semantic Segmentation Placeholder)
 */
import React from 'react';
import { Layers } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder.jsx';

export const LandCoverPage = () => {
  const capabilities = [
    {
      name: 'Pixel-Level Semantic Segmentation',
      description: 'Accurate classification of multi-spectral bands into water, forest, cropland, urban, and barren land.',
      tag: 'Segmentation',
      ready: false,
    },
    {
      name: 'Surface Area & Percentage Aggregation',
      description: 'Automatic computation of square kilometers and proportional distribution across surface classes.',
      tag: 'Geospatial Analytics',
      ready: false,
    },
    {
      name: 'Multi-Spectral Band Support',
      description: 'Compatibility with Sentinel-2 10m/20m bands, Landsat-8/9 thermal bands, and standard RGB aerial imagery.',
      tag: 'Sensor Ingestion',
      ready: false,
    },
    {
      name: 'Interactive Mask Overlay & Opacity Slider',
      description: 'Dynamic canvas rendering with selectable class color palettes and transparency blending.',
      tag: 'Visualization',
      ready: false,
    },
  ];

  return (
    <PagePlaceholder
      title="Land Cover Analysis — Semantic Segmentation"
      icon={Layers}
      badgeText="Module Placeholder"
      badgeColor="amber"
      summary="Segment terrestrial scenes into detailed environmental categories. Monitor urban boundary expansion, deforestation, reservoir depletion, and agricultural crop health through dense pixel classification."
      capabilities={capabilities}
    />
  );
};

export default LandCoverPage;
