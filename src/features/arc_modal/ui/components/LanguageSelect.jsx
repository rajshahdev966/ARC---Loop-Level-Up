import { RiArrowDownSLine } from "@remixicon/react";
import React from "react";

const LanguageSelect = ({dsaLanguages, currentApproach}) => {
  return (
      <div className="relative">
        <select
          value={currentApproach?.language}
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className="appearance-none flex items-center bg-[#282932] border border-white/20 px-2 pr-7 py-0.5 text-[#e4e1e9] font-code-md text-[11px] outline-none cursor-pointer hover:border-white/30 focus:border-white/40 transition-colors"
        >
          {dsaLanguages.map((language) => (
            <option
              key={language.value}
              value={language.value}
              className="bg-[#282932] text-[#e4e1e9]"
            >
              {language.label}
            </option>
          ))}
        </select>

        <RiArrowDownSLine
          className="
      pointer-events-none
      absolute right-1.5 top-1/2
      -translate-y-1/2
      w-3.5 h-3.5
      text-white/70
    "
        />
      </div>
  );
};

export default LanguageSelect;
