import * as S from './FileCard.styles';
import { FileIcon } from '../FileIcon';
import { getFileTypeBadgeColor } from '../../utils/fileTypeBadgeColor';
import { useTheme } from 'styled-components';
import type { FileItem } from '../../types/file';

interface FileCardProps {
  file: FileItem;
  variant?: 'grid' | 'tiles';
}

export function FileCard({ file, variant = 'grid' }: FileCardProps) {
  const theme = useTheme();
  const badgeColor = getFileTypeBadgeColor(file.extension, theme.colors.fileTypeBadge);
  const iconSize = variant === 'tiles' ? 32 : 56;

  return (
    <S.Card $variant={variant}>
      <S.IconArea $variant={variant}>
        <FileIcon extension={file.extension} size={iconSize} variant="muted" />
        <S.TypeBadge $color={badgeColor}>{file.extension}</S.TypeBadge>
      </S.IconArea>
      <S.FileName $variant={variant} title={`${file.name}.${file.extension}`}>
        {file.name}.{file.extension}
      </S.FileName>
    </S.Card>
  );
}
