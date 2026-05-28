import React from 'react'
import StepRow from './StepRow';
const Work = () => {
  return (

      <section id="how" className="px-6 md:px-14 py-20 border-b border-neutral-900">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs text-neutral-600 tracking-widest uppercase mb-4">How it works</p>
          <h2 className="text-4xl font-bold text-white mb-14 font-serif" >
            Simple by design.
          </h2>
 
          <StepRow
            num="01"
            title="You run backdoor share 3000"
            desc="The CLI opens a persistent, encrypted WebSocket from your machine to the backdoor relay server. No firewall rules, no port forwarding needed."
            code="backdoor share 3000"
          />
          <StepRow
            num="02"
            title="Relay assigns a live HTTPS URL"
            desc="The relay provisions a unique subdomain with a valid TLS certificate and starts listening for inbound traffic on your behalf."
          />
          <StepRow
            num="03"
            title="Requests flow through the tunnel"
            desc="Every request to the public URL travels through the encrypted socket to your local server. Your app responds normally — it doesn't know it's public."
          />
          <StepRow
            num="04"
            title="Ctrl+C and it's gone"
            desc="Kill the process and the public URL goes dark instantly. Nothing lingers."
            code="^C"
          />
        </div>
      </section>

  )
}

export default Work