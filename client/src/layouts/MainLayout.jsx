/**
 * SatQuery AI - Main Application Layout
 * Shell providing persistent Sidebar, Top Navbar, and dynamic page outlet.
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export const MainLayout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-layout">
        <Navbar />
        <main className="content-area">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
