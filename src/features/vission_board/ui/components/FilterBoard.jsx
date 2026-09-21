import React, { useEffect, useState } from "react";
import { RiAddLine, RiSearchLine } from "@remixicon/react";
import availableTags from "../../../../shared/constants/availableTags";

const FilterBoard = ({
  onOpenNewArc = () => {},
  allProblems,
  activeStatus,
  setActiveStatus,
  activeTopic,
  setActiveTopic,
  searchQuery,
  setSearchQuery,
}) => {

 

  const statusFilters = [
    {
      id: "ALL",
      label: "ALL",
      activeStyle: "bg-primary-container text-on-primary-fixed",
    },
    {
      id: "VILLAIN",
      label: "VILLAIN ERA💀",
      activeStyle: "bg-error-container text-on-error-container",
    },
    {
      id: "MID",
      label: "MID-ARC⚡",
      activeStyle: "bg-secondary-container text-on-secondary-container",
    },
    {
      id: "FINAL",
      label: "FINAL FORM✅",
      activeStyle: "bg-primary-container text-on-primary-fixed",
    },
  ];

  const topicFilters = [
    {
      id: "DP",
      label: "#DynamicProgramming",
      tilt: "-rotate-1",
      hoverBg: "hover:bg-primary-fixed",
    },
    {
      id: "Graphs",
      label: "#Graphs",
      tilt: "rotate-1",
      hoverBg: "hover:bg-tertiary-container",
    },
    {
      id: "Trees",
      label: "#Trees",
      tilt: "-rotate-2",
      hoverBg: "hover:bg-secondary-fixed",
    },
    {
      id: "SlidingWindow",
      label: "#SlidingWindow",
      tilt: "rotate-2",
      hoverBg: "hover:bg-primary-container",
    },
  ];

  return (
    <section className="w-full px-gutter lg:px-gutter-desktop mt-space-sm mb-space-md">
      {/* Container with circular button on the left and Scrapboard panel */}
      <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
        {/* CIRCULAR "PIN ARC / NEW STORY" BUTTON (LAYERED ON TOP OF SCRAPBOARD) */}
        <div className="relative z-30 shrink-0 mb-3 md:mb-0 md:-mr-8 self-center group">
          <button
            type="button"
            onClick={onOpenNewArc}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#CCFF00] dark:bg-primary-container text-on-primary-fixed border-[3px] border-on-surface shadow-[5px_5px_0px_#111116] -rotate-6 group-hover:rotate-0 group-hover:scale-105 active:translate-x-1 active:translate-y-1 transition-all duration-200 flex flex-col items-center justify-center p-2 cursor-pointer select-none ring-4 ring-canvas-bg"
            title="Pin a new arc / problem log"
            aria-label="Pin a new arc"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-surface-container-lowest border-2 border-on-surface flex items-center justify-center shadow-[1px_1px_0px_#111116] mb-0.5">
              <RiAddLine className="w-5 h-5 stroke-[2.5] text-on-surface" />
            </div>

            <span className="font-label-sm text-[10px] sm:text-[11px] uppercase tracking-tight font-black leading-none text-[#161e00] dark:text-on-primary-fixed">
              PIN ARC
            </span>

            <span className="font-code-md text-[8px] sm:text-[9px] uppercase font-bold tracking-tighter opacity-85 leading-none mt-0.5 text-[#161e00] dark:text-on-primary-fixed">
              NEW STORY
            </span>
          </button>
        </div>

        {/* THE SCRAPBOARD PANEL (BEHIND THE BUTTON) */}
        <div className="relative z-10 flex-1 w-full bg-surface-container-low border-[3px] border-on-surface shadow-[6px_6px_0px_#111116] p-space-md lg:p-space-lg md:pl-16 mt-5">
          {/* Lime-green washi tape peeking in from top edge */}
          <div className="absolute -top-3.5 left-10 md:left-20 w-32 h-6 bg-[#CCFF00]/95 dark:bg-primary-container/95 border border-on-surface/40 -rotate-2 shadow-sm pointer-events-none flex items-center justify-center">
            <span className="font-label-sm text-[8px] uppercase tracking-widest font-black text-[#161e00] dark:text-on-primary-fixed text-nowrap ">
              ★ SCRAPBOARD HUB ★
            </span>
          </div>

          <div className="absolute -top-3 right-16 w-24 h-5 bg-secondary-fixed/85 border border-on-surface/40 rotate-3 shadow-sm pointer-events-none hidden sm:block" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md pt-1 pl-6">
            {/* Left: Heading & Search Input */}
            <div className="w-full lg:w-1/2 flex flex-col gap-space-xs">
              <div className="flex items-center gap-space-xs flex-wrap">
                <h2 className="font-headline-md text-headline-md font-extrabold tracking-tight text-on-surface">
                  The Scrapboard
                </h2>

                <span className="px-space-xs py-0.5 bg-surface-container-highest border border-on-surface font-label-sm text-[10px] uppercase font-bold text-on-surface -rotate-1 shadow-[1px_1px_0px_#111116]">
                  {allProblems?.length} Problems Cataloged
                </span>
              </div>

              <div className="relative w-full mt-1">
                <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 pointer-events-none" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by problem name, runtime, or vibe..."
                  className="w-full pl-9 pr-space-md py-2 bg-surface-container-lowest border-2 border-on-surface font-code-md text-code-md text-on-surface placeholder:text-on-surface-variant/60 shadow-[3px_3px_0px_#111116] focus:outline-none focus:shadow-[5px_5px_0px_#111116] transition-all"
                />

                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 font-label-sm text-[10px] text-on-surface-variant hover:text-on-surface bg-surface-container border border-on-surface px-1 cursor-pointer"
                  >
                    CLEAR
                  </button>
                ) : (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-label-sm text-[10px] text-on-surface-variant bg-surface-container border border-on-surface px-1 pointer-events-none">
                    ESC
                  </span>
                )}
              </div>
            </div>

            {/* Right: Status Filters & Topic Badges */}
            <div className="w-full lg:w-1/2 flex flex-col gap-space-sm items-start lg:items-end">
              {/* Arc Status Filter Buttons */}
              <div className="flex flex-wrap gap-space-xs items-center">
                {statusFilters.map((filter) => {
                  const isActive = activeStatus === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveStatus(filter.id)}
                      className={`px-space-sm py-1 border-2 border-on-surface font-label-md text-label-md uppercase font-bold shadow-[3px_3px_0px_#111116] active:translate-x-[2px] active:translate-y-[2px] transition-transform cursor-pointer ${
                        isActive
                          ? `${filter.activeStyle} -translate-y-0.5`
                          : "bg-surface-container-lowest hover:bg-surface-container text-on-surface"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>

              {/* Topic Filter Chips */}
              <div className="flex flex-wrap gap-1.5 items-center max-w-170">
                <span className="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant mr-1">
                  TOPICS:
                </span>

                {availableTags.map((topic) => {
                  const isSelected = activeTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setActiveTopic(isSelected ? "" : topic)}
                      className={`px-2 py-0.5 border border-on-surface font-code-md text-label-sm shadow-[2px_2px_0px_#111116] transition-transform hover:scale-105 cursor-pointer ${
                        isSelected
                          ? "bg-primary-container text-on-primary-fixed font-bold"
                          : `bg-surface-container-lowest ${topic.hoverBg} text-on-surface`
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBoard;
