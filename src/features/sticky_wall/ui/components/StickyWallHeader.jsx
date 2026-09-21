import { RiPushpinFill } from "@remixicon/react";
import React, { memo } from "react";

const StickyWallHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
      <div className="space-y-space-xs max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-space-xs py-0.5 shadow-sm -rotate-1 border border-on-surface">
          <RiPushpinFill className="w-4 h-4" />
          <span className="font-label-md text-label-md uppercase tracking-wider font-bold">
            BOARD ARCHIVE // MEMORY LEAKS &amp; WINS
          </span>
        </div>
        <h1 className="font-display-md text-display-lg text-on-surface tracking-tight leading-none">
          STICKY NOTES &amp; TRAUMA DUMPS
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant italic font-medium flex items-center gap-2">
          The hard lessons so we never fall again in the villain era.
        </p>
      </div>      
    </div>
  );
};

export default memo(StickyWallHeader);
