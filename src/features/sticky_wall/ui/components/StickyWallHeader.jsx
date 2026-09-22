import { RiPushpinFill } from "@remixicon/react";
import React, { memo } from "react";

const StickyWallHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
      <div className="space-y-space-xs max-w-3xl">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-secondary text-on-secondary px-2 sm:px-space-xs py-0.5 shadow-sm -rotate-1 border border-on-surface">
          <RiPushpinFill className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          <span className="font-mono text-[10px] sm:text-label-md uppercase tracking-wider font-bold">
            &gt;_ BOARD ARCHIVE // MEMORY LEAKS &amp; WINS
          </span>
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight uppercase">
          STICKY NOTES &amp; TRAUMA DUMPS
        </h1>
        <p className="font-body text-xs sm:text-base text-on-surface-variant italic font-medium flex items-center gap-2">
          The hard lessons so we never fall again in the villain era.
        </p>
      </div>      
    </div>
  );
};

export default memo(StickyWallHeader);
