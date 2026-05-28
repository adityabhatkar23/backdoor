import React from 'react'

const Cta = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 border-b border-gray-dark">
      <div className="max-w-3xl grid md:grid-cols-2 gap-12 items-center mx-auto">

        <div>
          <p className="font-mono text-xxs tracking-mono uppercase text-gray-muted mb-6">Open source</p>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-tight text-fg-primary mb-5 font-bold">
            Built in the open.<br/><span className="text-fg-secondary font-normal">Early stage.</span>
          </h2>
          <p className="text-sm text-fg-secondary leading-relaxed mb-8">
            Backdoor is early stage and actively developed. If you run into bugs, want a feature, or just want to see how it works — the code is all there.
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://github.com/adityabhatkar23/backdoor" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-fg-primary px-5 py-2 font-mono text-xs-mono tracking-wider text-fg-primary bg-transparent hover:bg-fg-primary hover:text-black transition-all duration-150"
            >
              GitHub ↗
            </a>
            <a 
              href="https://github.com/adityabhatkar23/backdoor/issues" 
              target="_blank" 
              rel="noreferrer" 
              className="border border-gray-medium px-5 py-2 font-mono text-xs-mono tracking-wider text-fg-secondary bg-transparent hover:border-fg-primary hover:text-fg-primary transition-all duration-150"
            >
              Open an issue
            </a>
          </div>
        </div>

        <div className="space-y-1">
          {[
            'github.com/adityabhatkar23/backdoor',
            'MIT licensed',
            'Issues & PRs open',
            'npm: backdoor-tunnel'
          ].map((text, i, arr) => (
            <div 
              key={text} 
              className={`flex items-center gap-4 py-3 ${i !== arr.length - 1 ? 'border-b border-gray-dark' : ''}`}
            >
              <span className="font-mono text-xxs text-gray-muted w-6">→</span>
              <span className="font-mono text-xs text-fg-secondary">{text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Cta;