import React, { useEffect, useState } from "react";
import {
  RiCloseLine,
  RiPushpinFill,
  RiAddLine,
  RiCheckLine,
  RiSaveLine,
  RiArrowDownSLine,
  RiBookOpenLine,
  RiSparklingLine,
  RiDeleteBinLine,
  RiPriceTag3Line,
} from "@remixicon/react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Editor from "@monaco-editor/react";
import { nanoid } from "nanoid";
import dsaLanguages from "../../../../shared/constants/dsaLanguages";
import availableTags from "../../../../shared/constants/availableTags";
import TopPinBadge from "../components/TopPinBadge";
import ModalHeader from "../components/ModalHeader";
import TricolourDisplayButton from "../../../../shared/ui/components/TricolourDisplayButtons";
import tapeColors from "../../../../shared/constants/tapeColors";
import ModalFooter from "../components/ModalFooter";

const createApproach = (idx = 1) => {
  const formattedNum = String(idx).padStart(2, "0");
  return {
    tabName:
      idx === 1
        ? "APPROACH 01 [BRUTE / VILLAIN]"
        : `APPROACH ${formattedNum} [OPTIMIZED]`,
    name:
      idx === 1
        ? "Approach 1: Brute Force Struggle (O(n²))"
        : `Approach ${idx}: Optimized Strategy`,
    language: "python",
    code: `# Document your approach, time/space complexity & thought process\nclass Solution:\n    def solve(self):\n        pass`,
  };
};

