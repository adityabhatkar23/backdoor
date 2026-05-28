import React from "react";

const Usage = () => {
  return (
    <section
      id="usage"
      className="px-6 md:px-12 py-16 md:py-20 border-b border-gray-dark"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xxs tracking-mono uppercase text-gray-muted mb-12">
          Two commands. That's it.
        </p>
        <div className="grid md:grid-cols-2 border border-gray-dark divide-y md:divide-y-0 md:divide-x divide-gray-dark">
          <div className="p-8 md:p-10">
            <div className="font-mono text-xxs text-gray-muted mb-4 tracking-widest uppercase">
              01 / authenticate
            </div>
            <div className="font-serif text-2xl text-fg-primary mb-5">
              backdoor login
            </div>
            <p className="text-sm text-fg-secondary leading-relaxed mb-6">
              Authenticates you via GitHub OAuth. Run this once — backdoor
              stores a token locally so you never have to log in again.
            </p>
            <div className="font-mono text-sm-body pt-3 space-y-1">
              <div>
                <span className="text-gray-muted select-none">$ </span>
                <span className="text-fg-primary">backdoor login</span>
              </div>
              <div className="text-gray-muted">Opening your browser...</div>
              <div className="text-gray-muted">
                Logged in successfully and authenticated token captured!
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10">
            <div className="font-mono text-xxs text-gray-muted mb-4 tracking-widest uppercase">
              02 / share
            </div>
            <div className="font-serif text-2xl text-fg-primary mb-5">
              backdoor share &lt;port&gt;
            </div>
            <p className="text-sm text-fg-secondary leading-relaxed mb-6">
              Opens a secure public tunnel to any local port and returns a live
              HTTPS URL you can share immediately.
            </p>
            <div className="font-mono text-sm-body pt-3 space-y-1">
              <div>
                <span className="text-gray-muted select-none">$ </span>
                <span className="text-fg-primary">backdoor share 8080</span>
              </div>
              <div className="text-gray-muted">✔ Tunnel allocated!</div>
              <div className="text-fg-primary">
                →{" "}
                <span className="underline underline-offset-4 decoration-1">
                  🌍 https://333698.backdoor.adityabhatkar.dev
                </span>
                <div className="text-gray-muted">
                  📦 Exposing -&gt; localhost:3000
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Usage;