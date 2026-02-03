import { useState, useCallback } from 'react';
import * as S from './FileExplorerPage.styles';
import {
  MainLayout,
  FileList,
  FolderList,
  FileDetailsDrawer,
  FolderDetailsDrawer,
  UploadButton,
  FloatingUploadButton,
  ViewToggle,
} from '../../components';
import { mockFiles, mockFolders } from '../../mocks/files';
import type { FileItem } from '../../types/file';
import type { FolderItem } from '../../types/folder';
import type { ViewType } from '../../types/view';

const VIEW_STORAGE_KEY = 'storagefy-view';

function getInitialViewType(): ViewType {
  if (typeof window === 'undefined') return 'grid';
  const stored = localStorage.getItem(VIEW_STORAGE_KEY) as ViewType | null;
  if (stored === 'grid' || stored === 'tiles' || stored === 'list' || stored === 'details') {
    return stored;
  }
  return 'grid';
}

export function FileExplorerPage() {
  const [files, setFiles] = useState<FileItem[]>(mockFiles);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<FolderItem | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<string>('root');
  const [viewType, setViewType] = useState<ViewType>(getInitialViewType);

  const handleViewChange = useCallback((view: ViewType) => {
    setViewType(view);
    localStorage.setItem(VIEW_STORAGE_KEY, view);
  }, []);

  const filteredFiles =
    selectedFolderId === 'root'
      ? files
      : files.filter((f) => f.folderId === selectedFolderId);

  const folderCount = mockFolders.length;
  const fileCount = filteredFiles.length;

  const handleFolderClick = useCallback((folder: { id: string }) => {
    setSelectedFolderId(folder.id);
  }, []);

  const handleFolderInfoClick = useCallback((folder: FolderItem) => {
    setSelectedFolder(folder);
  }, []);

  const handleCloseFolderDrawer = useCallback(() => {
    setSelectedFolder(null);
  }, []);

  const handleFileClick = useCallback((file: FileItem) => {
    setSelectedFile(file);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setSelectedFile(null);
  }, []);

  const handleDescriptionChange = useCallback((file: FileItem, description: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === file.id ? { ...f, description } : f))
    );
    setSelectedFile((prev) =>
      prev?.id === file.id ? { ...prev, description } : prev
    );
  }, []);

  const handleDelete = useCallback((file: FileItem) => {
    setFiles((prev) => prev.filter((f) => f.id !== file.id));
    setSelectedFile(null);
  }, []);

  const handleDownload = useCallback((file: FileItem) => {
    console.log('Download:', file.name);
  }, []);

  return (
    <>
      <MainLayout title="Explorador de Arquivos" headerActions={<UploadButton />}>
        <S.Content>
          <S.PageHeader>
            <div>
              <S.PageTitle>Gerenciador de Arquivos</S.PageTitle>
              <S.PageSubtitle>
                {folderCount} pastas, {fileCount} arquivos
              </S.PageSubtitle>
            </div>
            <S.HeaderActions>
              <UploadButton />
            </S.HeaderActions>
          </S.PageHeader>

          <FloatingUploadButton />

          <S.Section>
            <S.SectionTitle>Pastas</S.SectionTitle>
            <FolderList
              folders={mockFolders}
              selectedFolderId={selectedFolderId}
              onFolderClick={handleFolderClick}
              onFolderInfoClick={handleFolderInfoClick}
            />
          </S.Section>

          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>Arquivos</S.SectionTitle>
              <ViewToggle value={viewType} onChange={handleViewChange} />
            </S.SectionHeader>
            <FileList
              files={filteredFiles}
              viewType={viewType}
              onFileClick={handleFileClick}
            />
          </S.Section>
        </S.Content>
      </MainLayout>

      <FileDetailsDrawer
        file={selectedFile}
        onClose={handleCloseDrawer}
        onDownload={handleDownload}
        onDelete={handleDelete}
        onDescriptionChange={handleDescriptionChange}
      />

      <FolderDetailsDrawer
        folder={selectedFolder}
        onClose={handleCloseFolderDrawer}
      />
    </>
  );
}