const ArcModal = ({
  isOpen = false,
  onClose = () => {},
  allProblems,
  setAllProblems,
  selectedArc,
  setSelectedArc,
}) => {
  const [activeApproachIdx, setActiveApproachIdx] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "VILLAIN",
      tags: [],
      approachArr: [createApproach(1)],
      tapeText: "",
      tapeColor: "lime",
    },
  });

  const {
    fields: approaches,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "approachArr",
  });

  const watchedApproaches = watch("approachArr");
  const watchedTapeColor = watch("tapeColor");
  const watchedTapeText = watch("tapeText");
  const selectedTapeObj =
    tapeColors.find((c) => c.id === watchedTapeColor) || tapeColors[0];

  const currentApproach =
    watchedApproaches?.[activeApproachIdx] ||
    watchedApproaches?.[0] ||
    approaches?.[0];

  useEffect(() => {
    if (!isOpen) return;
    if (selectedArc) {
      reset({
        title: selectedArc.title || "",
        description: selectedArc.description || selectedArc.quote || "",
        status: selectedArc.status || "VILLAIN",
        tags: selectedArc.tags || [],
        approachArr: selectedArc.approachArr?.length
          ? selectedArc.approachArr
          : [createApproach(1)],
        tapeColor: selectedArc.tapeColor || "lime",
        tapeText: selectedArc.tapeText || "",
      });
    } else {
      reset({
        title: "",
        description: "",
        status: "VILLAIN",
        tags: [],
        approachArr: [createApproach(1)],
        tapeText: "",
        tapeColor: "lime",
      });
    }
    setActiveApproachIdx(0);
  }, [selectedArc, isOpen, reset]);

  // --------------------------------------------------
  // ESCAPE LISTENER & BODY SCROLL LOCK
  // --------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // --------------------------------------------------
  // ADD & REMOVE APPROACH
  // --------------------------------------------------
  const handleAddApproach = () => {
    const nextIndex = approaches.length + 1;
    append(createApproach(nextIndex));
    setActiveApproachIdx(approaches.length);
  };

  const handleRemoveApproach = (idxToRemove, e) => {
    e.stopPropagation();
    if (approaches.length <= 1) return;
    remove(idxToRemove);
    if (activeApproachIdx >= idxToRemove) {
      setActiveApproachIdx((prev) => Math.max(0, prev - 1));
    }
  };

  // --------------------------------------------------
  // FORM SUBMIT
  // --------------------------------------------------
  const onFormSubmit = (data) => {
    const payload = {
      status: data.status,
      statusBadge:
        data.status === "FINAL"
          ? "FINAL FORM ✅"
          : data.status === "MID"
            ? "MID-ARC ⚡"
            : "VILLAIN ERA 💀",
      statusBadgeStyle:
        data.status === "FINAL"
          ? "bg-primary-container text-on-primary-fixed"
          : data.status === "MID"
            ? "bg-secondary-container text-on-secondary-container font-black"
            : "bg-inverse-surface text-inverse-on-surface",
      title: data.title,
      tags: data.tags,
      quote: data.description,
      approachArr: data.approachArr,
      tapeColor: data.tapeColor,
      tapeText: data.tapeText,
    };
    let newProblemsArr;
    if (selectedArc) {
      console.log("I was runned from edit");
      newProblemsArr = allProblems.map((arc) =>
        arc.id === selectedArc.id ? { ...payload, id: selectedArc.id } : arc,
      );
      console.log("New Problem", newProblemsArr);
    } else {
      newProblemsArr = [...allProblems, { ...payload, id: nanoid() }];
    }
    console.log(newProblemsArr);
    
    setAllProblems(newProblemsArr);
    localStorage.setItem("allProblems", JSON.stringify(newProblemsArr));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-md backdrop-saturate-150 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface-container-lowest border-2 border-on-surface shadow-[10px_10px_0px_#111116] my-auto text-on-surface transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP PIN BADGE */}
        <TopPinBadge selectedArc={selectedArc} />

        {/* MODAL HEADER */}
        <ModalHeader selectedArc={selectedArc} onClose={onClose} />

        {/* MODAL FORM */}
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="p-4 sm:p-6 space-y-6 max-h-[72vh] overflow-y-auto no-scrollbar">
            {/* STEP 01: PROBLEM BRIEF BOX */}
            <div className="relative border-2 border-on-surface bg-surface-container-lowest p-4 sm:p-5 pt-6 mt-2">
              <div className="absolute -top-3 left-4 px-2 py-0.5 bg-primary-container text-on-primary-fixed border border-on-surface font-label-sm text-[10px] font-bold uppercase tracking-wider shadow-[1px_1px_0px_#111116]">
                STEP 01: THE INTEL
              </div>

              {/* Problem Title & Stage */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                <div className="lg:col-span-7 flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase font-bold tracking-wider text-on-surface">
                    <RiBookOpenLine className="w-3.5 h-3.5" />
                    PROBLEM TITLE
                  </label>

                  <input
                    {...register("title", {
                      required: "Bro name your arc 💀",
                      minLength: {
                        value: 3,
                        message: "3 chars min — we're not mind readers 🔮",
                      },
                      maxLength: {
                        value: 80,
                        message: "That's a whole essay — 80 chars max 💀",
                      },
                    })}
                    placeholder="e.g. 42. Trapping Rain Water"
                    className="w-full px-3 py-2 bg-surface-container-lowest border-2 border-on-surface font-code-md text-sm font-bold text-on-surface shadow-[3px_3px_0px_#111116] focus:outline-none focus:shadow-[4px_4px_0px_#111116] transition-all"
                  />

                  {errors.title && (
                    <span className="text-secondary font-code-md text-xs font-bold uppercase mt-0.5">
                      {errors.title.message}
                    </span>
                  )}
                </div>

                {/* Status Radio Tiles */}
                <div className="lg:col-span-5 flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase font-bold tracking-wider text-on-surface">
                    <RiSparklingLine className="w-3.5 h-3.5 text-secondary" />
                    ARC STAGE / STATUS
                  </label>

                  <div className="flex gap-1.5 flex-wrap sm:flex-nowrap">
                    {[
                      { value: "VILLAIN", label: "VILLAIN 💀" },
                      { value: "MID", label: "MID-ARC ⚡" },
                      { value: "FINAL", label: "FINAL FORM ✅" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex-1 cursor-pointer select-none"
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register("status")}
                          className="sr-only peer"
                        />
                        <div
                          className={`py-2 px-1 text-center font-label-sm text-[10px] uppercase font-bold border-2 border-on-surface transition-all
                  ${
                    option.value === "VILLAIN"
                      ? "peer-checked:bg-inverse-surface peer-checked:text-inverse-on-surface"
                      : option.value === "MID"
                        ? "peer-checked:bg-secondary-container peer-checked:text-on-secondary-container font-black"
                        : "peer-checked:bg-primary-container peer-checked:text-on-primary-fixed"
                  }
                  peer-checked:shadow-[3px_3px_0px_#111116]
                  peer-checked:-translate-y-0.5
                  bg-surface-container-lowest hover:bg-surface-container
                  `}
                        >
                          {option.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* TAPE COLOR SELECTION  */}
              <div className="mt-4 pt-3 border-t border-on-surface/20 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Tape Text Input */}
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase font-bold tracking-wider text-on-surface">
                    <RiPriceTag3Line className="w-3.5 h-3.5" />
                    WASHI TAPE TEXT
                  </label>
                  <input
                    {...register("tapeText")}
                    placeholder="e.g. /// CONFIRMED /// or // BRUTE TO OPT"
                    className="w-full px-3 py-2 bg-surface-container-lowest border-2 border-on-surface font-code-md text-xs font-bold text-on-surface shadow-[2px_2px_0px_#111116] focus:outline-none focus:shadow-[3px_3px_0px_#111116] transition-all"
                  />
                </div>
                {/* Tape Color Swatches Radio Group */}
                <div className="md:col-span-6 flex flex-col gap-1.5">
                  <label className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-on-surface">
                    TAPE COLOR &amp; PREVIEW
                  </label>
                  <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-2 p-1.5 bg-surface-container-low border-2 border-on-surface shadow-[2px_2px_0px_#111116] flex-wrap">
                      {tapeColors.map((color) => {
                        const isChecked = watchedTapeColor === color.id;
                        return (
                          <label
                            key={color.id}
                            className="relative cursor-pointer group select-none"
                            title={color.label}
                          >
                            <input
                              type="radio"
                              value={color.id}
                              {...register("tapeColor")}
                              className="peer sr-only"
                            />
                            <div
                              className={`w-6 h-6 border-2 border-on-surface ${color.bgClass} shadow-[1px_1px_0px_#111116] transition-all group-hover:scale-110 flex items-center justify-center peer-checked:ring-2 peer-checked:ring-offset-1 peer-checked:ring-on-surface peer-checked:scale-105`}
                            >
                              {isChecked && (
                                <RiCheckLine
                                  className={`w-3.5 h-3.5 ${color.textClass} stroke-[3]`}
                                />
                              )}
                            </div>
                          </label>
                        );
                      })}
                    </div>

                    {/* Live Tape Preview Chip */}
                    <div
                      className={`shrink-0 px-3 py-1.5 border border-on-surface/40 shadow-[2px_2px_0px_#111116] -rotate-1 flex items-center justify-center transition-colors ${selectedTapeObj.bgClass} ${selectedTapeObj.textClass}`}
                    >
                      <span className="font-code-md text-[10px] font-black tracking-widest uppercase truncate max-w-[150px]">
                        {watchedTapeText || "/// TAPE PREVIEW ///"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description / Lore */}
              <div className="mt-4 flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-on-surface">
                    LORE DUMP &amp; CONSTRAINTS
                  </span>
                  <span className="font-code-md text-[9px] uppercase tracking-wider text-on-surface-variant/70">
                    MARKDOWN READY
                  </span>
                </div>

                <textarea
                  {...register("description", {
                    required: "Spill the tea — what's the lore? ☕",
                    minLength: {
                      value: 20,
                      message:
                        "That's giving one-word-answer energy — 20+ chars",
                    },
                    maxLength: {
                      value: 500,
                      message: "Okay Tolstoy, wrap it up — 500 max 📚",
                    },
                  })}
                  rows={3}
                  placeholder="Spill the breakthrough, the TLE tears, the 3am 'oh wait' moment..."
                  className="w-full p-2.5 bg-surface-container-lowest border-2 border-on-surface font-code-md text-xs leading-relaxed text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:shadow-[3px_3px_0px_#111116] transition-all resize-none"
                />

                {errors.description && (
                  <span className="text-secondary font-code-md text-xs font-bold uppercase">
                    {errors.description.message}
                  </span>
                )}
              </div>

              {/* Topic Tags */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-on-surface">
                    TOPIC TAGS (PICK YOUR FIGHTERS)
                  </span>
                  <span className="font-code-md text-[9px] uppercase tracking-wider text-on-surface-variant/70">
                    ALL THAT APPLY, NO SHAME
                  </span>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {availableTags.map((tag) => (
                    <label key={tag} className="cursor-pointer select-none">
                      <input
                        type="checkbox"
                        value={tag}
                        {...register("tags")}
                        className="sr-only peer"
                      />
                      <div className="px-2.5 py-1 border-2 border-on-surface font-code-md text-xs flex items-center gap-1 transition-all bg-surface-container-lowest hover:bg-surface-container text-on-surface peer-checked:bg-primary-container peer-checked:text-on-primary-fixed peer-checked:font-bold peer-checked:shadow-[2px_2px_0px_#111116] peer-checked:-translate-y-0.5">
                        <span>{tag}</span>
                        <RiCheckLine className="hidden peer-checked:block w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* STEP 02: APPROACH TABS & TERMINAL */}
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  {approaches.map((app, idx) => {
                    const isActive = idx === activeApproachIdx;
                    return (
                      <div key={app.id} className="relative group">
                        <button
                          type="button"
                          onClick={() => setActiveApproachIdx(idx)}
                          className={`px-3 sm:px-4 py-1.5 border-2 border-on-surface font-code-md text-xs font-bold uppercase transition-all cursor-pointer ${
                            isActive
                              ? "bg-primary-container text-on-primary-fixed shadow-[3px_3px_0px_#111116] -translate-y-0.5"
                              : "bg-surface-container-lowest hover:bg-surface-container text-on-surface"
                          }`}
                        >
                          {watchedApproaches?.[idx]?.tabName ||
                            `ERA 0${idx + 1}`}
                        </button>

                        {/* Optional approach remove button (if >1 approach) */}
                        {approaches.length > 1 && (
                          <button
                            type="button"
                            onClick={(e) => handleRemoveApproach(idx, e)}
                            title="Delete this era"
                            className="hidden group-hover:flex absolute -top-2 -right-2 w-4 h-4 bg-error text-on-error border border-on-surface rounded-full items-center justify-center text-[9px] font-bold shadow-[1px_1px_0px_#111116] hover:scale-110 cursor-pointer"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleAddApproach}
                  className="px-3 py-1.5 border-2 border-on-surface bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary-fixed font-code-md text-xs font-bold uppercase flex items-center gap-1 shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                >
                  <RiAddLine className="w-4 h-4 stroke-[2.5]" />
                  <span>UNLOCK NEW ERA</span>
                </button>
              </div>

              {/* APPROACH DETAILS & CODE TERMINAL */}
              <div className="mt-4 border-2 border-on-surface bg-surface-container-lowest p-4 sm:p-5 space-y-4 shadow-[4px_4px_0px_#111116]">
                {/* Approach Identity Name */}
                <div className="flex flex-col gap-1">
                  <span className="font-label-sm text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">
                    THIS ERA'S ALTER EGO
                  </span>
                  <input
                    {...register(`approachArr.${activeApproachIdx}.name`)}
                    placeholder="e.g. Era 1: O(n) Two-Pointer Breakthrough"
                    className="w-full py-1 font-headline-md text-base sm:text-lg font-bold bg-transparent border-b-2 border-on-surface focus:outline-none focus:border-secondary text-on-surface transition-colors"
                  />
                </div>

                {/* Dark Code Terminal */}
                <div className="border-2 border-on-surface bg-[#121316] shadow-[3px_3px_0px_#111116] overflow-hidden">
                  {/* Terminal Header */}
                  <div className="bg-[#1b1c22] px-3 py-2 border-b-2 border-on-surface flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <TricolourDisplayButton />

                      <span className="font-code-md text-xs font-bold text-primary-container pl-2 tracking-wide uppercase">
                        //
                        {currentApproach?.language?.toUpperCase() || "PYTHON"}
                        _IMPLEMENTATION
                      </span>
                    </div>

                    {/* Language Selector */}
                    <div className="relative">
                      <select
                        {...register(
                          `approachArr.${activeApproachIdx}.language`,
                        )}
                        className="appearance-none bg-[#282932] border border-white/20 px-2 pr-6 py-0.5 text-[#e4e1e9] font-code-md text-[11px] outline-none cursor-pointer uppercase font-bold hover:border-white/30 transition-colors"
                      >
                        {dsaLanguages.map((lang) => (
                          <option
                            key={lang.value}
                            value={lang.value}
                            className="bg-[#1b1c22] text-[#e4e1e9]"
                          >
                            {lang.label}
                          </option>
                        ))}
                      </select>
                      <RiArrowDownSLine className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/70" />
                    </div>
                  </div>

                  {/* Monaco Code Editor */}
                  <div className="w-full h-[380px] sm:h-[440px]">
                    <Controller
                      control={control}
                      name={`approachArr.${activeApproachIdx}.code`}
                      render={({ field }) => (
                        <Editor
                          height="100%"
                          width="100%"
                          language={currentApproach?.language}
                          theme="vs-dark"
                          value={field.value || ""}
                          onChange={(val) => field.onChange(val || "")}
                          options={{
                            fontSize: 13,
                            fontFamily: "JetBrains Mono, monospace",
                            minimap: { enabled: false },
                            padding: { top: 14, bottom: 14 },
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            tabSize: 4,
                            cursorBlinking: "smooth",
                            smoothScrolling: true,
                            lineNumbers: "on",
                            roundedSelection: false,
                          }}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MODAL FOOTER */}
          <ModalFooter onClose={onClose} selectedArc={selectedArc} />
        </form>
      </div>
    </div>
  );
};

export default ArcModal;
