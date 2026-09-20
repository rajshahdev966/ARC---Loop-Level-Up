import React from 'react';


const ProblemCard = ({ problem, onOpenArc = () => {} }) => {
  return (
    <article
      onClick={() => onOpenArc(problem)}
      className={`group relative bg-surface-container-lowest border-2 border-on-surface shadow-[5px_5px_0px_#111116] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#111116] ${problem.cardTilt} p-space-md lg:p-space-lg pt-space-lg cursor-pointer`}
    >
      <div
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 border border-on-surface/30 shadow-[1px_1px_2px_rgba(0,0,0,0.15)] flex items-center justify-center pointer-events-none ${problem.tapeStyle}`}
      >
        <span className="text-[9px] font-label-sm tracking-widest">
          {problem.tapeText || ""}
        </span>
      </div>

      <div className="flex items-start justify-between mb-space-sm pt-2">
        <div>
          <span className="font-code-md text-label-sm font-bold text-on-surface-variant block">
            {problem.lcNumber}
          </span>

          <h3 className="font-headline-md text-headline-md font-bold text-on-surface leading-snug">
            {problem.title}
          </h3>
        </div>

        <div
          className={`shrink-0 px-2 py-1 border-2 border-on-surface shadow-[2px_2px_0px_#111116] ${problem.statusBadgeStyle}`}
        >
          <span className="font-label-sm text-label-sm font-extrabold uppercase tracking-wider">
            {problem.statusBadge}
          </span>
        </div>
      </div>

      <div
        className={`border-l-4 p-space-sm my-space-sm ${problem.quoteStyle}`}
      >
        <p className="font-body-md text-body-md text-on-surface italic font-medium">
          {problem.quote}
        </p>
      </div>

      <div className="flex items-center justify-between mt-space-sm pt-2">
        <span className="px-2 py-0.5 bg-surface-container border border-on-surface font-code-md text-[11px]">
          {problem.tag}
        </span>

        
      </div>
    </article>
  );
};

export default ProblemCard;
