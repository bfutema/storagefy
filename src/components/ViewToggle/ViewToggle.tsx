import * as S from './ViewToggle.styles';
import { FaThLarge, FaTh, FaList, FaTable } from 'react-icons/fa';
import type { ViewType } from '../../types/view';

interface ViewToggleProps {
  value: ViewType;
  onChange: (view: ViewType) => void;
}

const views: { type: ViewType; icon: React.ReactNode; label: string }[] = [
  { type: 'grid', icon: <FaThLarge size={16} />, label: 'Blocos grandes' },
  { type: 'tiles', icon: <FaTh size={16} />, label: 'Blocos médios' },
  { type: 'list', icon: <FaList size={16} />, label: 'Lista' },
  { type: 'details', icon: <FaTable size={16} />, label: 'Detalhes' },
];

export function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <S.Container role="group" aria-label="Tipo de visualização">
      {views.map(({ type, icon, label }) => (
        <S.Button
          key={type}
          type="button"
          $active={value === type}
          onClick={() => onChange(type)}
          aria-label={label}
          title={label}
        >
          {icon}
        </S.Button>
      ))}
    </S.Container>
  );
}
