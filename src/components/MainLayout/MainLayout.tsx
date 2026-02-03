import { useState, useCallback } from 'react';
import * as S from './MainLayout.styles';
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';
import { ThemeToggle } from '../ThemeToggle';
import { LogoutButton } from '../LogoutButton';
import { HamburgerButton } from '../HamburgerButton';
import { HideOnMobile } from '../Header/Header.styles';

interface MainLayoutProps {
  title: string;
  children: React.ReactNode;
  headerActions?: React.ReactNode;
}

export function MainLayout({ title, children, headerActions }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return (
    <S.Page>
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      <S.MainArea>
        <Header
          title={title}
          leftContent={<HamburgerButton onClick={handleMenuClick} />}
        >
          {headerActions && <HideOnMobile>{headerActions}</HideOnMobile>}
          <ThemeToggle />
          <LogoutButton />
        </Header>
        <S.Content className="main-content-scroll">{children}</S.Content>
      </S.MainArea>
    </S.Page>
  );
}
