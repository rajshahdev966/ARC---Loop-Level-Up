import React, { useState, useEffect } from "react";
import {
  RiCloseLine,
  RiPushpinFill,
  RiAddLine,
  RiCheckLine,
  RiSaveLine,
  RiArrowDownSLine,
  RiBookOpenLine,
  RiSparklingLine,
} from "@remixicon/react";

import { useForm } from "react-hook-form";
import Editor from "@monaco-editor/react";

const TAPE_COLORS = [
  {
    id: "yellow",
    hex: "#c3f400",
    bgClass: "bg-[#c3f400]",
    textClass: "text-[#161e00]",
  },
  {
    id: "pink",
    hex: "#e30071",
    bgClass: "bg-[#e30071]",
    textClass: "text-white",
  },
  {
    id: "cyan",
    hex: "#00daf3",
    bgClass: "bg-[#00daf3]",
    textClass: "text-[#002022]",
  },
  {
    id: "orange",
    hex: "#ff9800",
    bgClass: "bg-[#ff9800]",
    textClass: "text-black",
  },
  {
    id: "dark",
    hex: "#1b1b20",
    bgClass: "bg-[#1b1b20]",
    textClass: "text-white",
  },
];

const AVAILABLE_TAGS = [
  // arrays & strings
  "#ARRAYS",
  "#DP",
  "#STRINGS",
  "#TWOPOINTERS",
  "#SLIDINGWINDOW",
  "#SORTING",
  "#BINARYSEARCH",

  // hashing & stacks/queues
  "#HASHING",
  "#STACK",
  "#MONOTONICSTACK",
  "#QUEUE",

  // linked structures & trees
  "#LINKEDLIST",
  "#TREES",
  "#BST",
  "#HEAP",
  "#TRIE",

  // graphs
  "#GRAPHS",
  "#UNIONFIND",

  // technique / paradigm tags
  "#RECURSION",
  "#BACKTRACKING",
  "#DYNAMICPROGRAMMING",
  "#GREEDY",
  "#BITMANIPULATION",
];

const dsaLanguages = [
  { label: "C++", value: "cpp" },
  { label: "Java", value: "java" },
  { label: "Python", value: "python" },
  { label: "JavaScript", value: "javascript" },
  { label: "C", value: "c" },
];

