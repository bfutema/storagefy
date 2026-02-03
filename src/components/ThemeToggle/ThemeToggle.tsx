import * as S from './ThemeToggle.styles';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <S.ToggleButton
      onClick={toggleTheme}
      aria-label={themeMode === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
      title={themeMode === 'dark' ? 'Modo claro' : 'Modo escuro'}
    >
      {themeMode === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </S.ToggleButton>
  );
}
