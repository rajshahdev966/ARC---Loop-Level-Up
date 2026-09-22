import { RiPushpinFill } from "@remixicon/react";
import React, { useContext } from "react";
import { VisionBoardContext } from "../../../../config/VisionBoardContext";

const TopPinBadge = React.memo(() => {
  const {selectedArc} = useContext(VisionBoardContext)
  return (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-primary-container text-on-primary-fixed border-2 border-on-surface font-label-sm text-[10px] font-black tracking-widest uppercase shadow-[2px_2px_0px_#111116] flex items-center gap-1.5 z-10 select-none">
      <RiPushpinFill className="w-3.5 h-3.5" />
      <span>
        {selectedArc
          ? "EDITING ARC PIN"
          : "NEW ARC PIN • REDEMPTION ARCHIVE"}
      </span>
    </div>
  );
});

export default TopPinBadge;
