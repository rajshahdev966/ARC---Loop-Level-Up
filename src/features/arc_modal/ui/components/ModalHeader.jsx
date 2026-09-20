import { RiCloseLine, RiPushpinFill } from "@remixicon/react";
import React, { memo } from "react";

const ModalHeader = ({onClose}) => {
  return (
    <div>
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-container text-on-primary-fixed border-2 border-on-surface font-label-sm font-black tracking-widest uppercase shadow-[2px_2px_0px_#111116] flex items-center gap-1.5 z-10 select-none">
        <RiPushpinFill className="w-3.5 h-3.5" />
        <span>// NEW ARC PIN • REDEMPTION ARCHIVE</span>
      </div>

      {/* Modal Header */}
      <div className="border-b-2 border-on-surface p-5 sm:p-6 pb-4 pt-6 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-code-md text-[10px] font-black uppercase tracking-wider border border-secondary/30">
              TRAINING DIARY
            </span>
          </div>

          <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-on-surface leading-tight">
            PIN A NEW ARC // PROBLEM LOG
          </h2>
          <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-medium mt-0.5">
            Log your villain era struggle, chronicle your awakening, and lock in
            the final form.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="shrink-0 w-8 h-8 flex items-center justify-center border-2 border-on-surface bg-surface-container-lowest hover:bg-error-container hover:text-on-error-container text-on-surface shadow-[3px_3px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <RiCloseLine className="w-5 h-5 font-bold" />
        </button>
      </div>
    </div>
  );
};

export default memo(ModalHeader);
