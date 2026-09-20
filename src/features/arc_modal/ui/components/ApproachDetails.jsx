import { Editor } from "@monaco-editor/react";
import { RiArrowDownSLine } from "@remixicon/react";
import React from "react";
import TricolourDisplayButtons from "./TricolourDisplayButtons";
import LanguageSelect from "./LanguageSelect";
import CodeEditor from "./CodeEditor";

const ApproachDetails = ({
  currentApproach,
  updateCurrentApproach,
  dsaLanguages,
}) => {
  return (
    <div>
      <div className="border-2 border-on-surface bg-surface-container-lowest p-4 sm:p-5 space-y-4 shadow-[4px_4px_0px_#111116]">
        {/* Approach Name & Tape Picker */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <span className="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">
              APPROACH NAME / IDENTITY
            </span>
            <input
              type="text"
              value={currentApproach?.name}
              onChange={(e) => updateCurrentApproach({ name: e.target.value })}
              placeholder="Approach 1: O(N²) Nested Scans (Pure Pain)"
              className="w-full py-1 font-headline-md text-base sm:text-lg font-bold text-on-surface bg-transparent border-b-2 border-on-surface focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Code Block Terminal / Editor */}
      <div className="border-2 border-on-surface bg-[#121316] text-[#e4e1e9] shadow-[3px_3px_0px_#111116] overflow-hidden">
        {/* Terminal Window Header */}
        <div className="bg-[#1b1c22] px-3 py-2 border-b-2 border-on-surface flex items-center justify-between">
          <TricolourDisplayButtons/>

          <LanguageSelect dsaLanguages={dsaLanguages} currentApproach={currentApproach}/>
        </div>

        {/* Code Editor / Line Numbers */}
       <CodeEditor updateCurrentApproach={updateCurrentApproach} currentApproach={currentApproach}/>
      </div>
    </div>
  );
};

export default ApproachDetails;
