import React, { useState } from 'react';

const Install = () => {
  const [copiedText, setCopiedText] = useState('copy');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText('copied ✓');
      setTimeout(() => setCopiedText('copy'), 1600);
    });
  };

  return (
    <section
      id="install"
      className="px-6 md:px-12 py-16 md:py-20 border-b border-gray-dark mx-auto"
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-xxs tracking-mono uppercase text-gray-muted mb-8">
          Installation
        </p>
        <div className="border border-gray-dark mb-4">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-dark">
            <span className="font-mono text-xxs text-gray-muted">npm</span>
            <button
              onClick={() => handleCopy("npm install -g backdoor-tunnel")}
              className="font-mono text-xxs tracking-wider text-gray-muted border border-gray-dark px-2 py-0.5 bg-transparent hover:text-fg-primary hover:border-gray-muted transition-colors duration-150 cursor-pointer"
            >
              {copiedText}
            </button>
          </div>
          <div className="p-5 font-mono text-sm-body">
            <span className="text-gray-muted select-none">$ </span>
            <span className="text-fg-primary">
              npm install -g backdoor-tunnel
            </span>
          </div>
        </div>
        <p className="text-sm-body text-gray-muted leading-relaxed">
          Requires Node.js. Works on macOS, Linux, and Windows — anywhere npm
          runs.
        </p>
      </div>
    </section>
  );
};

export default Install;