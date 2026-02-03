import { createPortal } from 'react-dom';
import * as S from './Sidebar.styles';
import { FaFolder, FaHome, FaCog, FaTimes } from 'react-icons/fa';

interface NavItemConfig {
  id: string;
  label: string;
  to: string;
  icon: React.ReactNode;
}

const navItems: NavItemConfig[] = [
  { id: 'home', label: 'Início', to: '/', icon: <FaHome size={18} /> },
  {
    id: 'files',
    label: 'Explorador de Arquivos',
    to: '/arquivos',
    icon: <FaFolder size={18} />,
  },
  { id: 'settings', label: 'Configurações', to: '/configuracoes', icon: <FaCog size={18} /> },
];

interface NavContentProps {
  onItemClick?: () => void;
}

function NavContent({ onItemClick }: NavContentProps) {
  const handleItemClick = () => {
    onItemClick?.();
  };

  return (
    <S.Section>
      <S.SectionTitle>Menu</S.SectionTitle>
      {navItems.map((item) => (
        <S.NavItem
          key={item.id}
          to={item.to}
          end={item.to === '/'}
          onClick={handleItemClick}
        >
          <S.NavIcon>{item.icon}</S.NavIcon>
          {item.label}
        </S.NavItem>
      ))}
    </S.Section>
  );
}

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const handleOverlayClick = () => {
    onClose?.();
  };

  const mobileOverlayAndDrawer =
    typeof document !== 'undefined'
      ? createPortal(
          <>
            <S.Overlay $visible={isOpen} onClick={handleOverlayClick} aria-hidden="true" />
            <S.Drawer $open={isOpen}>
              <S.DrawerHeader>
                <S.DrawerCloseIconButton onClick={onClose} type="button" aria-label="Fechar menu">
                  <FaTimes size={22} />
                </S.DrawerCloseIconButton>
              </S.DrawerHeader>
              <S.DrawerScroll className="sidebar-scroll drawer-scroll">
                <NavContent onItemClick={onClose} />
              </S.DrawerScroll>
              <S.DrawerFooter>
                <S.CloseDrawerButton onClick={onClose} type="button" aria-label="Fechar menu">
                  <FaTimes size={18} />
                  Fechar menu
                </S.CloseDrawerButton>
              </S.DrawerFooter>
            </S.Drawer>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <S.Sidebar>
        <S.SidebarScroll className="sidebar-scroll">
          <NavContent />
        </S.SidebarScroll>
      </S.Sidebar>
      {mobileOverlayAndDrawer}
    </>
  );
}
