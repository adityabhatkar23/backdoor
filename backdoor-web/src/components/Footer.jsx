import React from 'react'

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <span className="font-mono text-xxs text-gray-muted tracking-widest">
        backdoor · MIT
      </span>
      
      <div className="flex items-center gap-6">
        <a 
          href="https://github.com/adityabhatkar23/backdoor" 
          target="_blank" 
          rel="noreferrer" 
          className="font-mono text-xs-mono tracking-wider text-gray-muted hover:text-fg-primary transition-colors duration-150"
        >
          GitHub
        </a>
        <a 
          href="https://www.npmjs.com/package/backdoor-tunnel" 
          target="_blank" 
          rel="noreferrer" 
          className="font-mono text-xs-mono tracking-wider text-gray-muted hover:text-fg-primary transition-colors duration-150"
        >
          npm
        </a>
        <a 
          href="https://github.com/adityabhatkar23/backdoor/issues" 
          target="_blank" 
          rel="noreferrer" 
          className="font-mono text-xs-mono tracking-wider text-gray-muted hover:text-fg-primary transition-colors duration-150"
        >
          Issues
        </a>
      </div>
    </footer>
  )
}

export default Footer