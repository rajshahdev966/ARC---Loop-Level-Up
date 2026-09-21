import React, { useState, useEffect } from 'react';
import VisionBoard from './features/vission_board/ui/pages/VisionBoard';
import GlowUpCarousel from './features/glow_up/ui/pages/GlowUpCarousel';
import StickyWall from './features/sticky_wall/ui/pages/StickyWall';
import YourWrapped from './features/your_wrapped/ui/pages/YourWrapped';
import LoginPage from './features/auth/ui/pages/LoginPage';

const App = () => {
  const [activePage, setActivePage] = useState('vision-board');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const favicon = document.querySelector("link[rel~='icon']");
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (favicon) favicon.href = '/arc_dark_logo.png';
    } else {
      document.documentElement.classList.remove('dark');
      if (favicon) favicon.href = '/arc_logo.png';
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {activePage === 'login' && (
        <LoginPage onClaim={() => handleNavigate('vision-board')} />
      )}
      {activePage === 'vision-board' && (
        <VisionBoard
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />
      )}
      {activePage === 'glow-up-carousel' && (
        <GlowUpCarousel
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />
      )}
      {activePage === 'terminal-chat' && (
        <TerminalChat
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />
      )}
      {activePage === 'sticky-wall' && (
        <StickyWall
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />
      )}
      {activePage === 'your-wrapped' && (
        <YourWrapped
          onNavigate={handleNavigate}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />
      )}
    </>
  );
};

export default App;