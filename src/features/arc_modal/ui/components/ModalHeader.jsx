import { RiCloseLine } from "@remixicon/react";
import React, { useContext } from "react";
import { VisionBoardContext } from "../../../../config/VisionBoardContext";

const ModalHeader = React.memo(() => {
    const {handleCloseArcModal, selectedArc } = useContext(VisionBoardContext)
  return (
    <div className="border-b-2 border-on-surface p-5 sm:p-6 pb-4 pt-6 flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2 py-0.5 bg-on-surface text-surface-container-lowest font-code-md text-[10px] font-black uppercase tracking-wider">
            {selectedArc ? "EDIT MODE" : "LOG ARCHIVE"}
          </span>
          <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-code-md text-[10px] font-black uppercase tracking-wider border border-secondary/30">
            TRAINING DIARY
          </span>
        </div>

        <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-tight">
          {selectedArc
            ? "UPDATE ARC // PROBLEM LOG"
            : "PIN A NEW ARC // PROBLEM LOG"}
        </h2>

        <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-medium mt-0.5">
          Log your villain era struggle, chronicle your awakening, and lock in
          the final form.
        </p>
      </div>

      <button
        type="button"
        onClick={handleCloseArcModal}
        className="shrink-0 w-8 h-8 flex items-center justify-center border-2 border-on-surface bg-surface-container-lowest hover:bg-error-container hover:text-on-error-container text-on-surface shadow-[3px_3px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
        aria-label="Close modal"
      >
        <RiCloseLine className="w-5 h-5 font-bold" />
      </button>
    </div>
  );
});

export default ModalHeader;
