import { RiAddCircleLine } from "@remixicon/react";
import React, { useContext } from "react";
import { StickyNotesContext } from "../../../../config/StickyNoteContext";

const ActionButtons = React.memo(({}) => {
  const { setShowModal, setFilterType, filterType } =
    useContext(StickyNotesContext);
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs w-full lg:w-auto">
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="group flex items-center justify-center gap-2 px-3 sm:px-space-md py-1.5 sm:py-space-xs bg-primary-container text-on-primary-fixed font-mono text-xs sm:text-label-md uppercase tracking-wider shadow-[2px_2px_0px_#111116] sm:shadow-[3px_3px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer font-black border-2 border-on-surface w-full sm:w-auto"
      >
        <RiAddCircleLine className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        <span>+ PIN NEW NOTE</span>
      </button>

      <div className="flex items-center gap-1.5 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => setFilterType("ALL")}
          className={`flex-1 sm:flex-initial px-2.5 sm:px-space-sm py-1 sm:py-space-xs font-mono text-[11px] sm:text-label-md uppercase tracking-wider shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer font-bold border-2 border-on-surface text-center ${
            filterType === "ALL"
              ? "bg-inverse-surface text-inverse-on-surface"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
          }`}
        >
          [ALL]
        </button>
        <button
          type="button"
          onClick={() => setFilterType("W")}
          className={`flex-1 sm:flex-initial px-2.5 sm:px-space-sm py-1 sm:py-space-xs font-mono text-[11px] sm:text-label-md uppercase tracking-wider shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer font-bold border-2 border-on-surface text-center ${
            filterType === "W"
              ? "bg-inverse-surface text-inverse-on-surface"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
          }`}
        >
          [WINS]
        </button>
        <button
          type="button"
          onClick={() => setFilterType("L")}
          className={`flex-1 sm:flex-initial px-2.5 sm:px-space-sm py-1 sm:py-space-xs font-mono text-[11px] sm:text-label-md uppercase tracking-wider shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer font-bold border-2 border-on-surface text-center ${
            filterType === "L"
              ? "bg-inverse-surface text-inverse-on-surface"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
          }`}
        >
          [LESSONS]
        </button>
      </div>
    </div>
  );
});

export default ActionButtons;
