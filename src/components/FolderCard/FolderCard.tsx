import * as S from './FolderCard.styles';
import { FaFolder } from 'react-icons/fa';
import type { FolderItem } from '../../types/folder';

interface FolderCardProps {
  folder: FolderItem;
  selected?: boolean;
  onInfoClick?: (folder: FolderItem) => void;
}

export function FolderCard({ folder, selected, onInfoClick }: FolderCardProps) {
  const handleInfoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onInfoClick?.(folder);
  };

  return (
    <S.Card $selected={selected}>
      <S.InfoIcon
        type="button"
        aria-label="Mais informações"
        onClick={handleInfoClick}
      >
        i
      </S.InfoIcon>
      <S.IconArea>
        <FaFolder size={48} />
      </S.IconArea>
      <S.FolderName>{folder.name}</S.FolderName>
      <S.FileCount>{folder.fileCount} arquivos</S.FileCount>
    </S.Card>
  );
}
