import React from "react";

const StepRow = ({ num, title, desc, code }) => {
  return (
    <div className="grid grid-cols-[64px_1fr] gap-8 py-10 border-b border-neutral-900 last:border-0">
      <div
        className="text-neutral-800 text-6xl font-bold leading-none select-none font-serif"
      >
        {num}
      </div>
      <div>
        <div
          className="text-white text-base font-medium mb-2 font-sans"
        >
          {title}
        </div>
        <p className="text-neutral-500 text-sm leading-relaxed mb-4">{desc}</p>
        {code && (
          <div className="inline-flex items-center gap-2 font-mono text-xs bg-neutral-950 border border-neutral-800 px-3 py-1.5 text-neutral-400">
            <span className="text-neutral-700">$</span> {code}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepRow;
