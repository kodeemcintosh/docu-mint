import React, { useState, useMemo, useContext, createContext, PropsWithChildren } from 'react';

export const SidebarContext = createContext({ isSidebarOpen: false, toggleSidebar: () => {} });

interface SidebarProviderProps extends PropsWithChildren {}
export const SidebarProvider = ({ children }: PropsWithChildren) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
          {children}
        </SidebarContext.Provider>
    );
};
