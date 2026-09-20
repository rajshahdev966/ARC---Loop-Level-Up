import {
  RiFlashlightFill,
  RiShieldCheckLine,
  RiSkullLine,
  RiFireFill,
  RiRestartLine,
  RiToolsLine,
  RiArrowLeftRightLine,
  RiSearchEyeLine,
  RiWindow2Line,
  RiLayoutGridLine,
  RiNodeTree,
  RiLinksLine,
  RiHashtag,
  RiStackLine,
  RiListOrdered,
  RiGitBranchLine,
  RiCoinLine,
  RiAlarmWarningLine,
  RiInfinityFill,
  RiBookmarkLine,
  RiTimerFlashLine,
  RiDatabase2Line,
  RiCpuLine,
  RiBugLine,
  RiLightbulbFlashLine,
  RiRouteLine,
  RiBarChartBoxLine,
} from "@remixicon/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addArchetype, addHandle } from "../state/authSlice";
import { toast } from "react-toastify";


const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ARCHETYPES = [
    // -- original --
    { id: "o1", label: "O(1) Whisperer", icon: RiFlashlightFill },
    { id: "cooker", label: "LeetCode Cooker", icon: RiFireFill },
    { id: "recursion", label: "Recursion Friend", icon: RiRestartLine },
    { id: "leak", label: "Leak Mechanic", icon: RiToolsLine },

    // -- structures --
    { id: "dp-table", label: "DP Table Tactician", icon: RiLayoutGridLine },
    { id: "hash-map", label: "Hash Map Menace", icon: RiHashtag },
    { id: "heap", label: "Heap Hype Beast", icon: RiBarChartBoxLine },

    // -- techniques --
    { id: "backtracking", label: "Backtracking Bestie", icon: RiGitBranchLine },
    { id: "greedy", label: "Greedy Algorithm Gremlin", icon: RiCoinLine },

    // -- mindset / complexity --
    { id: "edge-case", label: "Edge Case Enforcer", icon: RiAlarmWarningLine },
    { id: "big-o", label: "Big O Believer", icon: RiInfinityFill },

    { id: "debugger", label: "Debugging Dweller", icon: RiBugLine },
  ];

  const [handle, setHandle] = useState("@dev_arc");
  const [selectedArchetype, setSelectedArchetype] = useState("O(1) Whisperer");

  const handleSubmit = () => {
    dispatch(addHandle(handle));
    dispatch(addArchetype(selectedArchetype));
    navigate("/main");
    toast.success("Handle Created");
    localStorage.setItem("handle", handle);
    localStorage.setItem("archetype", selectedArchetype);
    
  }
  return {
    ARCHETYPES, handle, setHandle, selectedArchetype, setSelectedArchetype, handleSubmit
  };
};

export default useLogin;
