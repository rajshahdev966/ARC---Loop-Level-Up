import React, { useState } from "react";

import Navbar from "../../../../shared/ui/components/Navbar";

import FilterBoard from "../components/FilterBoard";
import ProblemCard from "../components/ProblemCard";
import Footer from "../../../../shared/ui/components/Footer";
import ArcModal from "../../../arc_modal/ui/pages/ArcModal";

import { PROBLEMS } from "./data/visionBoardData";

const VisionBoard = () => {
  const [isArcModalOpen, setIsArcModalOpen] = useState(false);
  const [selectedArc, setSelectedArc] = useState(null);

  const handleOpenNewArc = () => {
    setSelectedArc(null);
    setIsArcModalOpen(true);
  };

  const handleOpenArc = (arc) => {
    setSelectedArc(arc);
    setIsArcModalOpen(true);
  };

  const handleCloseArcModal = () => {
    setIsArcModalOpen(false);
    setSelectedArc(null)
  };

  const handleSaveArc = (savedArc) => {
    console.log("Arc saved successfully:", savedArc);
  };

  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-on-surface selection:bg-primary-container selection:text-on-primary-fixed">
      <Navbar />

      <main className="w-full pt-20 bg-transparent min-h-screen">
        <div className="flex flex-col w-full">

          <FilterBoard onOpenNewArc={handleOpenNewArc} />

          <section className="w-full px-gutter lg:px-gutter-desktop py-space-md">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg lg:gap-space-xl items-start">
              {PROBLEMS.map((problem) => (
                <ProblemCard
                  key={problem.id}
                  problem={problem}
                  onOpenArc={handleOpenArc}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <ArcModal
        isOpen={isArcModalOpen}
        onClose={handleCloseArcModal}
        arcData={selectedArc}
        onSave={handleSaveArc}
      />
    </div>
  );
};

export default VisionBoard;

