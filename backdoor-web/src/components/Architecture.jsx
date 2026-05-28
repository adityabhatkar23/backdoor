import React from "react";

const Architecture = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 border-b border-gray-dark">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xxs tracking-mono tracking uppercase text-gray-muted mb-10">
          Architecture
        </p>
        
        <div className="max-w-3xl">
          <div className="bg-bg-terminal border border-gray-dark p-6 md:p-8 font-mono text-xs text-fg-secondary leading-loose">
            <div className="text-gray-muted mb-4 text-xxs tracking-widest uppercase">
              request flow
            </div>
            <pre className="font-mono text-fg-secondary text-xs-mono leading-loose bg-transparent overflow-x-auto whitespace-pre">
{`Browser / API
    │
    │   HTTPS
    ▼
backdoor relay server         (cloud)
    │
    │  encrypted WebSocket
    ▼
backdoor CLI                  (your machine)
    │
    │  localhost
    ▼
your app : port 3000`}
            </pre>

            <div className="mt-4 text-gray-muted text-xxs tracking-widest uppercase">
              traffic never touches a third party
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;