import * as S from './HamburgerButton.styles';
import { FaBars } from 'react-icons/fa';

interface HamburgerButtonProps {
  onClick: () => void;
  ariaLabel?: string;
}

export function HamburgerButton({
  onClick,
  ariaLabel = 'Abrir menu',
}: HamburgerButtonProps) {
  return (
    <S.Button onClick={onClick} type="button" aria-label={ariaLabel}>
      <FaBars size={20} />
    </S.Button>
  );
}
