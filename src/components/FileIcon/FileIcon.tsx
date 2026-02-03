import * as S from './FileIcon.styles';
import { getFileIcon } from '../../utils/fileIcons';

interface FileIconProps {
  extension: string;
  size?: number;
  variant?: 'default' | 'muted';
}

export function FileIcon({ extension, size = 40, variant = 'default' }: FileIconProps) {
  const Icon = getFileIcon(extension);
  return (
    <S.IconWrapper $size={size} $variant={variant}>
      <Icon size={size * 0.6} />
    </S.IconWrapper>
  );
}