const ArcModal = ({
  isOpen = false,
  onClose = () => {},
  arcData = null,
  onSave = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [stage, setStage] = useState(arcData?.status);
  const [selectedTags, setSelectedTags] = useState([]);
  const [approaches, setApproaches] = useState(arcData?.approachArr || []);
  const [activeApproachIdx, setActiveApproachIdx] = useState(0);
  console.log("Re-render");

  // Sync when arcData changes (for editing existing arcs)
  useEffect(() => {
    if (arcData) {
      setStage(arcData.status);
      const parsedTags = String(arcData.tag).toUpperCase().split(" ");
      setSelectedTags(parsedTags);
      setApproaches(arcData.approachArr);
    } else {
      // Default initial state
      setSelectedTags([]);
      setStage("VILLAIN");
      setApproaches(null);
      setActiveApproachIdx(0);
    }
  }, [arcData, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentApproach = approaches?.[activeApproachIdx] || null;

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleAddApproach = () => {
    const newIdx = approaches.length + 1;
    const newApproach = {
      id: `approach-${Date.now()}`,
      tabName: `APPROACH 0${newIdx} [NEW ARCH]`,
      name: `Approach ${newIdx}: New Perspective`,
      tapeColor: "cyan",
      tapeText: `// TAPE: APPROACH ${newIdx} LOG`,
      tapePreview: `// TAPE: APP 0${newIdx}`,
      fileName: `// APPROACH_0${newIdx}.PY`,
      language: "Python 3",
      code: `class Solution:\n    def solve(self):\n        pass`,
    };
    setApproaches([...approaches, newApproach]);
    setActiveApproachIdx(approaches.length);
  };

  const updateCurrentApproach = (fields) => {
    setApproaches((prev) =>
      prev.map((app, idx) =>
        idx === activeApproachIdx ? { ...app, ...fields } : app,
      ),
    );
  };

  const handleSave = () => {
    const payload = {
      id: arcData?.id || `arc-${Date.now()}`,
      title,
      stage,
      tags: selectedTags,
      approaches,
      activeApproach: currentApproach,
      updatedAt: new Date().toISOString(),
    };
    onSave(payload);
    onClose();
  };

  // const selectedTapeColorObj =
  //   TAPE_COLORS.find((c) => c.id === currentApproach.tapeColor) ||
  //   TAPE_COLORS[1];

  console.log(currentApproach?.code);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-md backdrop-saturate-150 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface-container-lowest border-2 border-on-surface shadow-[10px_10px_0px_#111116] my-auto transition-transform duration-200 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top Center Tape Badge */}
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
              Log your villain era struggle, chronicle your awakening, and lock
              in the final form.
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

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[72vh] overflow-y-auto no-scrollbar">
          {/* STEP 01: PROBLEM BRIEF BOX */}
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

          {/* APPROACH TABS */}
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

          {/* APPROACH DETAILS BOX */}
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
                  onChange={(e) =>
                    updateCurrentApproach({ name: e.target.value })
                  }
                  placeholder="Approach 1: O(N²) Nested Scans (Pure Pain)"
                  className="w-full py-1 font-headline-md text-base sm:text-lg font-bold text-on-surface bg-transparent border-b-2 border-on-surface focus:outline-none focus:border-secondary transition-colors"
                />
              </div>

              {/* Tape Color Swatches */}
              {/* <div className="flex items-center gap-2 self-start md:self-center border-2 border-on-surface p-1.5 bg-surface-container-low shadow-[2px_2px_0px_#111116]">
                <span className="font-label-sm text-[10px] uppercase font-bold text-on-surface px-1">
                  TAPE:
                </span>
                <div className="flex items-center gap-1.5">
                  {TAPE_COLORS.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() =>
                        updateCurrentApproach({ tapeColor: color.id })
                      }
                      className={`w-5 h-5 border-2 border-on-surface cursor-pointer transition-transform ${
                        color.bgClass
                      } ${
                        currentApproach.tapeColor === color.id
                          ? "scale-110 shadow-[1px_1px_0px_#111116] ring-1 ring-on-surface"
                          : "opacity-85 hover:opacity-100"
                      }`}
                      aria-label={`Select ${color.id} tape`}
                    />
                  ))}
                </div>
              </div> */}
            </div>

            {/* Tape Text Input & Tape Preview */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* <div className="flex-1 flex items-center border-2 border-on-surface bg-surface-container-lowest px-2 shadow-[2px_2px_0px_#111116]">
                <span className="font-label-sm text-[10px] font-bold text-on-surface uppercase pr-2 border-r border-on-surface/30 whitespace-nowrap">
                  TAPE TEXT:
                </span>
                <input
                  type="text"
                  // value={currentApproach.tapeText}
                  // onChange={(e) =>
                  //   updateCurrentApproach({
                  //     tapeText: e.target.value,
                  //     tapePreview: e.target.value.slice(0, 30),
                  //   })
                  // }
                  className="w-full px-2 py-1.5 font-code-md text-xs text-on-surface bg-transparent focus:outline-none"
                />
              </div> */}

              {/* Live Tape Preview Chip */}
              {/* <div
                className={`shrink-0 px-3 py-1.5 border-2 border-on-surface shadow-[2px_2px_0px_#111116] -rotate-1 flex items-center justify-center ${selectedTapeColorObj.bgClass} ${selectedTapeColorObj.textClass}`}
              >
                <span className="font-code-md text-xs font-black tracking-wider uppercase truncate max-w-[200px]">
                  {currentApproach.tapePreview || "// TAPE PREVIEW"}
                </span>
              </div> */}
            </div>

            {/* Code Block Terminal / Editor */}
            <div className="border-2 border-on-surface bg-[#121316] text-[#e4e1e9] shadow-[3px_3px_0px_#111116] overflow-hidden">
              {/* Terminal Window Header */}
              <div className="bg-[#1b1c22] px-3 py-2 border-b-2 border-on-surface flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block border border-black/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block border border-black/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block border border-black/40" />
                  </div>
                </div>

                <div className="relative">
                  <select
                    value={currentApproach?.language}
                    onChange={(e) =>{console.log(e.target.value);
                    }}
                    className="
                    appearance-none
                    flex items-center
                    bg-[#282932]
                    border border-white/20
                    px-2 pr-7 py-0.5
                    text-[#e4e1e9]
                    font-code-md text-[11px]
                    outline-none
                    cursor-pointer
                    hover:border-white/30
                    focus:border-white/40
                    transition-colors
    "
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
              </div>

              {/* Code Editor / Line Numbers */}
              <div className="h-[500px]">
                <Editor
                  height="100%"
                  language={currentApproach?.language}
                  theme="vs-dark"
                  value={currentApproach?.code}
                  onChange={(value) =>
                    updateCurrentApproach({ code: value || "" })
                  }
                  options={{
                    fontSize: 14,
                    fontFamily: "JetBrains Mono, monospace",
                    minimap: { enabled: true },
                    padding: { top: 16 },
                    smoothScrolling: true,
                    cursorBlinking: "smooth",
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    lineNumbers: "on",
                    roundedSelection: false,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky Footer Action Bar */}
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
    </div>
  );
};

export default ArcModal;
