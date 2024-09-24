// Layout.tsx
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';

interface LayoutProps {
  children: ReactNode;
}
<main className="w-full min-h-screen flex items-center justify-center p-5">
    <div className="flex items-center justify-center w-full min-h-[calc(100vh-2.5rem)] border border-slate-200">
        <ModeToggle />
    </div>
  </main>

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center p-5">
        <div className="w-full min-h-[calc(100vh-2.5rem)] relative flex flex-col justify-center items-center border border-slate-200">
          <div className="w-full h-full">{children}</div>
          {/* Bottom left corner - Dark/Light mode and Text button */}
          <div className="absolute bottom-5 left-5 flex space-x-4">
            <ModeToggle />
            <button className="text-button">Text Button</button>
          </div>
          {/* Bottom right corner - Links */}
          <div className="absolute bottom-5 right-5 flex space-x-4">
            <Link to="/contact" className="px-3 py-1">Contact</Link>
            <a href="https://github.com/TG360" className="px-3 py-1">GitHub</a>
            <Link to="/projects" className="px-3 py-1">Projects</Link>
            <Link to="/experience" className="px-3 py-1">Experience</Link>
          </div>
        </div>
    </main>
  );
};

export default Layout;
