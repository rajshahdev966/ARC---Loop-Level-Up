import React from "react";

const ApproachTabs = ({approaches, activeApproachIdx, setActiveApproachIdx}) => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
        <div className="flex items-center gap-2 flex-wrap">
          {approaches?.map((app, idx) => {
            const isActive = idx === activeApproachIdx;
            return (
              <button
                key={app.id}
                type="button"
                onClick={() => setActiveApproachIdx(idx)}
                className={`px-3 sm:px-4 py-1.5 border-2 border-on-surface font-code-md text-xs font-bold uppercase transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary-container text-on-primary-fixed shadow-[3px_3px_0px_#111116] -translate-y-0.5"
                    : "bg-surface-container-lowest text-on-surface hover:bg-surface-container"
                }`}
              >
                {app.tabName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApproachTabs;
