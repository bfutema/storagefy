import * as S from './FileRow.styles';
import { FileIcon } from '../FileIcon';
import { formatFileSize } from '../../utils/formatFileSize';
import { formatDate } from '../../utils/formatDate';
import type { FileItem } from '../../types/file';

interface FileRowProps {
  file: FileItem;
  showDetails?: boolean;
  compact?: boolean;
}

export function FileRow({ file, showDetails = false, compact = false }: FileRowProps) {
  return (
    <S.Row $compact={compact}>
      <S.IconCell>
        <FileIcon extension={file.extension} size={24} variant="muted" />
      </S.IconCell>
      <S.NameCell title={`${file.name}.${file.extension}`}>
        {file.name}.{file.extension}
      </S.NameCell>
      {showDetails && (
        <>
          <S.TypeCell>{file.extension}</S.TypeCell>
          <S.SizeCell>{formatFileSize(file.size)}</S.SizeCell>
          <S.DateCell>{formatDate(file.modifiedAt)}</S.DateCell>
        </>
      )}
    </S.Row>
  );
}
