import React, { useState, useEffect } from "react";
import Navbar from "../../../../shared/ui/components/Navbar";
import Footer from "../../../../shared/ui/components/Footer";
import {
  RiNotification3Line,
  RiLockLine,
  RiCheckLine,
  RiAtLine,
  RiTimeLine,
  RiFlashlightFill,
  RiTerminalBoxLine,
  RiSparklingLine,
  RiPushpinFill,
  RiShieldCheckLine,
  RiVolumeUpLine,
  RiRadarLine,
} from "@remixicon/react";

const STORAGE_KEY = "arc_wrapped_drop_target_20d";
const TWENTY_DAYS_MS = 20 * 24 * 60 * 60 * 1000;

const getOrSetDropTarget = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed > Date.now()) {
        return parsed;
      }
    }
  } catch {
    // localStorage unavailable
  }

  // Anchor exactly 20 days from current first-load moment
  const newTarget = Date.now() + TWENTY_DAYS_MS;
  try {
    localStorage.setItem(STORAGE_KEY, newTarget.toString());
  } catch {
    // localStorage unavailable
  }
  return newTarget;
};

const calculateTimeLeft = (targetTimestamp) => {
  const diff = targetTimestamp - Date.now();

  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    days: String(d).padStart(2, "0"),
    hours: String(h).padStart(2, "0"),
    minutes: String(m).padStart(2, "0"),
    seconds: String(s).padStart(2, "0"),
  };
};

