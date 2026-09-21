import React, { memo } from "react";

const TricolourDisplayButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block border border-black/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block border border-black/40" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block border border-black/40" />
      </div>
    </div>
  );
};

export default memo(TricolourDisplayButtons);
