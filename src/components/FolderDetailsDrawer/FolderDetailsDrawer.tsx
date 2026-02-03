import * as S from './FolderDetailsDrawer.styles';
import { FaFolder } from 'react-icons/fa';
import type { FolderItem } from '../../types/folder';

interface FolderDetailsDrawerProps {
  folder: FolderItem | null;
  onClose: () => void;
}

export function FolderDetailsDrawer({ folder, onClose }: FolderDetailsDrawerProps) {
  if (!folder) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <S.Overlay onClick={handleOverlayClick} aria-hidden="true" />
      <S.Drawer role="dialog" aria-label="Detalhes da pasta">
        <S.Content className="drawer-scroll">
          <S.Preview>
            <FaFolder size={64} />
          </S.Preview>

          <S.FolderHeader>
            <S.FolderName>{folder.name}</S.FolderName>
          </S.FolderHeader>

          <S.Section>
            <S.SectionTitle>Informações</S.SectionTitle>
            <S.InfoGrid>
              <S.InfoLabel>Caminho:</S.InfoLabel>
              <S.InfoValue>{folder.path || '/'}</S.InfoValue>
              <S.InfoLabel>Total de arquivos:</S.InfoLabel>
              <S.InfoValue>{folder.fileCount}</S.InfoValue>
              <S.InfoLabel>Total de subpastas:</S.InfoLabel>
              <S.InfoValue>{folder.subfolderCount ?? 0}</S.InfoValue>
            </S.InfoGrid>
          </S.Section>
        </S.Content>
      </S.Drawer>
    </>
  );
}
