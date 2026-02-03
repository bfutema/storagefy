import { createGlobalStyle } from 'styled-components';

export const ScrollbarStyles = createGlobalStyle`
  .sidebar-scroll,
  .main-content-scroll,
  .drawer-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(128, 128, 128, 0.4) transparent;
  }

  .sidebar-scroll::-webkit-scrollbar,
  .main-content-scroll::-webkit-scrollbar,
  .drawer-scroll::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .sidebar-scroll::-webkit-scrollbar-track,
  .main-content-scroll::-webkit-scrollbar-track,
  .drawer-scroll::-webkit-scrollbar-track {
    background: transparent;
  }

  .sidebar-scroll::-webkit-scrollbar-thumb,
  .main-content-scroll::-webkit-scrollbar-thumb,
  .drawer-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.35);
    border-radius: 3px;
  }

  .sidebar-scroll::-webkit-scrollbar-thumb:hover,
  .main-content-scroll::-webkit-scrollbar-thumb:hover,
  .drawer-scroll::-webkit-scrollbar-thumb:hover {
    background-color: rgba(128, 128, 128, 0.5);
  }
`;
