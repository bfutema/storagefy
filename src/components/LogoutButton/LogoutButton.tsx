import { useNavigate } from 'react-router-dom';
import * as S from './LogoutButton.styles';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';

export function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <S.Button onClick={handleClick} type="button" aria-label="Sair">
      <FaSignOutAlt size={16} />
      Sair
    </S.Button>
  );
}
