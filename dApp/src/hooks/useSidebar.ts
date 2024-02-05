import { useContext } from 'react';
import { SidebarContext } from "@providers/sidebar";

export const useSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);

  return { isOpen: isSidebarOpen, toggle: toggleSidebar};
}