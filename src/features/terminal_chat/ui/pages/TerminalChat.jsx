import React from 'react';
import Navbar from '../../../../shared/ui/components/Navbar';
import Footer from '../../../../shared/ui/components/Footer';

const TerminalChat = ({ onNavigate = () => {}, isDark = false, onToggleTheme = () => {} }) => {
  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-on-surface">
      <Navbar activePage="terminal-chat" onNavigate={onNavigate} isDark={isDark} onToggleTheme={onToggleTheme} />
      <main className="w-full pt-24 px-gutter lg:px-gutter-desktop min-h-[70vh] flex flex-col items-center justify-center">
        <div className="bg-surface-container border-2 border-on-surface p-space-lg shadow-[5px_5px_0px_#111116] max-w-lg text-center">
          <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Terminal Chat</h1>
          <p className="font-code-md text-sm text-on-surface-variant mt-2">// Work in progress: Terminal assistant arriving soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TerminalChat;
