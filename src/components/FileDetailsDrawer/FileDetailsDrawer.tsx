import * as S from './FileDetailsDrawer.styles';
import { FileIcon } from '../FileIcon';
import { getFileTypeBadgeColor } from '../../utils/fileTypeBadgeColor';
import { formatFileSize } from '../../utils/formatFileSize';
import { formatDateLong } from '../../utils/formatDateLong';
import { useTheme } from 'styled-components';
import { FaDownload, FaTrash, FaPencilAlt, FaTimes } from 'react-icons/fa';
import type { FileItem } from '../../types/file';

interface FileDetailsDrawerProps {
  file: FileItem | null;
  onClose: () => void;
  onDownload?: (file: FileItem) => void;
  onDelete?: (file: FileItem) => void;
  onDescriptionChange?: (file: FileItem, description: string) => void;
}

export function FileDetailsDrawer({
  file,
  onClose,
  onDownload,
  onDelete,
  onDescriptionChange,
}: FileDetailsDrawerProps) {
  const theme = useTheme();

  if (!file) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      <S.Overlay onClick={handleOverlayClick} aria-hidden="true" />
      <S.Drawer role="dialog" aria-label="Detalhes do arquivo">
        <S.Content className="drawer-scroll">
              <S.Preview>
                <FileIcon extension={file.extension} size={64} variant="muted" />
              </S.Preview>

              <S.FileHeader>
                <S.FileName>{`${file.name}.${file.extension}`}</S.FileName>
                <S.TypeBadge
                  $color={getFileTypeBadgeColor(file.extension, theme.colors.fileTypeBadge)}
                >
                  {file.extension}
                </S.TypeBadge>
              </S.FileHeader>

              <S.Section>
                <S.SectionTitle>Informações</S.SectionTitle>
                <S.InfoGrid>
                  <S.InfoLabel>Criado por:</S.InfoLabel>
                  <S.InfoValue>{file.createdBy ?? '—'}</S.InfoValue>
                  <S.InfoLabel>Criado em:</S.InfoLabel>
                  <S.InfoValue>{formatDateLong(file.createdAt)}</S.InfoValue>
                  <S.InfoLabel>Modificado em:</S.InfoLabel>
                  <S.InfoValue>{formatDateLong(file.modifiedAt)}</S.InfoValue>
                  <S.InfoLabel>Tamanho:</S.InfoLabel>
                  <S.InfoValue>{formatFileSize(file.size)}</S.InfoValue>
                </S.InfoGrid>
              </S.Section>

              <S.Section>
                <S.SectionTitle>
                  Descrição
                  <FaPencilAlt size={12} style={{ opacity: 0.7 }} />
                </S.SectionTitle>
                <S.DescriptionTextarea
                  placeholder="Clique aqui para adicionar uma descrição."
                  value={file.description ?? ''}
                  onChange={(e) => onDescriptionChange?.(file, e.target.value)}
                />
              </S.Section>
        </S.Content>

        <S.Actions>
          <S.CloseButton onClick={onClose} type="button" aria-label="Fechar">
            <FaTimes size={18} />
          </S.CloseButton>
          <S.DownloadButton onClick={() => onDownload?.(file)} type="button">
            <FaDownload size={16} />
            Download
          </S.DownloadButton>
          <S.DeleteButton onClick={() => onDelete?.(file)} type="button">
            <FaTrash size={14} />
            Excluir
          </S.DeleteButton>
        </S.Actions>
      </S.Drawer>
    </>
  );
}
