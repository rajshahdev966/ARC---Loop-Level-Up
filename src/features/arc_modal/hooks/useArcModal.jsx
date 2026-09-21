import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

export const AVAILABLE_TAGS = [
  "#ARRAYS",
  "#DP",
  "#STRINGS",
  "#TWOPOINTERS",
  "#SLIDINGWINDOW",
  "#SORTING",
  "#BINARYSEARCH",
  "#HASHING",
  "#STACK",
  "#MONOTONICSTACK",
  "#QUEUE",
  "#LINKEDLIST",
  "#TREES",
  "#BST",
  "#HEAP",
  "#TRIE",
  "#GRAPHS",
  "#UNIONFIND",
  "#RECURSION",
  "#BACKTRACKING",
  "#DYNAMICPROGRAMMING",
  "#GREEDY",
  "#BITMANIPULATION",
];

export const DEFAULT_APPROACH = {
  id: "approach-1",
  tabName: "APPROACH 01 [BRUTE]",
  name: "Approach 1: Brute Force",
  tapeColor: "pink",
  tapeText: "// TAPE: BRUTE SCAN",
  tapePreview: "// TAPE: BRUTE",
  fileName: "// SOLUTION.CPP",
  language: "cpp",
  code: `// Write your brute force or initial approach here
class Solution {
public:
    void solve() {
        
    }
};`,
};

const useArcModal = ({ isOpen, onClose, arcData, onSave }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const [stage, setStage] = useState("VILLAIN");
  const [selectedTags, setSelectedTags] = useState([]);
  const [approaches, setApproaches] = useState([DEFAULT_APPROACH]);
  const [activeApproachIdx, setActiveApproachIdx] = useState(0);

  // Sync state and form values when arcData changes or modal opens
  useEffect(() => {
    if (!isOpen) return;

    if (arcData) {
      reset({
        title: arcData.title || "",
        description: arcData.quote || arcData.description || "",
      });
      setStage(arcData.status || arcData.statusBadge || "VILLAIN");

      if (Array.isArray(arcData.tags)) {
        setSelectedTags(arcData.tags);
      } else if (typeof arcData.tag === "string") {
        setSelectedTags(arcData.tag.toUpperCase().split(" ").filter(Boolean));
      } else {
        setSelectedTags([]);
      }

      const existingApproaches =
        arcData.approachArr || arcData.approaches || [];
      setApproaches(
        existingApproaches.length > 0 ? existingApproaches : [DEFAULT_APPROACH]
      );
      setActiveApproachIdx(0);
    } else {
      // Default reset for new arc creation
      reset({
        title: "",
        description: "",
      });
      setStage("VILLAIN");
      setSelectedTags(["#ARRAYS"]);
      setApproaches([
        {
          ...DEFAULT_APPROACH,
          id: `approach-${Date.now()}`,
        },
      ]);
      setActiveApproachIdx(0);
    }
  }, [arcData, isOpen, reset]);

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

  // Lock body scroll when modal is open
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

  const currentApproach = approaches?.[activeApproachIdx] || approaches?.[0] || DEFAULT_APPROACH;

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleAddApproach = () => {
    const newIdx = approaches.length + 1;
    const formattedNum = String(newIdx).padStart(2, "0");
    const newApproach = {
      id: `approach-${nanoid(6)}`,
      tabName: `APPROACH ${formattedNum} [NEW ARCH]`,
      name: `Approach ${newIdx}: Optimized Strategy`,
      tapeColor: "cyan",
      tapeText: `// TAPE: APPROACH ${newIdx} LOG`,
      tapePreview: `// TAPE: APP ${formattedNum}`,
      fileName: `// APPROACH_${formattedNum}.CPP`,
      language: currentApproach?.language || "cpp",
      code: `// Approach ${newIdx} implementation\nclass Solution {\npublic:\n    void solve() {\n        \n    }\n};`,
    };
    setApproaches((prev) => [...prev, newApproach]);
    setActiveApproachIdx(approaches.length);
  };

  const updateCurrentApproach = (fields) => {
    setApproaches((prev) =>
      prev.map((app, idx) =>
        idx === activeApproachIdx ? { ...app, ...fields } : app
      )
    );
  };

  const onSubmit = (formData) => {
    const payload = {
      id: arcData?.id || `arc-${nanoid(8)}`,
      title: formData.title,
      description: formData.description,
      quote: formData.description,
      status: stage,
      statusBadge: stage,
      tag: selectedTags.join(" "),
      tags: selectedTags,
      approachArr: approaches,
      approaches,
      activeApproach: currentApproach,
      updatedAt: new Date().toISOString(),
    };
    onSave(payload);
    onClose();
  };

  return {
    register,
    handleSubmit,
    errors,
    stage,
    setStage,
    selectedTags,
    handleTagToggle,
    approaches,
    activeApproachIdx,
    setActiveApproachIdx,
    currentApproach,
    handleAddApproach,
    updateCurrentApproach,
    onSubmit,
  };
};

export default useArcModal;
