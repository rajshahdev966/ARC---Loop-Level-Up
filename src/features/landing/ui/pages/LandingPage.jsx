import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import {
  RiFlashlightFill,
  RiTerminalBoxFill,
  RiCheckLine,
  RiCloseLine,
  RiArrowRightLine,
  RiSparklingFill,
  RiCompass3Line,
  RiFireFill,
  RiPushpinFill,
  RiExternalLinkLine,
  RiShieldCheckFill,
  RiTimeLine,
  RiCodeSSlashLine,
  RiBookmark3Fill,
  RiCpuLine,
  RiUserStarFill,
  RiTrophyFill,
  RiSendPlane2Fill,
} from "@remixicon/react";
import Navbar from "../../../../shared/ui/components/Navbar";
import Footer from "../../../../shared/ui/components/Footer";
import TricolourDisplayButtons from "../../../../shared/ui/components/TricolourDisplayButtons";

const LandingPage = () => {
  const navigate = useNavigate();
  const { handle, archetype } = useSelector((state) => state.auth || {});

  // Interactive state for the Hero Code Terminal showcase
  const [heroEra, setHeroEra] = useState("mid-arc");
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  // Router navigation helper that intelligently redirects to dashboard or login
  const handleStartArc = (destination = "/main") => {
    if (handle && archetype) {
      navigate(destination);
    } else {
      navigate("/login");
    }
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) return;
    setEmailSuccess(true);
    setTimeout(() => {
      handleStartArc("/main");
    }, 900);
  };

  const codeSnippets = {
    "villain-era": `# APPROACH 01 [VILLAIN ERA 💀]
# TLE / BRUTE FORCE SEARCH (O(N^2) Time, O(1) Space)
class Solution:
    def trap(self, height: list[int]) -> int:
        ans = 0
        n = len(height)
        for i in range(n):
            left_max = max(height[:i+1])
            right_max = max(height[i:])
            ans += min(left_max, right_max) - height[i]
        return ans  # ❌ TIME LIMIT EXCEEDED ON TEST 281`,
    "mid-arc": `# APPROACH 02 [MID-ARC ⚡]
# DUAL POINTERS OPTIMIZATION (O(N) Time, O(1) Space)
class Solution:
    def trap(self, height: list[int]) -> int:
        left, right = 0, len(height) - 1
        left_max = right_max = total_water = 0
        while left < right:
            if height[left] < height[right]:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    total_water += left_max - height[left]
                left += 1
            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    total_water += right_max - height[right]
                right -= 1
        return total_water  # ✅ ACCEPTED: 21ms (Faster than 94.8%)`,
    "final-form": `# APPROACH 03 [FINAL FORM 💎]
# MONOTONIC STACK DECONSTRUCTION (O(N) Time, O(N) Space)
class Solution:
    def trap(self, height: list[int]) -> int:
        stack = [] # Monotonic decreasing indices
        water_trapped = 0
        for current_idx, current_h in enumerate(height):
            while stack and current_h > height[stack[-1]]:
                valley = stack.pop()
                if not stack:
                    break
                distance = current_idx - stack[-1] - 1
                bounded_height = min(current_h, height[stack[-1]]) - height[valley]
                water_trapped += distance * bounded_height
            stack.append(current_idx)
        return water_trapped  # 🚀 INTERVIEWER MASTERCLASS`,
  };

  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-on-surface flex flex-col selection:bg-[#D4FF00] selection:text-[#111116]">
      {/* 1. PERSISTENT UNIVERSAL NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT CONTAINER */}
      <main className="w-full flex-grow pt-24 pb-20 px-gutter lg:px-gutter-desktop max-w-7xl mx-auto flex flex-col items-center">
        {/* ========================================================================= */}
        {/* 2. HERO SECTION                                                          */}
        {/* ========================================================================= */}
        <section className="w-full pt-6 sm:pt-12 pb-16 flex flex-col items-center text-center">
          {/* System Alert Pill */}
          <div className="inline-flex items-center gap-2 bg-[#ff007f] text-white border-2 border-on-surface shadow-[3px_3px_0px_#111116] px-3 py-1 text-xs font-mono font-black uppercase tracking-wider mb-6 -rotate-1 hover:rotate-0 transition-transform">
            <RiFireFill className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>
              // SYSTEM ALERT: ACCEPTANCE RATE DOWN 41% // DEVS ARE COOKED
            </span>
          </div>

          {/* Massive 3D Brutalist Display Heading */}
          <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-on-surface uppercase ">
            YOUR CODE HAS
            <span className="relative inline-block px-3 sm:px-4 py-0.5 bg-[#ff007f] text-white border-2 border-on-surface shadow-[4px_4px_0px_#111116] -rotate-2">
              TRUST ISSUES.
            </span>
            <br />
            WE TURN THEM INTO YOUR
            <span className="relative inline-block px-3 sm:px-6 py-0.5 bg-[#D4FF00] text-[#111116] border-2 sm:border-3 border-on-surface shadow-[5px_5px_0px_#111116] rotate-1">
              ARC.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 font-body text-base sm:text-xl text-on-surface-variant max-w-3xl font-medium leading-relaxed">
            LeetCode tells you that you failed;{" "}
            <span className="text-on-surface font-bold underline decoration-[#D4FF00] decoration-4">
              Arc
            </span>{" "}
            tells you why, and what to fix next time. The "brute force to final
            form" DSA journal turning panic-submitters into engineers who
            actually understand their own code.
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full max-w-xl">
            <button
              onClick={() => handleStartArc("/main")}
              className="flex-1 py-4 bg-[#D4FF00] text-[#111116] border-2 border-on-surface text-nowrap shadow-[5px_5px_0px_#111116] hover:bg-[#bce600] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111116] transition-all font-display font-black text-base sm:text-lg tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <RiFlashlightFill className="w-5 h-5 text-[#111116] " />
              <span>START YOUR ARC</span>
            </button>

            <button
              onClick={() => navigate("/main")}
              className="py-4 px-6 bg-surface-container-lowest text-on-surface border-2 border-on-surface shadow-[5px_5px_0px_#111116] hover:bg-surface-container-high active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#111116] transition-all font-display font-bold text-base sm:text-lg tracking-wide uppercase flex items-center justify-center gap-2 cursor-pointer"
            >
              <RiTerminalBoxFill className="w-5 h-5 text-on-surface" />
              <span>EXPLORE LIVE DEMO</span>
            </button>
          </div>

          {/* Trust Metadata Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] sm:text-xs text-on-surface-variant font-bold">
            <span className="flex items-center gap-1">
              <span className="text-emerald-500">✓</span> NO CREDIT CARD
            </span>
            <span>//</span>
            <span className="flex items-center gap-1">
              <span className="text-emerald-500">✓</span> ZERO BS SETUP
            </span>
            <span>//</span>
            <span className="flex items-center gap-1">
              <span className="text-emerald-500">✓</span> 1,771 OFFERS SECURED
              ACROSS FAANG & UNICORNS
            </span>
            <span>//</span>
            <span>EST. SETUP: &lt; 120s</span>
          </div>

          {/* ========================================================================= */}
          {/* 4. HERO INTERACTIVE SHOWCASE (CYBER-SCRAPBOOK MOCKUP)                      */}
          {/* ========================================================================= */}
          <div className="w-full mt-14 relative max-w-5xl">
            {/* Top Washi Tape Sticker */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-[#D4FF00] text-[#111116] border-2 border-on-surface px-3 sm:px-6 py-1 font-mono text-[9px] sm:text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_#111116] -rotate-1 max-w-[92vw] truncate">
              // LIVE ARC SNAPSHOT: LEETCODE #42 // TRAPPING RAIN WATER //
            </div>

            {/* Container Box with Heavy Brutalist Frame */}
            <div className="w-full bg-surface-container-lowest border-2 sm:border-3 border-on-surface shadow-[4px_4px_0px_#111116] sm:shadow-[8px_8px_0px_#111116] pt-8 pb-6 px-3 sm:px-6 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left Side: Interactive Code Terminal (7 cols) */}
                <div className="lg:col-span-7 flex flex-col bg-[#0f0f13] border-2 border-on-surface shadow-[3px_3px_0px_#111116] sm:shadow-[4px_4px_0px_#111116] text-left overflow-hidden">
                  {/* Terminal Header */}
                  <div className="bg-[#18181f] border-b-2 border-on-surface px-2.5 sm:px-3 py-2 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
                    <TricolourDisplayButtons />
                    <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
                      <button
                        onClick={() => setHeroEra("villain-era")}
                        className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase transition-all shrink-0 ${
                          heroEra === "villain-era"
                            ? "bg-red-500 text-white shadow-sm font-black"
                            : "bg-[#25252e] text-zinc-400 hover:text-white"
                        }`}
                      >
                        VILLAIN ERA 💀
                      </button>
                      <button
                        onClick={() => setHeroEra("mid-arc")}
                        className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase transition-all shrink-0 ${
                          heroEra === "mid-arc"
                            ? "bg-[#ff007f] text-white shadow-sm font-black"
                            : "bg-[#25252e] text-zinc-400 hover:text-white"
                        }`}
                      >
                        MID-ARC ⚡
                      </button>
                      <button
                        onClick={() => setHeroEra("final-form")}
                        className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold uppercase transition-all shrink-0 ${
                          heroEra === "final-form"
                            ? "bg-[#D4FF00] text-[#111116] shadow-sm font-black"
                            : "bg-[#25252e] text-zinc-400 hover:text-white"
                        }`}
                      >
                        FINAL FORM 💎
                      </button>
                    </div>
                  </div>

                  {/* Code Editor Window */}
                  <div className="p-4 font-mono text-[11px] sm:text-xs text-zinc-200 overflow-x-auto min-h-[220px] max-h-[260px] leading-relaxed">
                    <pre className="text-zinc-300">
                      <code>{codeSnippets[heroEra]}</code>
                    </pre>
                  </div>

                  {/* Terminal Footer with Complexity Metrics */}
                  <div className="bg-[#18181f] border-t-2 border-on-surface p-2.5 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-400">COMPLEXITY:</span>
                      <span className="line-through text-red-400">O(N²)</span>
                      <span className="text-[#D4FF00] font-bold">
                        ➔ O(N) OPTIMAL
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-400">RUNTIME:</span>
                      <span className="text-emerald-400 font-bold">
                        21ms (TOP 5.2%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Polaroid + Pinned Offer Receipt (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4 text-left">
                  {/* Polaroid Whiteboard Quote */}
                  <div className="bg-white text-[#111116] border-2 border-on-surface p-4 shadow-[4px_4px_0px_#111116] -rotate-1 relative">
                    {/* Metallic Pin */}
                    <div className="absolute -top-3 right-4 w-4 h-4 rounded-full bg-red-600 border border-black shadow-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
                    </div>
                    <div className="font-mono text-[10px] uppercase font-bold text-zinc-500 mb-1">
                      // SYSTEM DESIGN & REASONING MEMO
                    </div>
                    <p className="font-display font-bold text-sm sm:text-base italic text-zinc-900 leading-snug">
                      "Stop treating LeetCode like an algorithmic conveyor belt.
                      True engineers document how they fail, why they fail, and
                      how they bridge the gap to optimal."
                    </p>
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-zinc-300 font-mono text-[10px] text-zinc-600 font-semibold">
                      <span>— STAFF SWE @ GOOGLE</span>
                      <span className="text-emerald-700 font-bold">
                        VERIFIED MENTOR
                      </span>
                    </div>
                  </div>

                  {/* Pinned Offer Secured Badge */}
                  <div className="bg-[#D4FF00] text-[#111116] border-2 border-on-surface p-3.5 shadow-[4px_4px_0px_#111116] rotate-1 relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1 font-mono text-[11px] font-black uppercase">
                        <RiTrophyFill className="w-4 h-4 text-[#111116]" />
                        <span>OFFER SECURED: L4 @ GOOGLE</span>
                      </div>
                      <span className="bg-[#111116] text-[#D4FF00] px-1.5 py-0.2 font-mono text-[9px] font-black">
                        $192,000 TC
                      </span>
                    </div>
                    <p className="font-body text-xs text-zinc-900 font-medium">
                      "My interviewer gave me LeetCode 42 with a modified 3D
                      constraint. Because I had my Arc monotonic stack notes, I
                      solved it in 24 minutes."
                    </p>
                    <div className="mt-2 flex items-center justify-between font-mono text-[9px] text-zinc-800 font-bold border-t border-black/20 pt-1.5">
                      <span>INTERVIEW STAGE: ROUND 3 TECH</span>
                      <span>NYC CAMPUS</span>
                    </div>
                  </div>

                  {/* Quick Router Link */}
                  <button
                    onClick={() => navigate("/main/sticky")}
                    className="w-full py-2.5 px-3 bg-surface-container border-2 border-on-surface text-on-surface shadow-[3px_3px_0px_#111116] hover:bg-surface-container-highest active:translate-x-[1px] active:translate-y-[1px] transition-all font-mono text-xs font-bold uppercase flex items-center justify-between cursor-pointer"
                  >
                    <span>CHECK 3D STICKY WALL DEMO</span>
                    <RiArrowRightLine className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PROBLEM SECTION: WHY MOST CS STUDENTS FAIL THE TECH SCREEN              */}
        {/* ========================================================================= */}
        <section className="w-full py-16 border-t-2 border-on-surface/20 flex flex-col items-center">
          <div className="bg-[#ff007f] text-white px-3 py-1 font-mono text-xs font-black uppercase tracking-wider border-2 border-on-surface shadow-[3px_3px_0px_#111116] -rotate-1 mb-4">
            // ROOT CAUSE IDENTIFIED //
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl  text-center uppercase tracking-tight max-w-4xl mx-auto">
            WHY MOST CS STUDENTS FAIL THE TECH SCREEN <br />
            <span className="text-[#ff007f]">(IT'S NOT ABOUT YOU)</span>
            <span className="block mt-2 font-mono text-xs sm:text-sm font-semibold normal-case italic text-on-surface-variant tracking-normal">
              — that's what she said 😉
            </span>
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-on-surface-variant text-center max-w-2xl">
            Every year, 300k+ CS grads grind blind leetcode only to choke on the
            simplest variations. They memorize code instead of building mental
            scaffolding, and interviewers spot it in 3 minutes.
          </p>

          {/* 3-Card Comparison Grid */}
          <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1: The Spammer (Red/Pink ❌) */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116] flex flex-col justify-between relative group hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 rounded-none bg-red-500 text-white flex items-center justify-center font-black border border-on-surface shadow-[2px_2px_0px_#111116] mb-4">
                <RiCloseLine className="w-6 h-6" />
              </div>
              <div className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-wider">
                // THE ANTI-PATTERN //
              </div>
              <h3 className="font-display font-black text-xl text-on-surface uppercase mt-1">
                THE MINDLESS LEETCODE SPAMMER
              </h3>
              <p className="font-body text-sm text-on-surface-variant mt-2">
                Solves 400 problems by copying editorial solutions. Forgets
                everything 4 days later.
              </p>
              <ul className="mt-4 space-y-2 font-body text-xs text-on-surface-variant border-t border-on-surface/10 pt-4 flex-grow">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>
                    Panic attacks when the interviewer changes one constraint.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>
                    Zero documentation of brute-force struggle or thought
                    process.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✗</span>
                  <span>
                    Conflates quantity of green checkmarks with real competence.
                  </span>
                </li>
              </ul>
              <div className="mt-6 bg-red-100 text-red-900 border border-red-400 p-2 font-mono text-[11px] font-black uppercase text-center">
                OUTCOME: GHOSTED AFTER OA1 // ZERO OFFERS
              </div>
            </div>

            {/* Card 2: Tutorial Hell (Muted ⚠️) */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116] flex flex-col justify-between relative group hover:-translate-y-1 transition-transform">
              <div className="w-8 h-8 rounded-none bg-amber-400 text-black flex items-center justify-center font-black border border-on-surface shadow-[2px_2px_0px_#111116] mb-4">
                !
              </div>
              <div className="font-mono text-[10px] text-amber-600 font-bold uppercase tracking-wider">
                // THE PASSIVE TRAP //
              </div>
              <h3 className="font-display font-black text-xl text-on-surface uppercase mt-1">
                THE TUTORIAL HELL RESIDENT
              </h3>
              <p className="font-body text-sm text-on-surface-variant mt-2">
                Watches NeetCode on 2x speed while eating cereal. Never touches
                a blank IDE without hand-holding.
              </p>
              <ul className="mt-4 space-y-2 font-body text-xs text-on-surface-variant border-t border-on-surface/10 pt-4 flex-grow">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">!</span>
                  <span>
                    False sense of comprehension while listening to
                    explanations.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">!</span>
                  <span>
                    Total paralysis the second an empty Monaco Editor opens.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">!</span>
                  <span>
                    Can't articulate Big-O trade-offs without buzzwords.
                  </span>
                </li>
              </ul>
              <div className="mt-6 bg-amber-100 text-amber-900 border border-amber-400 p-2 font-mono text-[11px] font-black uppercase text-center">
                OUTCOME: STUCK IN MEDIOCRE UNPAID INTERNSHIPS
              </div>
            </div>

            {/* Card 3: The Arc Student (Neon Green ✅) */}
            <div className="bg-surface-container-lowest border-3 border-on-surface p-6 shadow-[6px_6px_0px_#111116] flex flex-col justify-between relative -translate-y-2 bg-gradient-to-b from-[#D4FF00]/10 to-transparent">
              <div className="w-8 h-8 rounded-none bg-[#D4FF00] text-black flex items-center justify-center font-black border border-on-surface shadow-[2px_2px_0px_#111116] mb-4">
                <RiCheckLine className="w-6 h-6" />
              </div>
              <div className="font-mono text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                // THE REDEMPTION ROUTINE //
              </div>
              <h3 className="font-display font-black text-xl text-on-surface uppercase mt-1">
                THE ARC STUDENT WITH A PLAN
              </h3>
              <p className="font-body text-sm text-on-surface-variant mt-2">
                Solves 100 high-yield patterns. Documents the full arc: Villain
                Era ➔ Mid-Arc ➔ Final Form.
              </p>
              <ul className="mt-4 space-y-2 font-body text-xs text-on-surface font-semibold border-t border-on-surface/10 pt-4 flex-grow">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-black">✓</span>
                  <span>
                    Retains 93%+ algorithmic structural intuition under stress.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-black">✓</span>
                  <span>
                    Speaks in clean invariants, edge-case bounds, and proofs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-black">✓</span>
                  <span>
                    Owns a personal 3D sticky wall of gotchas & pattern
                    cheat-sheets.
                  </span>
                </li>
              </ul>
              <div className="mt-6 bg-[#D4FF00] text-[#111116] border-2 border-on-surface p-2 font-mono text-[11px] font-black uppercase text-center shadow-[2px_2px_0px_#111116]">
                OUTCOME: 3+ OFFERS // FAANG & UNICORN READY
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. HOW ARC ENGINEERS YOUR TECHNICAL REDEMPTION (THE 4-STAGE ROUTINE)      */}
        {/* ========================================================================= */}
        <section className="w-full py-16 border-t-2 border-on-surface/20 flex flex-col items-center">
          <div className="bg-[#D4FF00] text-[#111116] px-3 py-1 font-mono text-xs font-black uppercase tracking-wider border-2 border-on-surface shadow-[3px_3px_0px_#111116] rotate-1 mb-4">
            // THE ARC METHOD //
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-center uppercase tracking-tight max-w-4xl">
            HOW ARC ENGINEERS YOUR{" "}
            <span className="text-[#D4FF00] bg-[#111116] px-2 py-0.5">
              TECHNICAL REDEMPTION
            </span>
          </h2>

          {/* The 4-Stage Horizontal Stepper */}
          <div className="mt-12 w-full bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_#111116] p-6 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-on-surface/10 gap-3">
              <div>
                <span className="font-mono text-xs text-on-surface-variant uppercase font-bold">
                  // ARCHITECTURE WORKFLOW
                </span>
                <h3 className="font-display font-black text-xl text-on-surface uppercase">
                  THE 4-STAGE ARC PROBLEM-SOLVING ROUTINE
                </h3>
              </div>
              <button
                onClick={() => navigate("/main")}
                className="px-3 py-1.5 bg-[#D4FF00] text-[#111116] border border-on-surface font-mono text-xs font-bold uppercase shadow-[2px_2px_0px_#111116] hover:bg-[#b8e600] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                EXPLORE IN VISION BOARD &gt;
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-surface-container border border-on-surface/20 flex flex-col justify-between">
                <div>
                  <span className="font-display font-black text-2xl text-on-surface-variant/40">
                    01
                  </span>
                  <h4 className="font-display font-bold text-base text-on-surface uppercase mt-1">
                    DECONSTRUCT
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mt-2">
                    Analyze problem constraints, diagram sample cases, and
                    define boundaries before typing a single character.
                  </p>
                </div>
                <div className="mt-4 font-mono text-[10px] text-zinc-500 font-bold">
                  // TIME: 5-7 MINS
                </div>
              </div>

              <div className="p-4 bg-surface-container border border-on-surface/20 flex flex-col justify-between">
                <div>
                  <span className="font-display font-black text-2xl text-red-500/50">
                    02
                  </span>
                  <h4 className="font-display font-bold text-base text-on-surface uppercase mt-1">
                    VILLAIN ERA 💀
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mt-2">
                    Write the raw brute force. Feel the pain of Time Limit
                    Exceeded. Document why quadratic or exponential logic
                    collapses.
                  </p>
                </div>
                <div className="mt-4 font-mono text-[10px] text-red-500 font-bold">
                  // CAPTURE THE TLE
                </div>
              </div>

              <div className="p-4 bg-surface-container border border-on-surface/20 flex flex-col justify-between">
                <div>
                  <span className="font-display font-black text-2xl text-[#ff007f]/50">
                    03
                  </span>
                  <h4 className="font-display font-bold text-base text-on-surface uppercase mt-1">
                    MID-ARC ⚡
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mt-2">
                    Spot the invariant. Is it monotonic? Two pointers? Memoized
                    sub-problems? Prune redundant computations.
                  </p>
                </div>
                <div className="mt-4 font-mono text-[10px] text-[#ff007f] font-bold">
                  // HEURISTIC BREAKTHROUGH
                </div>
              </div>

              <div className="p-4 bg-surface-container border border-on-surface/20 flex flex-col justify-between">
                <div>
                  <span className="font-display font-black text-2xl text-emerald-500/50">
                    04
                  </span>
                  <h4 className="font-display font-bold text-base text-on-surface uppercase mt-1">
                    FINAL FORM ✅
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant mt-2">
                    Implement optimal time & space complexity with
                    interview-grade idioms, clean variable names, and complexity
                    proof.
                  </p>
                </div>
                <div className="mt-4 font-mono text-[10px] text-emerald-600 font-bold">
                  // INTERVIEW READY
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Cyber-Scrapbook Feature Grid */}
          <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Feature 1: The Code Scrapbook & 3D Sticky Wall */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[6px_6px_0px_#111116] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#FFE500] text-[#111116] px-2 py-0.5 font-mono text-[10px] font-black border border-black shadow-sm rotate-2">
                PHYSICAL 3D FLIP
              </div>
              <div>
                <span className="font-mono text-xs text-on-surface-variant font-bold">
                  // TACTILE KNOWLEDGE REPOSITORY
                </span>
                <h3 className="font-display font-black text-2xl text-on-surface uppercase mt-1">
                  THE CODE SCRAPBOOK & POLAROID MEMORY
                </h3>
                <p className="font-body text-sm text-on-surface-variant mt-2">
                  Turn code mistakes into memorable trophies. Arc visualizes
                  your progress as physical notes with washi tape, authentic
                  paper textures, and double-sided 3D flipping cards.
                </p>

                {/* Micro Visual Card */}
                <div className="mt-5 p-3 bg-amber-100/90 text-[#111116] border-2 border-black shadow-[3px_3px_0px_#111116] -rotate-1 max-w-sm">
                  <div className="flex items-center justify-between font-mono text-[10px] font-black uppercase pb-1 border-b border-black/20">
                    <span>STICKY #104: GRAPH BFS TRAP</span>
                    <span>TAG: GOTCHA</span>
                  </div>
                  <p className="font-mono text-[11px] font-bold mt-2">
                    "Always mark visited IMMEDIATELY upon enqueue, never upon
                    dequeue, or your queue explodes exponentially."
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-on-surface/10">
                <button
                  onClick={() => navigate("/main/sticky")}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-primary hover:text-primary-fixed-variant transition-colors cursor-pointer"
                >
                  <span>LAUNCH INTERACTIVE STICKY WALL</span>
                  <RiArrowRightLine className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Feature 2: Nemesis Tracker & Trauma Logs */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[6px_6px_0px_#111116] flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-[#ff007f] text-white px-2 py-0.5 font-mono text-[10px] font-black border border-black shadow-sm -rotate-2">
                REVENGE ARC
              </div>
              <div>
                <span className="font-mono text-xs text-on-surface-variant font-bold">
                  // EMOTIONAL RESOLUTION LOG
                </span>
                <h3 className="font-display font-black text-2xl text-on-surface uppercase mt-1">
                  NEMESIS TRACKER & TRAUMA LOGS
                </h3>
                <p className="font-body text-sm text-on-surface-variant mt-2">
                  Tag problems that humiliated you in previous online
                  assessments. Keep them pinned on your dashboard until you
                  conquer them under timed interview conditions.
                </p>

                {/* Micro Terminal Display */}
                <div className="mt-5 p-3 bg-[#111116] text-[#D4FF00] border-2 border-black shadow-[3px_3px_0px_#111116] font-mono text-xs rotate-1">
                  <div className="flex items-center justify-between text-zinc-400 text-[10px] pb-1 border-b border-zinc-800">
                    <span>NEMESIS TARGET // LC #212 WORD SEARCH II</span>
                    <span className="text-red-400">FAILED IN CITADEL OA</span>
                  </div>
                  <div className="mt-2 text-emerald-400 font-bold">
                    ✓ STATUS: CONQUERED (TRIE + BACKTRACKING)
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-1">
                    RUNTIME: 18ms // 0 MEMORY LEAKS
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-on-surface/10">
                <button
                  onClick={() => navigate("/main")}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase text-primary hover:text-primary-fixed-variant transition-colors cursor-pointer"
                >
                  <span>INSPECT HIGH-TRAUMA MODULES</span>
                  <RiArrowRightLine className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Wide Banner: Wrapped & Dev Flex Cards */}
          <div className="mt-6 w-full bg-[#111116] text-white border-2 border-on-surface p-6 sm:p-8 shadow-[6px_6px_0px_#111116] text-left flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-block bg-[#D4FF00] text-[#111116] px-2 py-0.5 font-mono text-[10px] font-black uppercase mb-2">
                ANNUAL DOSSIER PREVIEW
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                DSA GLOW-UP WRAPPED & DEV FLEX CARDS
              </h3>
              <p className="font-body text-sm sm:text-base text-zinc-400 mt-2">
                Turn your brutal late-night grind sessions into verified,
                aesthetic badges. Show recruiters concrete proof of grit,
                multi-approach iteration, and continuous refinement.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-zinc-400">
                <span className="bg-zinc-800 px-2 py-1 border border-zinc-700">
                  // SPOTIFY-WRAPPED STYLE
                </span>
                <span className="bg-zinc-800 px-2 py-1 border border-zinc-700">
                  // RECRUITER EVIDENCE
                </span>
                <span className="bg-zinc-800 px-2 py-1 border border-zinc-700">
                  // 20-DAY COUNTDOWN ENGINE
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end w-full lg:w-auto">
              <div className="bg-[#D4FF00] text-[#111116] border-2 border-white p-4 shadow-[4px_4px_0px_white] font-mono text-center mb-3">
                <span className="block text-[10px] font-black uppercase">
                  AVERAGE EFFICIENCY GLOW-UP
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl text-[#111116]">
                  +93.4%
                </span>
              </div>
              <button
                onClick={() => navigate("/main/wrapped")}
                className="w-full sm:w-auto py-3 px-6 bg-[#ff007f] text-white border-2 border-white font-mono text-xs font-black uppercase shadow-[3px_3px_0px_white] hover:bg-[#e00070] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                CHECK "YOUR WRAPPED" DROP &gt;
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. PHILOSOPHY: 15 MINUTES A DAY > 8-HOUR WEEKEND PANIC CRAMS               */}
        {/* ========================================================================= */}
        <section className="w-full py-16 border-t-2 border-on-surface/20 flex flex-col items-center text-center">
          <div className="bg-[#111116] text-[#D4FF00] px-3 py-1 font-mono text-xs font-black uppercase tracking-wider border-2 border-on-surface shadow-[3px_3px_0px_#111116] mb-4">
            // SUSTAINED ROUTINE &gt; HEROIC CRUNCH //
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight max-w-4xl">
            15 MINUTES A DAY &gt;{" "}
            <span className="text-secondary underline decoration-[#D4FF00]">
              8-HOUR WEEKEND PANIC CRAMS
            </span>
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-on-surface-variant max-w-2xl font-medium">
            Consistency eats talent for breakfast. Arc builds the muscle memory
            so you walk into interviews feeling bored, not terrified.
          </p>

          <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116]">
              <div className="w-7 h-7 bg-primary-container text-on-primary-fixed flex items-center justify-center font-bold text-xs border border-on-surface mb-3">
                01
              </div>
              <h4 className="font-display font-black text-lg text-on-surface uppercase">
                ACTIVE RECALL OVER CONSUMPTION
              </h4>
              <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
                Forcing your brain to reconstruct intuition from scratch yields
                400% higher interview recall than watching tutorial videos
                passively.
              </p>
            </div>

            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116]">
              <div className="w-7 h-7 bg-secondary-container text-white flex items-center justify-center font-bold text-xs border border-on-surface mb-3">
                02
              </div>
              <h4 className="font-display font-black text-lg text-on-surface uppercase">
                TRAUMA LOGGING & REVISITS
              </h4>
              <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
                Problems that choked you are auto-flagged. You don't get to move
                on until you've successfully rewritten them 7 days later without
                hints.
              </p>
            </div>

            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116]">
              <div className="w-7 h-7 bg-[#D4FF00] text-black flex items-center justify-center font-bold text-xs border border-on-surface mb-3">
                03
              </div>
              <h4 className="font-display font-black text-lg text-on-surface uppercase">
                INTRINSIC PATTERN RECOGNITION
              </h4>
              <p className="font-body text-xs text-on-surface-variant mt-2 leading-relaxed">
                14 fundamental algorithmic paradigms solve 85% of interview
                questions. Arc anchors your brain to the core structural
                invariant.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. TESTIMONIALS: FROM FAILED OA SCREENS TO SWE OFFERS                      */}
        {/* ========================================================================= */}
        <section className="w-full py-16 border-t-2 border-on-surface/20 flex flex-col items-center">
          <div className="bg-[#ff007f] text-white px-3 py-1 font-mono text-xs font-black uppercase tracking-wider border-2 border-on-surface shadow-[3px_3px_0px_#111116] rotate-1 mb-4">
            // VERIFIED TECH RESUMES //
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-center uppercase tracking-tight max-w-4xl">
            FROM FAILED OA SCREENS TO{" "}
            <span className="text-primary underline decoration-[#ff007f]">
              SWE OFFERS
            </span>
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-on-surface-variant text-center max-w-2xl">
            Real engineers who stopped mindlessly grinding and started running
            the Arc.
          </p>

          <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-on-surface/10">
                  <div>
                    <h4 className="font-display font-black text-base text-on-surface uppercase">
                      ALEX R.
                    </h4>
                    <span className="font-mono text-[11px] text-zinc-500 font-bold">
                      L4 SWE @ GOOGLE
                    </span>
                  </div>
                  <span className="bg-[#D4FF00] text-black px-2 py-0.5 font-mono text-[10px] font-black border border-black">
                    FORMER 12x OA REJECT
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-4 italic">
                  "I had solved 380 LeetCode problems and still failed every OA.
                  Arc forced me to stop spamming and document why my brute force
                  failed. 6 weeks later, landed $195k at Google."
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-on-surface/10">
                  <div>
                    <h4 className="font-display font-black text-base text-on-surface uppercase">
                      PRIYA M.
                    </h4>
                    <span className="font-mono text-[11px] text-zinc-500 font-bold">
                      BACKEND @ STRIPE
                    </span>
                  </div>
                  <span className="bg-[#ff007f] text-white px-2 py-0.5 font-mono text-[10px] font-black border border-black">
                    CAREER SWITCHER
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-4 italic">
                  "The 3D Sticky Wall alone transformed how I study. I captured
                  45 critical graph gotchas. During my Stripe loop, I recognized
                  the topological sort variant in under 3 minutes."
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 shadow-[5px_5px_0px_#111116] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-on-surface/10">
                  <div>
                    <h4 className="font-display font-black text-base text-on-surface uppercase">
                      DAVID K.
                    </h4>
                    <span className="font-mono text-[11px] text-zinc-500 font-bold">
                      DISTRIBUTED SYSTEMS @ DATADOG
                    </span>
                  </div>
                  <span className="bg-cyan-300 text-black px-2 py-0.5 font-mono text-[10px] font-black border border-black">
                    BOOTCAMP GRAD
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-4 italic">
                  "Arc treats coding like an athletic ritual. Writing the
                  Villain Era gave me permission to write bad code first, which
                  completely cured my interview freeze anxiety."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. PRICING: FREE FOREVER FOR STUDENTS. ZERO EXCUSES.                       */}
        {/* ========================================================================= */}
        <section className="w-full py-16 border-t-2 border-on-surface/20 flex flex-col items-center">
          <div className="bg-[#D4FF00] text-[#111116] px-3 py-1 font-mono text-xs font-black uppercase tracking-wider border-2 border-on-surface shadow-[3px_3px_0px_#111116] mb-4">
            // OPEN ACCESS //
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-center uppercase tracking-tight max-w-4xl">
            FREE FOREVER FOR STUDENTS.{" "}
            <span className="text-[#ff007f] underline decoration-[#111116]">
              ZERO EXCUSES.
            </span>
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-on-surface-variant text-center max-w-2xl">
            We believe the technical interview screen is flawed, not your
            potential. Arc is 100% free for students and solo developers.
          </p>

          <div className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Tier 1: Student Campus Pass (Free Forever) */}
            <div className="bg-surface-container-lowest border-3 border-on-surface p-8 shadow-[6px_6px_0px_#111116] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-on-surface-variant uppercase">
                    // INDIVIDUAL DEV ACCESS
                  </span>
                  <span className="bg-[#D4FF00] text-black px-2 py-0.5 font-mono text-[10px] font-black border border-black">
                    COMMUNITY
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-on-surface uppercase mt-2">
                  STUDENT CAMPUS PASS
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-on-surface">
                    $0
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant font-bold uppercase">
                    / FREE FOREVER
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-2">
                  Everything you need to conquer your technical interview loops
                  without paying for overpriced bootcamps.
                </p>

                <ul className="mt-6 space-y-3 font-body text-xs text-on-surface border-t border-on-surface/10 pt-6">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Full 4-Stage Arc Studio & Monaco Code Editor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Unlimited 3D Sticky Wall Notes & Pattern Pins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>
                      Multi-Language Highlighting (Python, C++, Java, JS, Go,
                      Rust)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Public Dev Profile & Flex Card Generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Access to 2025 "Your Wrapped" Drop Dossier</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleStartArc("/main")}
                  className="w-full py-4 px-6 bg-[#D4FF00] text-[#111116] border-2 border-on-surface font-display font-black text-sm uppercase shadow-[4px_4px_0px_#111116] hover:bg-[#bce600] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#111116] transition-all cursor-pointer"
                >
                  GET FREE ACCESS // START NOW
                </button>
              </div>
            </div>

            {/* Tier 2: Pro Fellowship ($8 / mo or Free via OSS) */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-8 shadow-[6px_6px_0px_#111116] flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 bg-[#ff007f] text-white px-3 py-0.5 font-mono text-[10px] font-black border border-black shadow-sm rotate-1">
                FOR L5/L6 & SENIORS
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-on-surface-variant uppercase">
                    // ADVANCED ACCELERATION
                  </span>
                  <span className="bg-surface-container-highest px-2 py-0.5 font-mono text-[10px] font-bold">
                    PRO
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-on-surface uppercase mt-2">
                  PRO FELLOWSHIP
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-on-surface">
                    $8
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant font-bold uppercase">
                    / MO (OR FREE VIA OSS)
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mt-2">
                  Designed for engineers targeting Staff/Principal levels,
                  systems architecture, or deep competitive programming.
                </p>

                <ul className="mt-6 space-y-3 font-body text-xs text-on-surface-variant border-t border-on-surface/10 pt-6">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Everything included in Student Campus Pass</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>
                      Advanced Distributed System Design Scrapbook Templates
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Direct Access to "Arc Live" Mentorship Lounges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>
                      Cohort Leaderboard Rankings & Verified Peer Reviews
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Private Mock Interview Recording Vault</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => handleStartArc("/login")}
                  className="w-full py-4 px-6 bg-surface-container-highest text-on-surface border-2 border-on-surface font-display font-bold text-sm uppercase shadow-[4px_4px_0px_#111116] hover:bg-surface-container-low active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
                >
                  DROPPING SOON
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. FINAL GIANT HERO CTA BANNER                                           */}
        {/* ========================================================================= */}
        <section className="w-full mt-10">
          <div className="w-full bg-[#D4FF00] border-3 sm:border-4 border-on-surface p-8 sm:p-14 shadow-[8px_8px_0px_#111116] text-left relative overflow-hidden">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#111116] text-[#D4FF00] px-3 py-1 font-mono text-xs font-black uppercase mb-6 shadow-[2px_2px_0px_#111116]">
                // READY TO BREAK THE CYCLE? //
              </div>

              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#111116] uppercase tracking-tight leading-[0.95]">
                YOUR TECHNICAL INTERVIEW IS GETTING SCHEDULED.
                <br />
                <span className="bg-white px-3 py-0.5 border-2 border-[#111116] shadow-[4px_4px_0px_#111116] inline-block mt-3">
                  ARE YOU WINGING IT OR RUNNING THE ARC?
                </span>
              </h2>

              <p className="mt-6 font-body text-base sm:text-lg font-bold text-zinc-900 max-w-2xl leading-relaxed">
                Join 2,419+ developers who stopped crying over LeetCode and
                started engineering their redemption. Free forever. Start in
                under 60 seconds.
              </p>

              {/* Instant Launch Form */}
              <form
                onSubmit={handleEmailSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your student or personal email..."
                  className="flex-grow px-4 py-3.5 bg-white text-[#111116] border-2 border-[#111116] font-mono text-xs sm:text-sm font-bold placeholder:text-zinc-500 focus:outline-none shadow-[4px_4px_0px_#111116]"
                  required
                />
                <button
                  type="submit"
                  className="py-3.5 px-6 bg-[#111116] text-[#D4FF00] border-2 border-[#111116] font-display font-black text-sm uppercase tracking-wider shadow-[4px_4px_0px_#111116] hover:bg-zinc-800 active:translate-x-[2px] active:translate-y-[2px] transition-all whitespace-nowrap cursor-pointer"
                >
                  {emailSuccess ? "INITIALIZING..." : "INITIALIZE YOUR ARC >"}
                </button>
              </form>
            </div>

            {/* Background Graphic Watermark */}
            <div className="hidden lg:block absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <span className="font-display font-black text-[280px] text-[#111116] leading-none select-none">
                ARC
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  );
};

export default LandingPage;
