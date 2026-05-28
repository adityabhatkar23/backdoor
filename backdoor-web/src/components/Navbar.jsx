import React from "react";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-dark px-6 md:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-fg-primary tracking-widest">backdoor</span>
        <span className="font-mono text-xxs tracking-wider text-gray-muted border border-gray-dark px-1.5 py-0.5">
          early access
        </span>
      </div>
      
      <div className="flex items-center gap-6 md:gap-8">
        <a href="#install" className="font-mono text-xs-mono tracking-wider text-gray-muted hover:text-fg-primary transition-colors duration-150 hidden md:block">
          install
        </a>
        <a href="#usage" className="font-mono text-xs-mono tracking-wider text-gray-muted hover:text-fg-primary transition-colors duration-150 hidden md:block">
          usage
        </a>
        <a href="#how" className="font-mono text-xs-mono tracking-wider text-gray-muted hover:text-fg-primary transition-colors duration-150 hidden md:block">
          how it works
        </a>
        <a 
          href="https://github.com/adityabhatkar23/backdoor" 
          target="_blank" 
          rel="noreferrer"
          className="font-mono text-xs-mono tracking-wider text-gray-muted hover:text-fg-primary transition-colors duration-150 flex items-center gap-2"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span className="hidden md:inline">github</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;