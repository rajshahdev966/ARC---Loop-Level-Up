import React, { useContext, useEffect } from "react";
import {
  RiCloseLine,
  RiPushpinFill,
  RiArrowDownSLine,
  RiCodeSSlashLine,
  RiCheckboxCircleFill,
  RiEmotionUnhappyLine,
  RiCheckLine,
} from "@remixicon/react";
import { Controller } from "react-hook-form";
import Editor from "@monaco-editor/react";
import useNoteModal from "../../hooks/useNoteModal";
import noteColors from "../../../../shared/constants/noteColors";
import dsaLanguages from "../../../../shared/constants/dsaLanguages";
import TricolourDisplayButtons from "../../../../shared/ui/components/TricolourDisplayButtons";
import { StickyNotesContext } from "../../../../config/StickyNoteContext";

const NoteModal = ({}) => {
  const { setShowModal } = useContext(StickyNotesContext);
  const {
    register,
    handleSubmit,
    control,
    errors,
    selectedBg,
    selectedLanguage,
    noteSubmit,
  } = useNoteModal();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-md backdrop-saturate-150 overflow-y-auto animate-in fade-in duration-200"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative w-full max-w-3xl bg-surface-container-lowest border-2 border-on-surface shadow-[8px_8px_0px_#111116] my-auto transition-transform duration-200 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Tape / Pin Badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-primary-container text-on-primary-fixed border-2 border-on-surface font-label-sm text-[10px] font-black tracking-widest uppercase shadow-[2px_2px_0px_#111116] flex items-center gap-1.5 z-10 select-none">
          <RiPushpinFill className="w-3.5 h-3.5" />
          <span>// STICKY SCRAP_NOTE • MEMORY_DUMP_V2</span>
        </div>

        {/* Modal Header */}
        <div className="border-b-2 border-on-surface p-5 sm:p-6 pb-4 pt-6 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 bg-on-surface text-surface-container-lowest font-code-md text-[10px] font-black uppercase tracking-wider">
                SCRAP NOTE
              </span>
              <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-code-md text-[10px] font-black uppercase tracking-wider border border-secondary/30">
                STICKY WALL ARCHIVE
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-on-surface leading-tight">
              PIN A WIN OR TRAUMA 📌
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant font-medium mt-0.5">
              Chronicle your breakthrough realizations or the villain-era bugs
              you never want to repeat.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="shrink-0 w-8 h-8 flex items-center justify-center border-2 border-on-surface bg-surface-container-lowest hover:bg-error-container hover:text-on-error-container text-on-surface shadow-[3px_3px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <RiCloseLine className="w-5 h-5 font-bold" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit(noteSubmit)}>
          <div className="p-4 sm:p-6 space-y-5 max-h-[72vh] overflow-y-auto no-scrollbar">
            {/* Row: W / L Outcome and Sticky Color Selection */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
              {/* Outcome Type (W / L Sticker Cards) */}
              <div className="md:col-span-7">
                <label className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider mb-2">
                  WHAT HAPPENED? (VIBE CHECK)
                </label>

                <div className="grid grid-cols-2 gap-3">
                  {/* WIN TILE */}
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      value="W"
                      {...register("type")}
                      className="peer sr-only"
                    />
                    <div className="border-2 border-on-surface bg-surface-container-low p-2.5 sm:p-3 text-center font-label-md font-bold uppercase transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#111116] -rotate-1 peer-checked:bg-primary-container peer-checked:text-on-primary-fixed peer-checked:shadow-[4px_4px_0px_#111116] peer-checked:-translate-y-0.5">
                      <RiCheckboxCircleFill className="w-4 h-4" />
                      <span className="tracking-wide">🏆 WIN (W)</span>
                    </div>
                  </label>

                  {/* TRAUMA TILE */}
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      value="L"
                      {...register("type")}
                      className="peer sr-only"
                    />
                    <div className="border-2 border-on-surface bg-surface-container-low p-2.5 sm:p-3 text-center font-label-md font-bold uppercase transition-all flex items-center justify-center gap-2 shadow-[2px_2px_0px_#111116] rotate-1 peer-checked:bg-error-container peer-checked:text-on-error-container peer-checked:shadow-[4px_4px_0px_#111116] peer-checked:-translate-y-0.5">
                      <RiEmotionUnhappyLine className="w-4 h-4" />
                      <span className="tracking-wide">💀 TRAUMA (L)</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Sticky Note Color Swatches (Radio Group) */}
              <div className="md:col-span-5">
                <label className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider mb-2">
                  STICKY COLOR
                </label>

                <div className="flex items-center gap-2 sm:gap-2.5 p-2 bg-surface-container-low border-2 border-on-surface shadow-[2px_2px_0px_#111116] flex-wrap">
                  {noteColors.map((color) => {
                    const isChecked = selectedBg === color.bgClass;
                    return (
                      <label
                        key={color.id}
                        className="relative cursor-pointer group"
                        title={color.label}
                      >
                        <input
                          type="radio"
                          value={color.bgClass}
                          {...register("bgFront")}
                          className="peer sr-only"
                        />
                        <div
                          className={`w-7 h-7 rounded-full border-2 border-on-surface ${color.bgClass} shadow-[1px_1px_0px_#111116] transition-all group-hover:scale-110 flex items-center justify-center peer-checked:ring-2 peer-checked:ring-offset-1 peer-checked:ring-on-surface peer-checked:scale-105`}
                        >
                          {isChecked && (
                            <RiCheckLine className="w-3.5 h-3.5 text-black stroke-[3]" />
                          )}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Title & Language Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              {/* Catchy Title */}
              <div className="sm:col-span-8 flex flex-col gap-1.5">
                <label className="font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider">
                  CATCHY TAKEAWAY TITLE
                </label>
                <input
                  {...register("title", {
                    required: "Title is required 💀",
                    minLength: {
                      value: 5,
                      message: "Make it punchy — at least 5 chars",
                    },
                  })}
                  type="text"
                  placeholder="e.g. Fast & Slow Pointers (Floyd's Cycle)"
                  className="w-full px-3 py-2 bg-surface-container-lowest border-2 border-on-surface font-code-md text-sm font-bold text-on-surface shadow-[3px_3px_0px_#111116] focus:outline-none focus:shadow-[4px_4px_0px_#111116] transition-all"
                />
                {errors.title && (
                  <span className="text-error font-code-md text-[11px] font-bold">
                    {errors.title.message}
                  </span>
                )}
              </div>

              {/* Code Language Dropdown */}
              <div className="sm:col-span-4 flex flex-col gap-1.5">
                <label className="font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider">
                  SYNTAX LANGUAGE
                </label>
                <div className="relative">
                  <select
                    {...register("language")}
                    className="w-full bg-surface-container-lowest px-3 py-2 border-2 border-on-surface text-on-surface font-code-md text-xs font-bold shadow-[3px_3px_0px_#111116] focus:outline-none focus:shadow-[4px_4px_0px_#111116] transition-all appearance-none cursor-pointer pr-8"
                  >
                    {dsaLanguages.map((language) => (
                      <option key={language.value} value={language.value}>
                        {language.label}
                      </option>
                    ))}
                  </select>
                  <RiArrowDownSLine className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Handwritten Sharpie Dump */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label className="font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider">
                  HANDWRITTEN SHARPIE DUMP
                </label>
                <span className="font-code-md text-[9px] uppercase tracking-wider text-on-surface-variant/70">
                  MARKDOWN READY
                </span>
              </div>
              <textarea
                {...register("quote")}
                rows="3"
                placeholder="Explain the breakthrough gotcha or painful bug like you are venting to a senior peer..."
                className="w-full p-2.5 bg-surface-container-lowest border-2 border-on-surface font-code-md text-xs leading-relaxed text-on-surface placeholder:text-on-surface-variant/60 shadow-[3px_3px_0px_#111116] focus:outline-none focus:shadow-[4px_4px_0px_#111116] transition-all resize-none"
              />
            </div>

            {/* Monaco Terminal Window */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-[10px] uppercase font-bold text-on-surface tracking-wider flex items-center gap-1.5">
                <RiCodeSSlashLine className="w-3.5 h-3.5" />
                CODE SNIPPET // CHEAT-SHEET
              </label>

              <div className="border-2 border-on-surface bg-[#121316] text-[#e4e1e9] shadow-[3px_3px_0px_#111116] overflow-hidden">
                {/* Terminal Window Header */}
                <div className="bg-[#1b1c22] px-3 py-2 border-b-2 border-on-surface flex items-center justify-between">
                  <TricolourDisplayButtons />

                  <span className="font-code-md text-[10px] bg-[#282932] border border-white/20 px-2 py-0.5 text-white/80 uppercase">
                    {selectedLanguage}
                  </span>
                </div>

                {/* Monaco Editor Container */}
                <div className="w-full h-[260px] bg-[#1e1e1e]">
                  <Controller
                    name="codeSnippet"
                    control={control}
                    render={({ field }) => (
                      <Editor
                        height="100%"
                        width="100%"
                        language={selectedLanguage}
                        theme="vs-dark"
                        value={field.value}
                        onChange={(value) => field.onChange(value || "")}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 13,
                          fontFamily: "JetBrains Mono, monospace",
                          padding: { top: 12, bottom: 12 },
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                          tabSize: 2,
                          cursorBlinking: "smooth",
                          smoothScrolling: true,
                          roundedSelection: false,
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Modal Bottom Action Bar */}
          <div className="border-t-2 border-on-surface bg-surface-container-low p-4 sm:p-5 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-surface-container-lowest border-2 border-on-surface hover:bg-error-container hover:text-on-error-container font-code-md text-xs font-bold uppercase text-on-surface shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 bg-primary-container text-on-primary-fixed border-2 border-on-surface font-code-md text-sm font-extrabold uppercase shadow-[4px_4px_0px_#111116] hover:brightness-105 active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Slap Onto Wall</span>
              <RiPushpinFill className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
