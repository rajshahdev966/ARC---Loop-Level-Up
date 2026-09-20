import { RiAddLine, RiSaveLine } from "@remixicon/react";
import React, { memo } from "react";

const ModalBottom = ({onClose, handleAddApproach, handleSave}) => {
  return (
    <div>
      {" "}
      <div className="border-t-2 border-on-surface bg-surface-container-low p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-surface-container-lowest border-2 border-on-surface hover:bg-error-container hover:text-on-error-container font-code-md text-xs font-bold uppercase text-on-surface shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          >
            CANCEL / DISCARD
          </button>

          <button
            type="button"
            onClick={handleAddApproach}
            className="px-4 py-2 bg-surface-container-lowest border-2 border-on-surface hover:bg-surface-container font-code-md text-xs font-bold uppercase text-on-surface shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer flex items-center gap-1"
          >
            <RiAddLine className="w-3.5 h-3.5" />
            <span>ADD APPROACH</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="px-6 py-2.5 bg-primary-container text-on-primary-fixed border-2 border-on-surface font-code-md text-sm font-extrabold uppercase shadow-[4px_4px_0px_#111116] hover:brightness-105 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2 cursor-pointer ml-auto"
        >
          <RiSaveLine className="w-4 h-4 stroke-[2.5]" />
          <span>PIN ARC TO SCRAPBOOK</span>
        </button>
      </div>
    </div>
  );
};

export default memo(ModalBottom);
