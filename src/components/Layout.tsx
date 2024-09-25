// Layout.tsx
import { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import Contact  from './Contact';
import { cn } from '../lib/utils';
import { ExternalLink } from 'lucide-react';



const Layout = ({ children } : {children: ReactNode}) => {
  const [Text , setText] = useState(false);

  const handleTextChange = () => {
    setText(!Text);
  };

  return (
    <main className={cn(
      'w-full min-h-screen flex items-center justify-center p-5',
      Text ? 'secondary-text' : 'primary-text' // Conditionally apply classes
    )}>
        <div className="w-full min-h-[calc(100vh-2.5rem)] relative flex flex-col justify-center items-center border dark:border-slate-200 border-slate-950">
          <div className="w-full h-full">{children}</div>

          {/* Bottom left corner - Dark/Light mode and Text button */}
          <div className="absolute bottom-5 left-5 flex space-x-4">
            <ModeToggle />
            <Button variant={'outline'} onClick={handleTextChange} className={Text ? 'bg-gray-400/20' : ''}>Change Font</Button>
          </div>

          {/* Bottom right corner - Links */}
          <div className="absolute bottom-5 right-5 flex space-x-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `relative px-3 py-1 hover-underline ${isActive ? 'active-underline' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `relative px-3 py-1 hover-underline ${isActive ? 'active-underline' : ''}`
              }>
                Projects
            </NavLink>
            <div className='relative px-3 py-1 hover-underline'>
              <Contact />
            </div>
            <a href="/RitinMereddy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="relative flex px-3 py-1 hover-underline group">
              Resume
              <ExternalLink className="size-5 ml-1 transition-transform duration-200 group-hover:scale-125" />
            </a>
          </div>
        </div>
    </main>
  );
};

export default Layout;
