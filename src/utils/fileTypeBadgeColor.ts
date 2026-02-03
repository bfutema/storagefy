type FileTypeBadge = Record<string, string>;

const extensionToBadgeKey: Record<string, string> = {
  pdf: 'pdf',
  doc: 'doc',
  docx: 'docx',
  xls: 'xls',
  xlsx: 'xlsx',
  csv: 'csv',
  jpg: 'jpg',
  jpeg: 'jpeg',
  png: 'png',
  gif: 'gif',
  txt: 'txt',
  ppt: 'pptx',
  pptx: 'pptx',
  zip: 'zip',
  rar: 'zip',
  mp4: 'mp4',
  avi: 'mp4',
  mp3: 'mp3',
  wav: 'mp3',
};

export function getFileTypeBadgeColor(
  extension: string,
  fileTypeBadge: FileTypeBadge
): string {
  const normalized = extension.toLowerCase().replace(/^\./, '');
  const key = extensionToBadgeKey[normalized] ?? 'default';
  return fileTypeBadge[key] ?? fileTypeBadge.default;
}
