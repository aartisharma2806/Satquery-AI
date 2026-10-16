# SatQuery AI — Interactive Multimodal Remote Sensing Vision-Language Assistant

> **An Interactive Vision-Language Assistant for Multimodal Remote Sensing Image Analysis Through Text Queries**

SatQuery AI bridges Earth observation satellite imagery with conversational artificial intelligence. It enables researchers, urban planners, environmentalists, and defense analysts to query complex satellite imagery through natural language prompts, returning grounded answers, object detections, land cover segmentations, and bi-temporal change assessments.

---

## 🛰️ Key System Capabilities (Roadmap)

- **Ask SatQuery (VQA)**: Natural language question answering over high-resolution satellite scenes with pixel attribution.
- **Object Explorer**: Localized detection and automated counting for aircraft, maritime vessels, oil storage tanks, and vehicles using oriented bounding boxes (OBB).
- **Land Cover Analysis**: Multi-spectral semantic segmentation classifying terrain into water bodies, urban areas, vegetation, and bare soil.
- **Change Explorer**: Bi-temporal alignment and difference detection to quantify disaster impact, deforestation, and infrastructure sprawl over time.
- **Evaluation Dashboard**: Benchmark analytics measuring accuracy, mAP, and IoU against standard remote sensing datasets (RSVQA, DOTA, FAIR1M).

---

## 🛠️ Technology Stack

SatQuery AI is built using the **MERN** stack with a modular microservice-ready architecture:

- **Frontend**:
  - **React 18** (Modern functional components & hooks)
  - **Vite** (Next-generation lightning-fast frontend tooling)
  - **React Router DOM v6** (Client-side routing)
  - **Lucide React** (Clean iconography)
  - **Vanilla CSS** (Custom dark geospatial/aerospace design system with glassmorphic styling)
- **Backend**:
  - **Node.js** (JavaScript runtime)
  - **Express.js** (REST API framework)
  - **Mongoose / MongoDB** (Document database with graceful fallback when offline)
  - **CORS & Dotenv** (Security, cross-origin communication, and environment configuration)
- **AI Service Boundary (Future Phase)**:
  - Architecture prepared for a standalone **Python AI microservice** (PyTorch, Hugging Face Transformers, OpenCV, GDAL/Rasterio) without coupling heavy AI weights to the web backend.

---

## 📁 Project Folder Structure

```
Satquery AI/
├── client/                     # React + Vite Frontend Application
│   ├── public/                 # Static assets (satellite SVG favicon)
│   ├── src/
│   │   ├── assets/             # Images, sensor icons, illustrations
│   │   ├── components/         # Reusable UI (Navbar, Sidebar, Footer, PagePlaceholder)
│   │   ├── context/            # Global state management (AppContext)
│   │   ├── hooks/              # Custom hooks (useHealthCheck)
│   │   ├── layouts/            # Page shells (MainLayout)
│   │   ├── pages/              # View pages (Dashboard, Ask, Objects, Land Cover, Change, Evaluation, About)
│   │   ├── services/           # Backend API clients (api.js)
│   │   ├── styles/             # Global CSS design tokens (index.css, layout.css)
│   │   ├── utils/              # Route constants & helper definitions
│   │   ├── App.jsx             # React Router configuration
│   │   └── main.jsx            # Application mount point
│   ├── index.html              # HTML template with Google Fonts (Inter, JetBrains Mono)
│   ├── package.json            # Frontend dependencies & scripts
│   └── vite.config.js          # Vite config with /api reverse proxy
│
├── server/                     # Express.js REST API Backend
│   ├── src/
│   │   ├── config/             # Environment validation (env.js) & MongoDB connection (db.js)
│   │   ├── controllers/        # Request handlers (healthController.js)
│   │   ├── middleware/         # Centralized error handler & request logger
│   │   ├── models/             # Mongoose data models (analysisModel.js)
│   │   ├── routes/             # API routes (healthRoutes.js, index.js)
│   │   ├── services/           # Business logic & system diagnostics (healthService.js)
│   │   ├── utils/              # Standardized API response formatters (apiResponse.js)
│   │   ├── app.js              # Express middleware and routing pipeline
│   │   └── server.js           # Entry point with graceful shutdown
│   ├── uploads/                # Local directory for uploaded satellite imagery (.gitkeep)
│   ├── .env.example            # Backend environment template
│   ├── .env                    # Local environment variables
│   └── package.json            # Backend dependencies & scripts
│
├── docs/                       # Architectural documentation & specifications
│   └── architecture.md
├── tests/                      # Automated health checks and test scripts
│   ├── healthCheck.test.js
│   └── README.md
├── .gitignore                  # Git exclusions (node_modules, env, model weights, uploads)
└── README.md                   # Project documentation
```

