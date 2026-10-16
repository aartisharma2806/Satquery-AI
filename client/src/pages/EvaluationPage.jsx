/**
 * SatQuery AI - Evaluation Dashboard Page (Model Metrics Placeholder)
 */
import React from 'react';
import { BarChart3 } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder.jsx';

export const EvaluationPage = () => {
  const capabilities = [
    {
      name: 'VQA Accuracy & Hallucination Metrics',
      description: 'Systematic benchmarking on RSVQA, RSIVQA, and custom satellite visual question answering test sets.',
      tag: 'Benchmarking',
      ready: false,
    },
    {
      name: 'Object Detection mAP & Precision-Recall Curves',
      description: 'Mean Average Precision evaluation across multi-scale satellite targets and oriented bounding boxes.',
      tag: 'Detection Metrics',
      ready: false,
    },
    {
      name: 'Mean Intersection over Union (mIoU)',
      description: 'Segmentation accuracy evaluation across complex land cover classes and surface water boundaries.',
      tag: 'Segmentation Metrics',
      ready: false,
    },
    {
      name: 'Latency & Inference Profiling',
      description: 'End-to-end timing breakdown across query routing, tile preprocessing, and VLM GPU inference.',
      tag: 'Performance Profiling',
      ready: false,
    },
  ];

  return (
    <PagePlaceholder
      title="Evaluation Dashboard — Diagnostics & Benchmarks"
      icon={BarChart3}
      badgeText="Module Placeholder"
      badgeColor="purple"
      summary="Comprehensive quantitative evaluation of multimodal vision-language models, detection heads, and segmentation models against standard remote sensing benchmarks."
      capabilities={capabilities}
    />
  );
};

export default EvaluationPage;
