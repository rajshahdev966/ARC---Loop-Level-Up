import {
  RiArrowLeftRightLine,
  RiCheckboxCircleFill,
  RiEmotionUnhappyLine,
  RiRestartLine,
  RiEdit2Line,
  RiDeleteBinLine,
  RiFileCopyLine,
  RiCheckLine,
} from "@remixicon/react";
import React, { useContext, useState } from "react";
import Editor from "@monaco-editor/react";
import useStickyNote from "../../hooks/useStickyNote";
import TricolourDisplayButtons from "../../../../shared/ui/components/TricolourDisplayButtons";
import { StickyNotesContext } from "../../../../config/StickyNoteContext";

const StickyNote = ({ note, isFlipped }) => {
  const { handleCopy, copied } = useStickyNote(note);

  const { toggleFlip, onDelete, onEdit } =
    useContext(StickyNotesContext);
  return (
    <div
      key={note.id}
      className={`group [perspective:1200px] ${note.tilt} hover:rotate-0 transition-transform duration-300`}
    >
      <div
        className="relative w-full min-h-[380px] transition-transform duration-500 [transform-style:preserve-3d]"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Face */}
        <div
          className={`absolute inset-0 w-full h-full ${note.bgFront} text-[#111116] p-space-lg flex flex-col justify-between border-2 border-on-surface shadow-[4px_4px_0px_#111116] [backface-visibility:hidden]`}
        >
          {/* Pushpin or Tape */}
          <div
            className={`absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full ${
              note.type === "W" ? "bg-error" : "bg-tertiary"
            } border border-on-surface shadow-[2px_2px_0px_#111116] flex items-center justify-center z-30 pointer-events-none`}
          >
            <div className="w-2 h-2 rounded-full bg-surface opacity-80" />
          </div>

          {/* Corner Badge */}
          <div
            className={`absolute top-4 right-4 ${
              note.type === "W"
                ? "bg-primary-container text-on-primary-fixed"
                : "bg-secondary-container text-on-secondary-container"
            } font-display-md text-headline-lg px-2.5 py-1 border border-on-surface shadow-[3px_3px_0px_#111116] rotate-2 z-20 font-black flex items-center gap-1`}
          >
            <span>{note.badgeText}</span>
            {note.type === "W" ? (
              <RiCheckboxCircleFill className="w-4 h-4" />
            ) : (
              <RiEmotionUnhappyLine className="w-4 h-4" />
            )}
          </div>

          <div className="mt-4 space-y-space-xs pt-4">
            <h3 className="font-display-md text-headline-md text-[#111116] pt-1 leading-tight font-bold">
              {note.title}
            </h3>
            <p className="font-body-lg text-body-md text-[#111116]/90 pt-space-xs leading-relaxed italic font-medium">
              {note.quote}
            </p>
          </div>

          <div className="pt-space-md flex items-center justify-between">
            <button
              type="button"
              onClick={() => toggleFlip(note.id)}
              className="flex items-center gap-1 bg-[#111116] text-white px-3 py-1.5 font-label-md text-label-sm uppercase font-bold border border-on-surface shadow-[2px_2px_0px_#111116] hover:bg-primary hover:text-on-primary transition-colors cursor-pointer active:translate-x-[1px] active:translate-y-[1px]"
            >
              <span>Code 📄</span>
              <RiArrowLeftRightLine className="w-3.5 h-3.5" />
            </button>

            {/* Edit and Delete Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onEdit(note.id)}
                className="w-8 h-8 flex items-center justify-center bg-surface-container-lowest text-on-surface border border-on-surface shadow-[2px_2px_0px_#111116] hover:bg-primary-container hover:text-on-primary-fixed active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                title="Edit Note"
                aria-label="Edit Note"
              >
                <RiEdit2Line className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onDelete(note.id)}
                className="w-8 h-8 flex items-center justify-center bg-surface-container-lowest text-on-surface border border-on-surface shadow-[2px_2px_0px_#111116] hover:bg-error hover:text-on-error active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                title="Delete Note"
                aria-label="Delete Note"
              >
                <RiDeleteBinLine className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-inverse-surface text-inverse-on-surface p-space-md sm:p-space-lg flex flex-col justify-between border-2 border-on-surface shadow-[4px_4px_0px_#111116] [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex flex-col h-full justify-between">
            {/* Top Bar with pattern label, language pill & copy action */}

            {/* Monaco Read-Only Code Window */}
            <div className="my-2 border-2 border-on-surface bg-[#121316] shadow-[3px_3px_0px_#111116] overflow-hidden flex-1 min-h-[200px] flex flex-col">
              {/* Terminal Window Header */}
              <div className="bg-[#1b1c22] px-3 py-1.5 border-b border-surface/20 flex items-center justify-between">
                <TricolourDisplayButtons />

                <span className="font-code-md text-[9px] text-white/50 uppercase">
                  READ-ONLY
                </span>
              </div>

              {/* Monaco Editor Container */}
              <div className="w-full flex-1 bg-[#1e1e1e]">
                <Editor
                  height="100%"
                  width="100%"
                  language={note.language}
                  theme="vs-dark"
                  value={note.codeSnippet || "// No code provided"}
                  options={{
                    readOnly: true,
                    domReadOnly: true,
                    minimap: { enabled: false },
                    fontSize: 12,
                    fontFamily: "JetBrains Mono, monospace",
                    padding: { top: 8, bottom: 8 },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    lineNumbers: "on",
                    tabSize: 2,
                    renderLineHighlight: "none",
                    scrollbar: {
                      verticalScrollbarSize: 6,
                      horizontalScrollbarSize: 6,
                    },
                  }}
                />
              </div>
            </div>

            {/* Bottom Row: Back flip button & Edit button */}
            <div className="pt-2 flex items-center justify-between border-t border-surface/20">
              <button
                type="button"
                onClick={() => toggleFlip(note.id)}
                className="flex items-center gap-1 bg-on-background text-surface px-3 py-1.5 font-label-md text-label-sm uppercase font-bold border border-on-surface shadow-[2px_2px_0px_#111116] hover:bg-primary transition-colors cursor-pointer active:translate-x-[1px] active:translate-y-[1px]"
              >
                <span>Back</span>
                <RiRestartLine className="w-3.5 h-3.5" />
              </button>

              {/* Same Edit button from front side */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onEdit(note.id)}
                  className="w-8 h-8 flex items-center justify-center bg-surface-container-lowest text-on-surface border border-on-surface shadow-[2px_2px_0px_#111116] hover:bg-primary-container hover:text-on-primary-fixed active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                  title="Edit Note"
                  aria-label="Edit Note"
                >
                  <RiEdit2Line className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1 bg-surface-container-lowest text-on-surface px-2 py-0.5 font-label-sm text-[10px] uppercase font-bold border border-on-surface shadow-[2px_2px_0px_#111116] hover:bg-primary-container hover:text-on-primary-fixed active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
                  title="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <RiCheckLine className="w-3.5 h-3.5 text-primary stroke-[3]" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <RiFileCopyLine className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
