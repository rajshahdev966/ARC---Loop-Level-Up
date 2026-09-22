import { RiSaveLine } from "@remixicon/react";
import React, { useContext } from "react";
import { VisionBoardContext } from "../../../../config/VisionBoardContext";

const ModalFooter = React.memo(() => {
    const {handleCloseArcModal, selectedArc} = useContext(VisionBoardContext)
  return (
    <div className="border-t-2 border-on-surface bg-surface-container-low p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
      <button
        type="button"
        onClick={handleCloseArcModal}
        className="px-4 py-2 bg-surface-container-lowest border-2 border-on-surface hover:bg-error-container hover:text-on-error-container font-code-md text-xs font-bold uppercase text-on-surface shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
      >
        Nvm, Close This
      </button>

      <button
        type="submit"
        className="px-6 py-2.5 bg-primary-container text-on-primary-fixed border-2 border-on-surface font-code-md text-sm font-extrabold uppercase shadow-[4px_4px_0px_#111116] hover:brightness-105 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer ml-auto"
      >
        <RiSaveLine className="w-4 h-4 stroke-[2.5]" />
        <span>{selectedArc ? "Update Arc Pin" : "Pin Arc to Scrapbook"}</span>
      </button>
    </div>
  );
});

export default ModalFooter;
