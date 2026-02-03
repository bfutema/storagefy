import * as S from './FolderList.styles';
import { FolderCard } from '../FolderCard';
import type { FolderItem } from '../../types/folder';

interface FolderListProps {
  folders: FolderItem[];
  selectedFolderId?: string;
  onFolderClick?: (folder: FolderItem) => void;
  onFolderInfoClick?: (folder: FolderItem) => void;
}

export function FolderList({
  folders,
  selectedFolderId,
  onFolderClick,
  onFolderInfoClick,
}: FolderListProps) {
  return (
    <S.List>
      {folders.map((folder) => (
        <S.ListItem key={folder.id}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => onFolderClick?.(folder)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onFolderClick?.(folder);
              }
            }}
          >
            <FolderCard
              folder={folder}
              selected={folder.id === selectedFolderId}
              onInfoClick={onFolderInfoClick}
            />
          </div>
        </S.ListItem>
      ))}
    </S.List>
  );
}
