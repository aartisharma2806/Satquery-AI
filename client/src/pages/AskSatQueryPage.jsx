/**
 * SatQuery AI - Ask SatQuery Page (VQA Module Placeholder)
 */
import React from 'react';
import { Sparkles } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder.jsx';

export const AskSatQueryPage = () => {
  const capabilities = [
    {
      name: 'Natural Language Query Understanding',
      description: 'Parses complex multi-sentence geospatial prompts, intent classification, and entity grounding.',
      tag: 'NLP Pipeline',
      ready: false,
    },
    {
      name: 'Multimodal Vision-Language Reasoning',
      description: 'Jointly attends over high-resolution satellite imagery and text to answer complex visual questions.',
      tag: 'VLM Core',
      ready: false,
    },
    {
      name: 'Visual Grounding & Evidence Attribution',
      description: 'Highlights the exact coordinates and image regions backing up the generated textual answer.',
      tag: 'Explainability',
      ready: false,
    },
    {
      name: 'Automated Query Routing',
      description: 'Dispatches counting queries to detection models and area queries to segmentation pipelines.',
      tag: 'Routing Engine',
      ready: false,
    },
  ];

  return (
    <PagePlaceholder
      title="Ask SatQuery — Vision-Language Assistant"
      icon={Sparkles}
      badgeText="Module Placeholder"
      badgeColor="cyan"
      summary="Interact with satellite and aerial imagery through conversational prompts. Ask about vessel density, bridge integrity, crop vitality, or environmental features, and receive grounded answers backed by remote sensing evidence."
      capabilities={capabilities}
    />
  );
};

export default AskSatQueryPage;
