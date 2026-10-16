# SatQuery AI — System Architecture & Design Specification

**SatQuery AI — An Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis Through Text Queries**

---

## 1. Executive Overview

SatQuery AI is designed to make satellite and aerial Earth observation data accessible and interactive through natural language questions. Rather than requiring users to manually run complex GIS workflows or write code for specialized image processing algorithms, SatQuery AI provides an intuitive conversational interface where users can query satellite imagery directly (e.g., *"How many cargo ships are docked in the port?"*, *"Segment the flood-inundated regions in this scene"*, or *"What infrastructure changes occurred between 2021 and 2024?"*).

---

## 2. Technology Stack

SatQuery AI adopts a modular **MERN** web stack combined with a clean microservice boundary for heavy remote sensing AI computation:

```
+-----------------------------------------------------------------------+
|                         Frontend (Client)                             |
|  - React.js 18 + Vite                                                 |
|  - React Router DOM                                                   |
|  - Responsive Vanilla CSS (Geospatial & Aerospace Dark Theme)         |
|  - Lucide Icons & Custom SVG Geospatial Assets                        |
+-----------------------------------------------------------------------+
                                   |
                         HTTP / REST API (JSON)
                                   |
+-----------------------------------------------------------------------+
|                         Backend (Server)                              |
|  - Node.js & Express.js REST API                                      |
|  - Centralized Error Handling & Request Logging                       |
|  - Upload Validation & Metadata Preprocessing                         |
|  - Query Routing Engine                                               |
+-----------------------------------------------------------------------+
            |                                               |
   Database Persistence                     Future AI Inference (Microservice)
            |                                               |
+--------------------------+             +----------------------------------+
|   MongoDB via Mongoose   |             |   Python AI Service (Phase 2+)   |
| - Query histories        |             | - PyTorch & Hugging Face VLMs    |
| - Imagery metadata       |             | - OpenCV & GDAL/Rasterio         |
| - Annotations & results  |             | - DOTA / FAIR1M / RSVQA Models   |
+--------------------------+             +----------------------------------+
```

---

## 3. Modular Folder Structure

```
SatQuery-AI/
├── client/                     # Frontend React + Vite application
│   ├── public/                 # Static public assets (icons, SVGs, favicon)
│   ├── src/
│   │   ├── assets/             # Images, illustrations, branding assets
│   │   ├── components/         # Reusable UI components (Navbar, Sidebar, Footer, etc.)
│   │   ├── context/            # Global React state (AppContext)
│   │   ├── hooks/              # Custom React hooks (useHealthCheck)
│   │   ├── layouts/            # Page shell layouts (MainLayout)
│   │   ├── pages/              # Route view pages (Dashboard, Ask, Objects, etc.)
│   │   ├── services/           # API communication client
│   │   ├── styles/             # Design tokens, global CSS, layout styles
│   │   ├── utils/              # Route constants, helpers
│   │   ├── App.jsx             # Route definitions & router setup
│   │   └── main.jsx            # React root mount
│   ├── index.html              # HTML5 template
│   ├── package.json            # Client dependencies and scripts
│   └── vite.config.js          # Vite build & development proxy configuration
│
├── server/                     # Backend Node.js + Express REST API
│   ├── src/
│   │   ├── config/             # Environment & MongoDB connection configs
│   │   ├── controllers/        # Route logic controllers (health, query, image)
│   │   ├── middleware/         # Logging, error handling, security policies
│   │   ├── models/             # Mongoose schemas (Analysis, Image, Results)
│   │   ├── routes/             # Express route definitions
│   │   ├── services/           # Business logic & health diagnostic services
│   │   ├── utils/              # API response formatting & helpers
│   │   ├── app.js              # Express app configuration & middleware pipeline
│   │   └── server.js           # HTTP listener & database connection entry
│   ├── uploads/                # Safe local storage for uploaded satellite tiles
│   ├── .env.example            # Backend environment template
│   └── package.json            # Backend dependencies and scripts
│
├── docs/                       # Architecture documentation and guides
├── tests/                      # Automated test suites
├── .gitignore                  # Git ignore rules for node_modules, env, weights
└── README.md                   # Project overview, installation, and run guide
```

---

## 4. Analysis Modules & Capabilities

1. **Ask SatQuery (Vision-Language Assistant)**:
   - Natural language question answering on satellite scenes.
   - Grounding and bounding attribution showing which pixels substantiate the answer.
2. **Object Explorer (Detection & Counting)**:
   - Small object detection (planes, ships, storage containers, vehicles).
   - Category-specific counts and oriented bounding box (OBB) visualization.
3. **Land Cover Analysis (Semantic Segmentation)**:
   - Multi-spectral land use classification (water, forest, urban, farmland, bare soil).
   - Area calculation and distribution percentages.
4. **Change Explorer (Bi-Temporal Comparison)**:
   - Co-registration and pixel-level difference mapping between before-and-after scenes.
   - Assessment of disaster damage, urbanization, and environmental shifts.
5. **Evaluation Dashboard**:
   - Accuracy, mAP, IoU, and hallucination diagnostics across remote sensing benchmarks.

---

## 5. Security & Best Practices

- **Zero-Credential Commits**: All secrets, database URLs, and API keys reside exclusively in `.env` files (excluded via `.gitignore`).
- **Heavy Asset Protection**: AI model checkpoints (`*.pt`, `*.bin`, `*.onnx`) and uploaded raw imagery are excluded from Git history.
- **Graceful Fault Tolerance**: The Express backend starts and serves health diagnostics even if MongoDB is not currently configured or offline.
- **Safe Upload Architecture**: Uploads are restricted by size limits and validated before processing.
