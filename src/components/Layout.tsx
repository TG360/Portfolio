// Layout.tsx
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import Contact  from './Contact';



const Layout = ({ children } : {children: ReactNode}) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center p-5">
        <div className="w-full min-h-[calc(100vh-2.5rem)] relative flex flex-col justify-center items-center border dark:border-slate-200 border-slate-950">
          <div className="w-full h-full">{children}</div>
          {/* Bottom left corner - Dark/Light mode and Text button */}
          <div className="absolute bottom-5 left-5 flex space-x-4">
            <ModeToggle />
            <Button variant={'outline'}>Text Button</Button>
          </div>
          {/* Bottom right corner - Links */}
          <div className="absolute bottom-5 right-5 flex space-x-4">
            <div className='relative px-3 py-1 hover-underline'>
              <Contact />
            </div>
            <a href="https://github.com/TG360" target="_blank" rel="noopener noreferrer" className="relative px-3 py-1 hover-underline">GitHub</a>
            <Link to="/projects" className="relative px-3 py-1 hover-underline">Projects</Link>
            <Link to="/experience" className="relative px-3 py-1 hover-underline">Experience</Link>
          </div>

        </div>
    </main>
  );
};

export default Layout;
