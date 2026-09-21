import React, { useState } from "react";
import Navbar from "../../../../shared/ui/components/Navbar";
import Footer from "../../../../shared/ui/components/Footer";
import NoteModal from "../components/NoteModal";
import ActionButtons from "../components/ActionButtons";
import StickyWallHeader from "../components/StickyWallHeader";
import StickyNote from "../components/StickyNote";
import useStickyWall from "../../hooks/useStickyWall";

const StickyWall = () => {
  const {
    filterType,
    setFilterType,
    flippedCards,
    showModal,
    setShowModal,
    noteForEdit,
    setNoteForEdit,
    toggleFlip,
    onDelete,
    onEdit,
    filteredNotes,
    stickyNotes,
    setStickyNotes
  } = useStickyWall();

  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-on-surface font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-fixed">
      {/* Top Header */}
      <Navbar />

      <main className="w-full pt-20 bg-transparent min-h-screen">
        <div className="flex flex-col w-full px-gutter lg:px-gutter-desktop pb-space-xl">
          {/* Board Header & Sharpie Marginalia */}
          <div className="relative w-full pt-space-md mb-space-lg">
            {/* Push pin graphic at top */}
            <div className="bg-surface-container-lowest p-space-md lg:p-space-lg shadow-xl relative overflow-hidden border-2 border-on-surface">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <StickyWallHeader />

                {/* Action Buttons */}
                <ActionButtons
                  setShowModal={setShowModal}
                  setFilterType={setFilterType}
                  filterType={filterType}
                />
              </div>
            </div>
          </div>

          {/* Interactive Scrapboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 pt-space-sm items-start">
            {filteredNotes.map((note) => {
              const isFlipped = flippedCards[note.id];
              return (
                <StickyNote
                  note={note}
                  isFlipped={isFlipped}
                  toggleFlip={toggleFlip}
                  setShowModal={setShowModal}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              );
            })}
          </div>

          {/* New Note Modal */}
          {showModal && (
            <NoteModal
              setShowModal={setShowModal}
              setStickyNotes={setStickyNotes}
              stickyNotes={stickyNotes}
              noteForEdit={noteForEdit}
              setNoteForEdit={setNoteForEdit}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default StickyWall;
