import { useContext, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { VisionBoardContext } from "../../../config/VisionBoardContext";
import tapeColors from "../../../shared/constants/tapeColors";
import { nanoid } from "nanoid";

const useArcModal = () => {
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

  const {
    allProblems,
    setAllProblems,
    selectedArc,
    setSelectedArc,
    isArcModalOpen,
    handleCloseArcModal,
  } = useContext(VisionBoardContext);

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


  const currentApproach =
    watchedApproaches?.[activeApproachIdx] ||
    watchedApproaches?.[0] ||
    approaches?.[0];

  useEffect(() => {
    if (!isArcModalOpen) return;
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
  }, [selectedArc, isArcModalOpen, reset]);

  // --------------------------------------------------
  // ESCAPE LISTENER & BODY SCROLL LOCK
  // --------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isArcModalOpen) {
        handleCloseArcModal();
      }
    };

    if (isArcModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isArcModalOpen, handleCloseArcModal]);


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
    handleCloseArcModal();
  };


  const selectedTapeObj =
    tapeColors.find((c) => c.id === watchedTapeColor) || tapeColors[0];
 return {
  // Form
  register,
  control,
  errors,
  handleSubmit,
  onFormSubmit,

  // Approach data
  approaches,
  watchedApproaches,
  currentApproach,
  activeApproachIdx,

  // Tape
  watchedTapeText,
  watchedTapeColor,
  selectedTapeObj,

  // Actions
  handleAddApproach,
  handleCloseArcModal,
  handleRemoveApproach,
  setActiveApproachIdx,

  // Modal state
  isArcModalOpen,
};
};

export default useArcModal;
