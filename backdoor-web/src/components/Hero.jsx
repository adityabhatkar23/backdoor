import React from "react";

const Hero = () => {
  return (
    <header className="px-6 md:px-12 pt-20 md:pt-28 pb-20 border-b border-gray-dark">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        <div>
          <p className="font-mono text-xxs tracking-mono uppercase text-gray-muted mb-7">
            Open source · npm · free
          </p>
          <h1 className="font-serif text-[clamp(2.6rem,5.5vw,4.4rem)] Aquarium leading-[1.06] tracking-tight text-fg-primary mb-6">
            Expose your
            <br />
            localhost
            <br />
            <em className="italic">to the internet.</em>
          </h1>
          <p className="text-fg-secondary text-sm-body leading-relaxed max-w-sm mb-10">
            One npm install. Two commands. Your local server gets a live public
            URL — instantly, no config, no account setup beyond a GitHub login.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#install"
              className="inline-flex items-center gap-2 border border-fg-primary px-5 py-2.5 font-mono text-xs-mono tracking-wider text-fg-primary bg-transparent hover:bg-fg-primary hover:text-black transition-all duration-150"
            >
              Get started →
            </a>
            <a
              href="https://github.com/adityabhatkar23/backdoor"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-gray-medium px-5 py-2.5 font-mono text-xs-mono tracking-wider text-fg-secondary bg-transparent hover:border-fg-primary hover:text-fg-primary transition-all duration-150"
            >
              View on GitHub ↗
            </a>
          </div>
        </div>

        <div>
          <div className="bg-bg-terminal border border-gray-dark font-mono">

            <div className="border-b border-gray-dark px-3.5 py-2.5 flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-dark border border-gray-medium"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-dark border border-gray-medium"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-gray-dark border border-gray-medium"></div>
              <span className="font-mono text-xxs text-gray-muted ml-1.5 tracking-wider">
                terminal
              </span>
            </div>

            <div className="p-5 text-sm-body space-y-3 leading-relaxed">
              <div>
                <span className="text-gray-muted select-none">$ </span>
                <span className="text-fg-primary">backdoor login</span>
              </div>
              <div className="text-fg-secondary">Opening your browser for secure authentication workflow...</div>
              <div className="text-fg-secondary">Logged in successfully and authenticated token captured!</div>
              
              <div className="pt-1">
                <span className="text-gray-muted select-none">$ </span>
                <span className="text-fg-primary">backdoor share 3000</span>
              </div>
              <div className="text-emerald-600">✔ Tunnel allocated!</div>
              
              <div className="pt-1 text-fg-primary flex items-center gap-2">
                <span className="select-none">🌍</span>
                <span className="underline underline-offset-4 decoration-1 decoration-fg-primary font-medium">
                  https://42912.backdoor.adityabhatkar.dev
                </span>
              </div>
              <div className="text-fg-secondary">
                📦 Exposing -&gt; localhost:3000
                <span className="inline-block w-1.5 h-[0.9em] bg-fg-primary ml-1 align-text-bottom animate-[blink_1.1s_steps(1,end)_infinite]" />
              </div>
            </div>
          </div>
          <p className="font-mono text-xxs text-gray-muted mt-3 tracking-wide">
            Your port. The internet. Two commands.
          </p>
        </div>

      </div>
    </header>
  );
};

export default Hero;