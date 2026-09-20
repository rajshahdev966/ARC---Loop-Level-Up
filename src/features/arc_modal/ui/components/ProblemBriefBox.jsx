import { RiBookOpenLine, RiCheckLine, RiSparklingLine } from "@remixicon/react";
import React from "react";

const ProblemBriefBox = ({register, arcData, errors, setStage, AVAILABLE_TAGS, selectedTags, stage }) => {
  return (
    <div>
      <div className="relative border-2 border-on-surface bg-surface-container-lowest p-4 sm:p-5 pt-6 mt-2">
        <div className="absolute -top-3 left-4 px-2 py-0.5 bg-primary-container text-on-primary-fixed border border-on-surface font-label-sm text-[10px] font-bold uppercase tracking-wider shadow-[1px_1px_0px_#111116]">
          STEP 01: PROBLEM BRIEF
        </div>
        {/* Row 1: Problem Title & Arc Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Problem Title & LeetCode ID */}
          <div className="lg:col-span-7 flex flex-col gap-1.5">
            <label className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider">
              <RiBookOpenLine className="w-3.5 h-3.5" />
              PROBLEM TITLE &amp; LEETCODE ID
            </label>
            <input
              {...register("title", {
                required: "Bro name your arc 💀",
                minLength: {
                  value: 10,
                  message: "That title's giving mid — 10+ chars",
                },
                maxLength: {
                  value: 80,
                  message: "Okay essay writer, chill — 80 max",
                },
              })}
              type="text"
              value={arcData?.title || ""}
              placeholder="Trapping Rain Water"
              className="w-full px-3 py-2 bg-surface-container-lowest border-2 border-on-surface font-code-md text-sm font-bold text-on-surface shadow-[3px_3px_0px_#111116] focus:outline-none focus:shadow-[4px_4px_0px_#111116] transition-all"
            />
            {errors.title && (
              <span className="text-secondary font-label font-bold uppercase">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Arc Stage / Status */}
          <div className="lg:col-span-5 flex flex-col gap-1.5">
            <label className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider">
              <RiSparklingLine className="w-3.5 h-3.5 text-secondary" />
              ARC STAGE / STATUS
            </label>
            <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
              <button
                type="button"
                onClick={() => setStage("VILLAIN")}
                className={`flex-1 py-2 px-1.5 text-center font-label-sm text-[10px] uppercase font-bold border-2 border-on-surface transition-all cursor-pointer ${
                  stage === "VILLAIN"
                    ? "bg-inverse-surface text-inverse-on-surface shadow-[3px_3px_0px_#111116] -translate-y-0.5"
                    : "bg-surface-container-lowest hover:bg-surface-container text-on-surface"
                }`}
              >
                VILLAIN ERA 💀
              </button>

              <button
                type="button"
                onClick={() => setStage("MID")}
                className={`flex-1 py-2 px-1.5 text-center font-label-sm text-[10px] uppercase font-bold border-2 border-on-surface transition-all cursor-pointer ${
                  stage === "MID"
                    ? "bg-secondary-container text-on-secondary-container font-black shadow-[3px_3px_0px_#111116] -translate-y-0.5"
                    : "bg-surface-container-lowest hover:bg-surface-container text-on-surface"
                }`}
              >
                MID-ARC ⚡
              </button>

              <button
                type="button"
                onClick={() => setStage("FINAL")}
                className={`flex-1 py-2 px-1.5 text-center font-label-sm text-[10px] uppercase font-bold border-2 border-on-surface transition-all cursor-pointer ${
                  stage === "FINAL"
                    ? "bg-primary-container text-on-primary-fixed shadow-[3px_3px_0px_#111116] -translate-y-0.5"
                    : "bg-surface-container-lowest hover:bg-surface-container text-on-surface"
                }`}
              >
                FINAL FORM ✅
              </button>
            </div>
          </div>
        </div>
        {/* Row 2: Short Description & Constraints */}
        <div className="mt-4 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider">
              PROBLEM SHORT DESCRIPTION &amp; CONSTRAINTS
            </span>
          </div>
          <textarea
            {...register("description", {
              required: "Tell us the lore, we're waiting",
              minLength: {
                value: 20,
                message: "That's not an arc, that's a shrug — 20+ chars",
              },
              maxLength: {
                value: 500,
                message: "This ain't a report — 500 max",
              },
            })}
            value={arcData?.quote || ""}
            rows={3}
            className="w-full p-2.5 bg-surface-container-lowest border-2 border-on-surface font-code-md text-xs leading-relaxed text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:shadow-[3px_3px_0px_#111116] transition-all resize-none"
          />
          {errors.description && (
            <span className="text-secondary font-label font-bold uppercase">
              {errors.description.message}
            </span>
          )}
        </div>
        {/* Row 3: Topic Tags */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider">
              TOPIC TAGS (SCRAPBOOK PILLS)
            </span>
            <span className="font-code-md text-[9px] uppercase tracking-wider text-on-surface-variant/70">
              SELECT ALL THAT FIT
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {AVAILABLE_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-2.5 py-1 border-2 border-on-surface font-code-md text-xs transition-all flex items-center gap-1 cursor-pointer ${
                    isSelected
                      ? "bg-primary-container text-on-primary-fixed font-bold shadow-[2px_2px_0px_#111116] -translate-y-0.5"
                      : "bg-surface-container-lowest hover:bg-surface-container text-on-surface"
                  }`}
                >
                  <span>{tag}</span>
                  {isSelected && (
                    <RiCheckLine className="w-3.5 h-3.5 stroke-[3]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemBriefBox;
