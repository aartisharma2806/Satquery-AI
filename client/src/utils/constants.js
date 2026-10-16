/**
 * SatQuery AI - Navigation & Application Constants
 */

export const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/',
    iconName: 'LayoutDashboard',
    description: 'Central mission control for active imagery, query history, and model diagnostics.',
    status: 'Foundation Ready',
    tag: 'Core',
  },
  {
    id: 'ask-satquery',
    label: 'Ask SatQuery',
    path: '/ask',
    iconName: 'Sparkles',
    description: 'Interactive natural language vision-language assistant for remote sensing queries.',
    status: 'Planned Phase 2',
    tag: 'Vision-Language',
  },
  {
    id: 'object-explorer',
    label: 'Object Explorer',
    path: '/objects',
    iconName: 'Crosshair',
    description: 'Detect, count, and localize aircraft, ships, storage tanks, and geospatial assets.',
    status: 'Planned Phase 2',
    tag: 'Detection',
  },
  {
    id: 'land-cover',
    label: 'Land Cover Analysis',
    path: '/land-cover',
    iconName: 'Layers',
    description: 'Semantic segmentation of water bodies, urban sprawl, vegetation, and bare earth.',
    status: 'Planned Phase 3',
    tag: 'Segmentation',
  },
  {
    id: 'change-explorer',
    label: 'Change Explorer',
    path: '/change',
    iconName: 'Clock',
    description: 'Bi-temporal satellite image alignment and difference detection over time.',
    status: 'Planned Phase 3',
    tag: 'Bi-Temporal',
  },
  {
    id: 'evaluation',
    label: 'Evaluation Dashboard',
    path: '/evaluation',
    iconName: 'BarChart3',
    description: 'VQA accuracy, grounding mAP, segmentation IoU, and hallucination metrics.',
    status: 'Planned Phase 4',
    tag: 'Diagnostics',
  },
  {
    id: 'about',
    label: 'About SatQuery',
    path: '/about',
    iconName: 'Info',
    description: 'Architecture specifications, remote sensing sensors supported, and MERN stack roadmap.',
    status: 'Ready',
    tag: 'System',
  },
];

export const API_BASE_URL = '/api';
