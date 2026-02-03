export interface FolderItem {
  id: string;
  name: string;
  fileCount: number;
  subfolderCount?: number;
  path: string;
}