const YourWrapped = ({
  onNavigate = () => {},
  isDark = false,
  onToggleTheme = () => {},
}) => {
  // ----------------------------------------------------
  // Persistent Fixed 20-Day Countdown Timer
  // ----------------------------------------------------
  const [targetTimestamp] = useState(() => getOrSetDropTarget());
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(getOrSetDropTarget()));

  useEffect(() => {
    // Immediately calculate to prevent initial flash
    setTimeLeft(calculateTimeLeft(targetTimestamp));

    const interval = setInterval(() => {
      const remaining = calculateTimeLeft(targetTimestamp);
      setTimeLeft(remaining);

      if (
        remaining.days === "00" &&
        remaining.hours === "00" &&
        remaining.minutes === "00" &&
        remaining.seconds === "00"
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  // ----------------------------------------------------
  // Dispatch / Subscription State
  // ----------------------------------------------------
  const [notifyInput, setNotifyInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifySubmit = (e) => {
    e?.preventDefault();
    if (!notifyInput.trim()) return;

    try {
      const existing = JSON.parse(
        localStorage.getItem("wrapped_subscribers") || "[]",
      );
      localStorage.setItem(
        "wrapped_subscribers",
        JSON.stringify([
          ...existing,
          { input: notifyInput, timestamp: new Date().toISOString() },
        ]),
      );
    } catch {
      // Ignore local storage error
    }

    setIsSubscribed(true);
  };

  const scrollToReminder = () => {
    const el = document.getElementById("dispatch-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-[#e4e1e9] font-body selection:bg-[#ccff00] selection:text-black">
      {/* Top Header */}
      <Navbar
        activePage="your-wrapped"
        onNavigate={onNavigate}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
      />

      <main className="w-full pt-20 pb-20 bg-transparent min-h-screen">
        <div className="flex flex-col w-full px-3 sm:px-6 lg:px-10 py-6 items-center">
          <div className="w-full max-w-5xl flex flex-col gap-10">
            {/* ============================================================ */}
            {/* 1. TOP HERO: WRAPPED DROPPING SOON (EXACT SCREENSHOT REPLICA)*/}
            {/* ============================================================ */}
            <div className="relative border border-[#1d1f27] bg-[#0c0d12] shadow-[6px_6px_0px_#000] sm:shadow-[12px_12px_0px_#000] p-4 sm:p-8 md:p-10 overflow-hidden">
              {/* TOP-RIGHT CORNER INDUSTRIAL HAZARD STRIPES TAPE */}
              <div className="absolute top-9 -right-14 rotate-45 w-52 h-9 border-2 border-black flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-30 pointer-events-none select-none [background:repeating-linear-gradient(45deg,#ccff00,#ccff00_12px,#111116_12px,#111116_24px)]">
                <span className="px-2 py-0.5 bg-black/85 text-[#ccff00] font-mono font-black text-[9px] tracking-widest uppercase border border-black">
                  CAUTION // NO ENTRY
                </span>
              </div>

              {/* CONFIDENTIAL SYSTEM LEAK BADGE */}
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-[#e30071] text-white font-mono text-[11px] font-black tracking-widest uppercase border-2 border-black shadow-[3px_3px_0px_#000]">
                  CONFIDENTIAL SYSTEM LEAK
                </div>
              </div>

              {/* MASSIVE 3D EXTENDED GEN-Z TITLE */}
              <div className="mb-5 select-none">
                <h1 className="font-['Syne',sans-serif] font-black uppercase tracking-tighter leading-[0.88] text-4xl sm:text-7xl md:text-8xl">
                  {/* WRAPPED */}
                  <span className="block text-white [text-shadow:4px_4px_0px_#e30071,6px_6px_0px_#000]">
                    WRAPPED
                  </span>

                  {/* DROPPING + PINK SAWTOOTH CHEVRON RIBBON */}
                  <span className="relative inline-block text-[#ccff00] [text-shadow:4px_4px_0px_#e30071,6px_6px_0px_#000] my-1">
                    DROPPING
                    {/* Pink Sawtooth / Chevron Washi Tape Underneath */}
                    <div className="absolute -bottom-3 left-0 w-full h-4 overflow-hidden pointer-events-none z-[-1] opacity-90">
                      <div className="w-full h-full [background:repeating-linear-gradient(45deg,#e30071,#e30071_8px,transparent_8px,transparent_16px),repeating-linear-gradient(-45deg,#e30071,#e30071_8px,transparent_8px,transparent_16px)]" />
                    </div>
                  </span>

                  {/* SOON */}
                  <span className="block text-white [text-shadow:4px_4px_0px_#e30071,6px_6px_0px_#000] pt-1">
                    SOON
                  </span>
                </h1>
              </div>

              {/* SUBTITLE */}
              <p className="font-body text-sm sm:text-base text-[#9fa2b4] max-w-2xl leading-relaxed mb-8">
                Calculating villain era runtimes,{" "}
                <span className="px-1.5 py-0.5 bg-[#ccff00] text-black font-mono font-black text-xs border border-black shadow-[1px_1px_0px_#000] inline-block mx-0.5">
                  O(N²)
                </span>{" "}
                trauma metrics, LeetCode contest meltdowns, and redemption
                milestones...
              </p>

              {/* ========================================================= */}
              {/* INNER DASHBOARD: ENCRYPTED PREVIEW CARD + COUNTDOWN LOG   */}
              {/* ========================================================= */}
              <div className="border border-[#232634] bg-[#0e1017] p-4 sm:p-6 items-center">
                {/* RIGHT COLUMN: COUNTDOWN + TELEMETRY LOG + REMINDER BUTTON */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  {/* Countdown Header */}
                  <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 text-[#ccff00] font-bold tracking-wider uppercase">
                      <RiTimeLine className="w-4 h-4 text-[#ccff00]" />
                      ESTIMATED GLOBAL SYSTEM UNLOCK
                    </span>
                    <span className="text-[#7d8194] text-[10px] font-bold tracking-wider">
                      TIMEZONE: UTC-08
                    </span>
                  </div>

                  {/* THE 4 BRUTALIST COUNTDOWN BLOCKS */}
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 select-none">
                    {/* 04 DAYS (ELECTRIC NEON LIME) */}
                    <div className="border-2 border-black bg-[#ccff00] text-black p-2 sm:p-3 flex flex-col items-center justify-center shadow-[4px_4px_0px_#000]">
                      <span className="font-['Syne',sans-serif] font-black text-3xl sm:text-5xl leading-none">
                        {timeLeft.days}
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-1">
                        DAYS
                      </span>
                    </div>

                    {/* 18 HOURS (WHITE) */}
                    <div className="border-2 border-black bg-white text-black p-2 sm:p-3 flex flex-col items-center justify-center shadow-[4px_4px_0px_#000]">
                      <span className="font-['Syne',sans-serif] font-black text-3xl sm:text-5xl leading-none">
                        {timeLeft.hours}
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-1">
                        HOURS
                      </span>
                    </div>

                    {/* 28 MINS (WHITE) */}
                    <div className="border-2 border-black bg-white text-black p-2 sm:p-3 flex flex-col items-center justify-center shadow-[4px_4px_0px_#000]">
                      <span className="font-['Syne',sans-serif] font-black text-3xl sm:text-5xl leading-none">
                        {timeLeft.minutes}
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-1">
                        MINS
                      </span>
                    </div>

                    {/* 36 SECS (MAGENTA / HOT PINK) */}
                    <div className="border-2 border-black bg-[#e30071] text-white p-2 sm:p-3 flex flex-col items-center justify-center shadow-[4px_4px_0px_#000]">
                      <span className="font-['Syne',sans-serif] font-black text-3xl sm:text-5xl leading-none">
                        {timeLeft.seconds}
                      </span>
                      <span className="font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-1">
                        SECS
                      </span>
                    </div>
                  </div>

                  {/* Terminal Live Telemetry Log Box */}
                  <div className="border border-[#262835] bg-[#07080c] p-3.5 font-mono text-[11px] leading-relaxed space-y-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                    <p className="text-[#e30071] font-bold flex items-center gap-1.5">
                      <span className="text-[#ccff00]">&gt;&gt;</span>
                      AGGREGATING 365 DAYS OF SCRIPT KIDDIE EVOLUTION • LIVE
                      RUNNER
                    </p>
                    <p className="text-[#9ca3af]">
                      &gt; Parsing GitHub commits, Dynamic Programming epiphany
                      moments, and 3:00 AM submission logs.
                    </p>
                    <p className="text-[#d1d5db]">
                      &gt; WARNING: Redacted metrics contain high concentrations
                      of cringe brute-force solutions.
                    </p>
                  </div>

                  {/* Action Row: Set Drop Reminder + Queue Counter */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 pt-1">
                    <button
                      type="button"
                      onClick={scrollToReminder}
                      className="px-5 py-3 bg-[#ccff00] text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center gap-2.5 cursor-pointer shrink-0"
                    >
                      <RiNotification3Line className="w-4 h-4 stroke-[2.5]" />
                      <div className="text-left leading-tight">
                        <span className="block font-black">SET DROP</span>
                        <span className="block font-black">REMINDER</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* ============================================================ */}
            {/* 2. BOTTOM SECTION: GET NOTIFIED WHEN DROP GOES LIVE          */}
            {/* ============================================================ */}
            <div
              id="dispatch-section"
              className="relative border-2 border-black bg-white text-black p-6 sm:p-10 shadow-[10px_10px_0px_#000] text-center mt-2"
            >
              {/* Floating Top Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-white border-2 border-black font-mono text-[10px] font-black tracking-widest uppercase shadow-[2px_2px_0px_#000] flex items-center gap-1.5 select-none">
                <RiSparklingLine className="w-3.5 h-3.5 text-[#e30071]" />
                <span>PRIORITY VIP DISPATCH</span>
              </div>

              {/* Title & Lore Description */}
              <div className="max-w-2xl mx-auto space-y-2 mt-2">
                <h2 className="font-['Syne',sans-serif] font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight text-black">
                  GET NOTIFIED WHEN DROP GOES LIVE
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#4b5563] font-medium max-w-lg mx-auto">
                  Don't get spoiled on X and Reddit. We'll dispatch a raw
                  terminal ping straight to your inbox or Discord webhook the
                  millisecond your dossier compiles.
                </p>
              </div>

              {/* Dispatch Form / Action Button */}
              <div className="max-w-md mx-auto my-6">
                {isSubscribed ? (
                  <div className="p-4 bg-[#ccff00] text-black border-2 border-black shadow-[4px_4px_0px_#000] font-mono text-xs sm:text-sm font-black flex items-center justify-center gap-2">
                    <RiShieldCheckLine className="w-5 h-5 stroke-[2.5]" />
                    <span>
                      PING LOCKED IN! YOU'RE ON THE VIP DISPATCH LIST 🚀
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNotifySubmit}
                    className="flex flex-col sm:flex-row items-stretch shadow-[4px_4px_0px_#000]"
                  >
                    <div className="relative flex-1 flex items-center border-2 border-black bg-[#fafafa] sm:border-r-0">
                      <RiAtLine className="w-4 h-4 text-[#6b7280] ml-3 shrink-0" />
                      <input
                        type="text"
                        value={notifyInput}
                        onChange={(e) => setNotifyInput(e.target.value)}
                        placeholder="developer@arc.dsa or discord_handle"
                        className="w-full px-2.5 py-3 bg-transparent font-mono text-xs text-black placeholder:text-[#9ca3af] focus:outline-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#ccff00] text-black border-2 border-black font-mono text-xs font-black uppercase hover:brightness-105 active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                    >
                      <RiNotification3Line className="w-4 h-4 stroke-[2.5]" />
                      <span>PING ME ON DROP</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Bottom Quote Sticker */}
              <div className="mt-8 pt-6 border-t border-black/15">
                <div className="inline-block p-3 sm:p-4 bg-[#f4f4f6] border-2 border-black shadow-[3px_3px_0px_#000] -rotate-0.5 max-w-xl text-center">
                  <p className="font-mono text-xs text-black italic font-bold">
                   "Every Senior Dev cooked O(n²) spaghetti code before they were the GOAT. Your Wrapped's still in the oven"
                  </p>
                  <span className="font-mono text-[10px] text-[#6b7280] uppercase font-bold mt-1 block">
                    — Raj Shah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default YourWrapped;
