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
import ModalHeader from "../components/ModalHeader";
import ProblemBriefBox from "../components/ProblemBriefBox";
import ApproachTabs from "../components/ApproachTabs";
import ModalBottom from "../components/ModalBottom";
import ApproachDetails from "../components/ApproachDetails";

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
        <ModalHeader onClose={onClose}/>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[72vh] overflow-y-auto no-scrollbar">
          {/* STEP 01: PROBLEM BRIEF BOX */}

          <ProblemBriefBox register={register} arcData={arcData} errors={errors} setStage={setStage} stage={stage} AVAILABLE_TAGS={AVAILABLE_TAGS} selectedTags={selectedTags}/>

          {/* APPROACH TABS */}
          <ApproachTabs approaches={approaches} activeApproachIdx={activeApproachIdx} setActiveApproachIdx={setActiveApproachIdx}/>

          {/* APPROACH DETAILS BOX */}
          <ApproachDetails currentApproach={currentApproach} updateCurrentApproach={updateCurrentApproach} dsaLanguages={dsaLanguages}  />
        </div>

        {/* Modal Bottom Sticky Footer Action Bar */}
       <ModalBottom onClose={onClose} handleAddApproach={handleAddApproach} handleSave={handleSave}/>
      </div>
    </div>
  );
};

export default ArcModal;
