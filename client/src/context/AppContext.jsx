/**
 * SatQuery AI - Global Application Context
 * Provides sidebar toggle state, server connection state, and global alerts.
 */
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [serverHealth, setServerHealth] = useState(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        closeSidebar,
        serverHealth,
        setServerHealth,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
