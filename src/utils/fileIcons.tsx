import type { IconType } from 'react-icons';
import {
  FaFile,
  FaFileExcel,
  FaFileCsv,
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileImage,
  FaFileVideo,
  FaFileAudio,
  FaFileArchive,
} from 'react-icons/fa';

const extensionToIcon: Record<string, IconType> = {
  xlsx: FaFileExcel,
  xls: FaFileExcel,
  csv: FaFileCsv,
  pdf: FaFilePdf,
  docx: FaFileWord,
  doc: FaFileWord,
  pptx: FaFilePowerpoint,
  ppt: FaFilePowerpoint,
  png: FaFileImage,
  jpg: FaFileImage,
  jpeg: FaFileImage,
  gif: FaFileImage,
  webp: FaFileImage,
  svg: FaFileImage,
  mp4: FaFileVideo,
  avi: FaFileVideo,
  mov: FaFileVideo,
  webm: FaFileVideo,
  mp3: FaFileAudio,
  wav: FaFileAudio,
  ogg: FaFileAudio,
  flac: FaFileAudio,
  zip: FaFileArchive,
  rar: FaFileArchive,
  '7z': FaFileArchive,
  tar: FaFileArchive,
  gz: FaFileArchive,
};

export function getFileIcon(extension: string): IconType {
  const normalized = extension.toLowerCase().replace(/^\./, '');
  return extensionToIcon[normalized] ?? FaFile;
}