---

## 📋 Prerequisites

Before running the project, ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended, tested on v26)
- **npm** (v9.0.0 or higher)
- *(Optional)* **MongoDB** (Local Community Server or MongoDB Atlas URI). The server automatically starts in standalone mode if MongoDB is not running.

---

## ⚙️ Environment Variables

The backend relies on environment variables configured in `server/.env`. A template is provided in `server/.env.example`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `PORT` | `5000` | Port on which the Express server listens |
| `NODE_ENV` | `development` | Runtime environment (`development` \| `production`) |
| `CLIENT_URL` | `http://localhost:5173` | Allowed CORS origin for the Vite frontend |
| `MONGODB_URI` | `mongodb://localhost:27017/satquery_ai` | MongoDB connection string (graceful fallback if offline) |
| `MAX_FILE_SIZE` | `52428800` (50MB) | Maximum file size limit for satellite image uploads |
| `PYTHON_AI_SERVICE_URL` | `http://localhost:8000` | Target URL reserved for future Python AI microservice |

---

## 🚀 How to Run the Project

You can run the frontend and backend in separate terminals:

### 1. Start the Backend Server (Express)

```bash
# Navigate to the server directory
cd server

# Install dependencies (if not already installed)
npm install

# Start the server with automatic reloading (Nodemon)
npm run dev

# Or start in standard production mode
npm start
```

- **Backend Base URL**: `http://localhost:5000`
- **Health Check Endpoint**: `http://localhost:5000/api/health`

### 2. Start the Frontend Client (React + Vite)

Open a second terminal window:

```bash
# Navigate to the client directory
cd client

# Install dependencies (if not already installed)
npm install

# Start the Vite development server
npm run dev
```

- **Frontend URL**: `http://localhost:5173`

The Vite dev server automatically proxies all `/api/*` requests directly to `http://localhost:5000`.

---

## 🧪 Testing Backend Health

SatQuery AI includes a health check verification script:

```bash
# With the server running, execute:
node tests/healthCheck.test.js
```

---

## 📌 Current Implementation Status (Phase 1 Complete)

- [x] Full-stack directory structure created.
- [x] Express backend configured with modular architecture (`config`, `controllers`, `models`, `routes`, `middleware`, `services`, `utils`).
- [x] Health check endpoint operational (`GET /api/health`).
- [x] Centralized error handling and request logging middleware.
- [x] MongoDB Mongoose integration with offline fallback.
- [x] React + Vite frontend application shell with responsive sidebar navigation and dark theme.
- [x] Working placeholder views for all 7 modules (Dashboard, Ask SatQuery, Object Explorer, Land Cover, Change Explorer, Evaluation, About).
- [x] Real-time frontend-to-backend connectivity status badge in Navbar.
- [x] Secure `.gitignore` excluding environment files, node_modules, upload cache, and model weights.
- [x] Safe placeholder architecture prepared for future Python AI service integration.

---

## 🛡️ License

ISC License. Built for educational and research purposes in multimodal remote sensing analysis.
