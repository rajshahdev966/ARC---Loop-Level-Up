import { createContext, useMemo, useState } from "react";
import React from "react";

export const VisionBoardContext = createContext();

export const VisionBoardContextProvider = ({ children }) => {
  const [isArcModalOpen, setIsArcModalOpen] = useState(false);
  const [selectedArc, setSelectedArc] = useState(null);
  const [allProblems, setAllProblems] = useState(
    JSON.parse(localStorage.getItem("allProblems")) || [],
  );
  const [activeStatus, setActiveStatus] = useState("ALL");
  const [activeTopic, setActiveTopic] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProblems = useMemo(() => {
    return allProblems.filter((problem)=>{
      let statusMatch = activeStatus === "ALL" || activeStatus === problem.status
      let topicMatch = activeTopic.length === 0 || problem.tags.includes(activeTopic)
      let queryMatch = searchQuery.length === 0 || problem.title.includes(searchQuery)

      return statusMatch && topicMatch && queryMatch
    })
  }, [searchQuery, activeStatus, activeTopic, allProblems]);

  const handleOpenNewArc = () => {
    setSelectedArc(null);
    setIsArcModalOpen(true);
  };

  const handleOpenArc = (arc) => {
    console.log("From handle", arc);
    setSelectedArc(arc);
    setIsArcModalOpen(true);
  };

  const handleCloseArcModal = () => {
    setIsArcModalOpen(false);
    setSelectedArc(null);
  };

  const handleSaveArc = (savedArc) => {
    console.log("Arc saved successfully:", savedArc);
  };

  
  return (
    <VisionBoardContext.Provider
      value={{
        isArcModalOpen,
        setIsArcModalOpen,
        selectedArc,
        setSelectedArc,
        allProblems,
        setAllProblems,
        activeStatus,
        setActiveStatus,
        activeTopic,
        setActiveTopic,
        searchQuery,
        setSearchQuery,
        handleOpenNewArc,
        handleOpenArc,
        handleCloseArcModal,
        handleSaveArc,
        filteredProblems
      }}
    >
      {children}
    </VisionBoardContext.Provider>
  );
};
