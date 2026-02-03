export interface FileItem {
  id: string;
  name: string;
  extension: string;
  size: number;
  type: string;
  createdAt: string;
  modifiedAt: string;
  path: string;
  folderId?: string;
  createdBy?: string;
  description?: string;
}
