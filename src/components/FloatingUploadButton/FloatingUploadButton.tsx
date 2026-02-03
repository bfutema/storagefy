import * as S from './FloatingUploadButton.styles';
import { FaPlus } from 'react-icons/fa';

interface FloatingUploadButtonProps {
  onClick?: () => void;
  ariaLabel?: string;
}

export function FloatingUploadButton({
  onClick,
  ariaLabel = 'Enviar arquivo',
}: FloatingUploadButtonProps) {
  return (
    <S.Button onClick={onClick} type="button" aria-label={ariaLabel}>
      <FaPlus size={24} />
    </S.Button>
  );
}
