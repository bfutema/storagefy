import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Para GitHub Pages: BASE_URL é definido pelo Vite (ex: /storagefy/)
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components';
import { FileExplorerPage, HomePage, LoginPage, SettingsPage } from './pages';
import { ScrollbarStyles } from './styles/scrollbar';

function App() {
  return (
    <ThemeProvider>
      <ScrollbarStyles />
      <AuthProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/arquivos" element={<FileExplorerPage />} />
              <Route path="/configuracoes" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
