import * as S from './UploadButton.styles';
import { FaPlus } from 'react-icons/fa';

interface UploadButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export function UploadButton({ onClick, children = 'Enviar arquivo' }: UploadButtonProps) {
  return (
    <S.Button onClick={onClick} type="button">
      <FaPlus size={16} />
      {children}
    </S.Button>
  );
}
