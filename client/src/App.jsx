/**
 * SatQuery AI - Main React Application Component
 * Sets up routing, global app context, and page layouts.
 */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext.jsx';
import MainLayout from './layouts/MainLayout.jsx';

// Pages
import DashboardPage from './pages/DashboardPage.jsx';
import AskSatQueryPage from './pages/AskSatQueryPage.jsx';
import ObjectExplorerPage from './pages/ObjectExplorerPage.jsx';
import LandCoverPage from './pages/LandCoverPage.jsx';
import ChangeExplorerPage from './pages/ChangeExplorerPage.jsx';
import EvaluationPage from './pages/EvaluationPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="ask" element={<AskSatQueryPage />} />
            <Route path="objects" element={<ObjectExplorerPage />} />
            <Route path="land-cover" element={<LandCoverPage />} />
            <Route path="change" element={<ChangeExplorerPage />} />
            <Route path="evaluation" element={<EvaluationPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
