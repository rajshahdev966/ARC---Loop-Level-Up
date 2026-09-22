import React, { act, useContext, useMemo, useState } from "react";

import Navbar from "../../../../shared/ui/components/Navbar";

import FilterBoard from "../components/FilterBoard";
import ProblemCard from "../components/ProblemCard";
import Footer from "../../../../shared/ui/components/Footer";
import ArcModal from "../../../arc_modal/ui/pages/ArcModal";
import { VisionBoardContext } from "../../../../config/VisionBoardContext";

const VisionBoard = () => {
  const { filteredProblems } = useContext(VisionBoardContext);

  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-on-surface selection:bg-primary-container selection:text-on-primary-fixed">
      <Navbar />

      <main className="w-full pt-20 bg-transparent min-h-screen">
        <div className="flex flex-col w-full">
          <FilterBoard />

          <section className="w-full px-gutter lg:px-gutter-desktop py-space-md">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-lg lg:gap-space-xl items-start">
              {filteredProblems?.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <ArcModal />
    </div>
  );
};

export default VisionBoard;
