import * as S from './FileList.styles';
import * as RowS from '../FileRow/FileRow.styles';
import { FileCard } from '../FileCard';
import { FileRow } from '../FileRow';
import type { FileItem } from '../../types/file';
import type { ViewType } from '../../types/view';

interface FileListProps {
  files: FileItem[];
  viewType?: ViewType;
  onFileClick?: (file: FileItem) => void;
}

export function FileList({ files, viewType = 'grid', onFileClick }: FileListProps) {
  const handleClick = (file: FileItem) => () => onFileClick?.(file);
  const handleKeyDown = (file: FileItem) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onFileClick?.(file);
    }
  };

  if (viewType === 'details') {
    return (
      <S.DetailsContainer>
        <RowS.TableHeader>
          <div style={{ width: 32, flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>Nome</div>
          <div style={{ flex: '0 0 80px' }}>Tipo</div>
          <div style={{ flex: '0 0 80px', textAlign: 'right' }}>Tamanho</div>
          <div style={{ flex: '0 0 100px', textAlign: 'right' }}>Modificado</div>
        </RowS.TableHeader>
        <S.List $viewType="details">
          {files.map((file) => (
            <S.ListItem key={file.id}>
              <div
                role="button"
                tabIndex={0}
                onClick={handleClick(file)}
                onKeyDown={handleKeyDown(file)}
              >
                <FileRow file={file} showDetails compact />
              </div>
            </S.ListItem>
          ))}
        </S.List>
      </S.DetailsContainer>
    );
  }

  return (
    <S.List $viewType={viewType}>
      {files.map((file) => (
        <S.ListItem key={file.id}>
          <div
            role="button"
            tabIndex={0}
            onClick={handleClick(file)}
            onKeyDown={handleKeyDown(file)}
          >
            {viewType === 'grid' && <FileCard file={file} variant="grid" />}
            {viewType === 'tiles' && <FileCard file={file} variant="tiles" />}
            {viewType === 'list' && (
              <FileRow file={file} showDetails={false} compact />
            )}
          </div>
        </S.ListItem>
      ))}
    </S.List>
  );
}
