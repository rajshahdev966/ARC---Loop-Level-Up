import { RiAddCircleLine } from "@remixicon/react";
import React from "react";

const ActionButtons = React.memo(
  ({ setShowModal, setFilterType, filterType }) => {
    return (
      <div className="flex flex-wrap items-center gap-space-xs">
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="group flex items-center gap-2 px-space-md py-space-xs bg-primary-container text-on-primary-fixed font-label-md text-label-md uppercase tracking-wider shadow-md hover:shadow-xl active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer font-bold border border-on-surface"
        >
          <RiAddCircleLine className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          <span>+ PIN NEW NOTE</span>
        </button>
        <button
          type="button"
          onClick={() => setFilterType("ALL")}
          className={`px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all cursor-pointer font-bold border border-on-surface ${
            filterType === "ALL"
              ? "bg-inverse-surface text-inverse-on-surface"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
          }`}
        >
          ALL
        </button>
        <button
          type="button"
          onClick={() => setFilterType("W")}
          className={`px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all cursor-pointer font-bold border border-on-surface ${
            filterType === "W"
              ? "bg-inverse-surface text-inverse-on-surface"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
          }`}
        >
          WINS
        </button>
        <button
          type="button"
          onClick={() => setFilterType("L")}
          className={`px-space-sm py-space-xs font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all cursor-pointer font-bold border border-on-surface ${
            filterType === "L"
              ? "bg-inverse-surface text-inverse-on-surface"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
          }`}
        >
          LESSONS
        </button>
      </div>
    );
  },
);

export default ActionButtons;
