import React, { useState } from 'react';
import Navbar from '../../../../shared/ui/components/Navbar';
import {
  RiFireFill,
  RiTrophyFill,
  RiFlashlightFill,
  RiSkullLine,
  RiMusic2Line,
  RiCheckboxCircleFill,
  RiDownloadLine,
  RiRestartLine,
  RiFileCopyLine,
  RiArrowLeftRightLine,
  RiDoubleQuotesL,
} from '@remixicon/react';
import Footer from '../../../../shared/ui/components/Footer';

const YourWrapped = ({
  onNavigate = () => { },
  isDark = false,
  onToggleTheme = () => { },
}) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [timelineExpanded, setTimelineExpanded] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-canvas-bg desk-grid text-on-surface font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-fixed">
      {/* Top Header */}
      <Navbar
        activePage="your-wrapped"
        onNavigate={onNavigate}
        isDark={isDark}
        onToggleTheme={onToggleTheme}
      />

      <main className="w-full pt-20 bg-transparent min-h-screen">
        <div className="flex flex-col w-full px-gutter lg:px-gutter-desktop py-space-md items-center relative">
          <div className="w-full max-w-5xl flex flex-col items-center">
            {/* Top Notification Banner / Scrap Ribbon */}
            <div className="w-full flex flex-wrap items-center justify-between gap-space-sm mb-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-surface-container-lowest border-2 border-on-surface shadow-[4px_4px_0px_#111116] -rotate-1">
                <RiFireFill className="w-5 h-5 text-secondary" />
                <span className="font-code-md text-label-md uppercase tracking-wider text-on-surface font-bold">
                  WRAPPED SEASON 2025 ACTIVE • 3,842 LEETCODE COOKS ONLINE
                </span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold">
                  RENDER ENGINE: NEUBRUTAL-V4.2
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-primary-container border border-on-surface animate-pulse" />
              </div>
            </div>

            {/* Main Shareable Poster Stage */}
            <div className="relative w-full max-w-2xl flex flex-col items-center">
              {/* Washi Tape Top Pin */}
              <div className="absolute -top-4 z-30 w-44 h-8 bg-[#FFE500]/90 border-2 border-on-surface shadow-[2px_2px_0px_#111116] -rotate-2 flex items-center justify-center">
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-widest font-bold">
                  DO NOT REMOVE // ARC HQ
                </span>
              </div>

              {/* The Screenshot Poster Card */}
              <div className="relative w-full bg-[#111116] text-[#FBF8FF] border-4 border-on-surface shadow-[12px_12px_0px_#111116] p-space-md sm:p-space-lg flex flex-col overflow-hidden select-none gap-space-lg">
                {/* Background Techno-Noise Graphic */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern height="32" id="grid-pattern" patternUnits="userSpaceOnUse" width="32">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#FBF8FF" strokeWidth="1" />
                        <circle cx="16" cy="16" fill="#CCFF00" r="1.5" />
                      </pattern>
                    </defs>
                    <rect fill="url(#grid-pattern)" height="100%" width="100%" />
                  </svg>
                </div>

                {/* Poster Header */}
                <div className="relative z-10 flex flex-col gap-space-xs border-b-4 border-[#FBF8FF] pb-space-md">
                  <div className="flex items-center justify-between gap-space-xs flex-wrap">
                    <div className="px-space-xs py-0.5 bg-[#FF2A85] text-[#FFFFFF] border-2 border-on-surface shadow-[3px_3px_0px_#FFFFFF] rotate-1">
                      <span className="font-label-sm text-label-sm uppercase font-bold tracking-widest">
                        PERSONAL REPORT • DROP #04
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs font-code-md text-label-sm text-[#FFE500] font-bold">
                      <span>CONFIDENTIAL</span>
                      <span>///</span>
                      <span>VERIFIED VIBE</span>
                    </div>
                  </div>

                  <h1 className="font-display-lg text-display-md sm:text-display-lg uppercase tracking-tight text-primary-container leading-none mt-1">
                    ARC 2025 // DSA GLOW-UP WRAPPED
                  </h1>

                  <div className="flex flex-wrap items-center justify-between gap-space-sm pt-2">
                    <div className="flex items-center gap-space-xs bg-[#22222B] px-space-sm py-1 border-2 border-[#555566]">
                      <span className="w-3 h-3 rounded-full bg-primary-container" />
                      <span className="font-code-md text-code-md text-[#FFFFFF] font-bold">@dev_arc</span>
                      <span className="text-[#888899]">•</span>
                      <span className="font-code-md text-code-md text-[#FFE500] font-bold">14 Day Grinding Streak 🔥</span>
                    </div>
                    <div className="px-space-sm py-1 bg-[#CCFF00] text-on-surface border-2 border-on-surface shadow-[3px_3px_0px_#FFFFFF] -rotate-1">
                      <span className="font-code-md text-label-sm uppercase font-bold tracking-wider">
                        ARC LEVEL 12: OPTIMIZATION GIGACHAD ⚡
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stat Block 1: Accumulation */}
                <div className="relative z-10 bg-primary-container text-[#111116] border-4 border-on-surface shadow-[6px_6px_0px_#00E5FF] p-space-md sm:p-space-lg flex flex-col gap-1 -rotate-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold bg-[#111116] text-primary-container px-2 py-0.5">
                      METRIC 01 // ACCUMULATION
                    </span>
                    <RiTrophyFill className="w-7 h-7 text-on-surface" />
                  </div>
                  <div className="font-display-lg text-display-md sm:text-display-lg font-black leading-none tracking-tighter mt-1">
                    48 PROBLEMS CONQUERED
                  </div>
                  <p className="font-body-lg text-body-md sm:text-body-lg font-bold uppercase tracking-tight text-[#22222B] mt-2">
                    26 Reached Final Form <span className="text-secondary">•</span> 14 Mid-Glow <span className="text-secondary">•</span> 8 Still in Villain Era
                  </p>
                  {/* Progress Micro-Tape */}
                  <div className="w-full h-3 bg-[#111116] mt-space-xs flex overflow-hidden border-2 border-[#111116]">
                    <div className="h-full bg-[#FFFFFF]" style={{ width: '54%' }} />
                    <div className="h-full bg-secondary-container" style={{ width: '29%' }} />
                    <div className="h-full bg-[#FFE500]" style={{ width: '17%' }} />
                  </div>
                </div>

                {/* Stat Row Split: Hot Pink & Cyber Cyan */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  {/* Block 2: Time Speedup */}
                  <div className="bg-secondary-container text-on-secondary-container border-4 border-on-surface shadow-[5px_5px_0px_#CCFF00] p-space-md flex flex-col justify-between rotate-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold bg-[#111116] text-[#FFFFFF] px-2 py-0.5">
                        METRIC 02 // TIME SPEEDUP
                      </span>
                      <RiFlashlightFill className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display-md text-display-md leading-none font-black tracking-tight text-[#FFFFFF]">
                        1,420ms <span className="text-[#FFE500]">➔</span> 0ms
                      </div>
                      <p className="font-code-md text-code-md font-bold mt-2 text-[#FFFFFF] leading-snug">
                        Biggest single runtime drop: <br />
                        <span className="underline decoration-wavy decoration-[#FFE500]">Trapping Rain Water</span>
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t-2 border-[#FFFFFF]/40 flex justify-between items-center text-label-sm font-label-sm font-bold">
                      <span>PERCENTILE: 99.8%</span>
                      <span className="bg-[#111116] text-[#FFFFFF] px-1 font-bold">O(1) SPACE</span>
                    </div>
                  </div>

                  {/* Block 3: Nemesis */}
                  <div className="bg-tertiary-container text-[#001f24] border-4 border-on-surface shadow-[5px_5px_0px_#FF2A85] p-space-md flex flex-col justify-between -rotate-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold bg-[#001f24] text-tertiary-container px-2 py-0.5">
                        METRIC 03 // NEMESIS
                      </span>
                      <RiSkullLine className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-headline-lg text-headline-lg font-black uppercase tracking-tight leading-tight text-[#001f24]">
                        MOST COMMON CRINGE: <br />
                        <span className="bg-[#001f24] text-tertiary-fixed px-1 inline-block mt-1">O(N²) NESTED LOOPS</span>
                      </div>
                      <p className="font-code-md text-code-md font-bold mt-2 text-[#00363d] leading-snug">
                        Occurred 19 times before technical enlightenment.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t-2 border-[#001f24]/30 flex justify-between items-center text-label-sm font-label-sm font-bold">
                      <span>STATUS: REPROGRAMMED</span>
                      <span>LETHAL FIX: HASHMAP</span>
                    </div>
                  </div>
                </div>

                {/* Block 4: Dominant Playbook */}
                <div className="relative z-10 bg-[#FF6B00] text-[#111116] border-4 border-on-surface shadow-[6px_6px_0px_#FFFFFF] p-space-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm rotate-0.5">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest font-black bg-[#111116] text-[#FF6B00] px-2 py-0.5 w-max mb-1">
                      METRIC 04 // DOMINANT PLAYBOOK
                    </span>
                    <div className="font-display-md text-headline-lg sm:text-display-md font-black uppercase leading-tight tracking-tight">
                      BIGGEST W ARCHETYPE: TWO POINTERS
                    </div>
                    <p className="font-code-md text-code-md font-bold mt-1 text-[#22222B]">
                      87% first-try success rate after internalizing the pattern.
                    </p>
                  </div>
                  <div className="sm:self-center px-space-md py-space-xs bg-[#111116] text-[#FF6B00] border-2 border-on-surface shadow-[3px_3px_0px_#FFFFFF] shrink-0 -rotate-1 text-center">
                    <span className="font-display-md text-headline-lg font-black leading-none block">87%</span>
                    <span className="block font-label-sm text-label-sm font-bold tracking-widest text-[#FFFFFF]">WIN RATE</span>
                  </div>
                </div>

                {/* Heavy Rotation Cassette Tracklist */}
                <div className="relative z-10 bg-[#1A1A22] border-4 border-on-surface shadow-[6px_6px_0px_#FFE500] p-space-md flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between border-b-2 border-[#333344] pb-space-xs">
                    <div className="flex items-center gap-space-xs">
                      <RiMusic2Line className="w-5 h-5 text-[#FFE500]" />
                      <span className="font-headline-md text-headline-md uppercase tracking-tight text-[#FFFFFF] font-bold">
                        HEAVY ROTATION TRACKLIST // PATTERNS
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-[#888899] font-bold">SIDE A • 40 TRACKS</span>
                  </div>

                  <div className="flex flex-col gap-2.5 mt-1">
                    {/* Track 1 */}
                    <div className="w-full bg-[#FFE500] text-on-surface border-2 border-on-surface shadow-[3px_3px_0px_#111116] p-2 flex items-center justify-between -rotate-0.5 hover:translate-x-1 transition-transform">
                      <div className="flex items-center gap-space-xs min-w-0">
                        <span className="font-code-md text-label-md font-bold bg-[#111116] text-[#FFE500] px-1.5 py-0.5 shrink-0">
                          TRACK 01
                        </span>
                        <span className="font-headline-md text-code-md sm:text-headline-md font-black tracking-tight truncate">
                          DP / Knapsack: 12 tracks
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs shrink-0 pl-2">
                        <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider bg-surface-container-lowest text-on-surface px-2 py-0.5 border border-on-surface">
                          MASTERED ✅
                        </span>
                        <span className="font-code-md text-label-sm font-bold hidden sm:inline">12/12</span>
                      </div>
                    </div>

                    {/* Track 2 */}
                    <div className="w-full bg-tertiary-container text-[#001f24] border-2 border-on-surface shadow-[3px_3px_0px_#111116] p-2 flex items-center justify-between rotate-0.5 hover:translate-x-1 transition-transform">
                      <div className="flex items-center gap-space-xs min-w-0">
                        <span className="font-code-md text-label-md font-bold bg-[#001f24] text-tertiary-container px-1.5 py-0.5 shrink-0">
                          TRACK 02
                        </span>
                        <span className="font-headline-md text-code-md sm:text-headline-md font-black tracking-tight truncate">
                          Graphs &amp; BFS/DFS: 15 tracks
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs shrink-0 pl-2">
                        <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider bg-[#001f24] text-[#FFFFFF] px-2 py-0.5">
                          IN ROTATION 🔄
                        </span>
                        <span className="font-code-md text-label-sm font-bold hidden sm:inline">15/18</span>
                      </div>
                    </div>

                    {/* Track 3 */}
                    <div className="w-full bg-secondary-container text-[#FFFFFF] border-2 border-on-surface shadow-[3px_3px_0px_#111116] p-2 flex items-center justify-between -rotate-1 hover:translate-x-1 transition-transform">
                      <div className="flex items-center gap-space-xs min-w-0">
                        <span className="font-code-md text-label-md font-bold bg-[#FFFFFF] text-secondary-container px-1.5 py-0.5 shrink-0">
                          TRACK 03
                        </span>
                        <span className="font-headline-md text-code-md sm:text-headline-md font-black tracking-tight truncate">
                          Binary Search: 9 tracks
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs shrink-0 pl-2">
                        <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider bg-[#FFFFFF] text-secondary-container px-2 py-0.5">
                          PURE DOPAMINE ⚡
                        </span>
                        <span className="font-code-md text-label-sm font-bold hidden sm:inline">9/9</span>
                      </div>
                    </div>

                    {/* Track 4 */}
                    <div className="w-full bg-primary-container text-on-surface border-2 border-on-surface shadow-[3px_3px_0px_#111116] p-2 flex items-center justify-between rotate-1 hover:translate-x-1 transition-transform">
                      <div className="flex items-center gap-space-xs min-w-0">
                        <span className="font-code-md text-label-md font-bold bg-[#111116] text-primary-container px-1.5 py-0.5 shrink-0">
                          TRACK 04
                        </span>
                        <span className="font-headline-md text-code-md sm:text-headline-md font-black tracking-tight truncate">
                          Bit Manipulation: 4 tracks
                        </span>
                      </div>
                      <div className="flex items-center gap-space-xs shrink-0 pl-2">
                        <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider bg-[#111116] text-[#FFFFFF] px-2 py-0.5">
                          DARK MAGIC 🔮
                        </span>
                        <span className="font-code-md text-label-sm font-bold hidden sm:inline">4/6</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Hero Stamps */}
                <div className="relative z-10 pt-space-xs flex flex-col sm:flex-row items-center justify-between gap-space-md border-t-4 border-[#FBF8FF] mt-space-xs">
                  <div className="w-full sm:w-auto p-1 border-2 border-primary-container -rotate-2">
                    <div className="border-2 border-dashed border-primary-container px-space-sm py-1.5 bg-[#161e00] flex items-center gap-space-xs justify-center">
                      <RiCheckboxCircleFill className="w-6 h-6 text-primary-container" />
                      <span className="font-code-md text-label-sm font-bold tracking-tight text-primary-container uppercase">
                        CERTIFIED 100% VILLAIN-TO-HERO REDEMPTION ARC
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 px-space-md py-2 bg-[#FFD700] text-on-surface border-4 border-on-surface shadow-[4px_4px_0px_#FFFFFF] text-center rotate-1">
                    <span className="font-display-md text-headline-md leading-none font-black uppercase tracking-tighter block">
                      VERIFIED
                    </span>
                    <span className="font-code-md text-label-sm font-bold uppercase tracking-widest block text-[#111116]">
                      LEETCODE COOK 🔥
                    </span>
                  </div>
                </div>

                {/* Poster Footer / Barcode */}
                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#333344] text-[#777788] font-code-md text-label-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="inline-block tracking-tighter text-label-md text-[#FBF8FF]">|||| | | ||||| || | |||| ||||</span>
                    <span className="hidden sm:inline">SHA256: 0x9B...A12</span>
                  </div>
                  <div>POWERED BY ARC // VIBE LOG 2025</div>
                </div>
              </div>

              {/* Corner Pin Effect */}
              <div className="absolute -bottom-3 -right-3 z-30 w-12 h-12 bg-secondary-container border-2 border-on-surface shadow-[2px_2px_0px_#111116] flex items-center justify-center text-on-secondary-container rotate-3">
                <span className="font-code-md text-label-sm font-bold">W'25</span>
              </div>
            </div>

            {/* Share Action Bar */}
            <div className="w-full max-w-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-space-md mt-space-xl">
              <button
                type="button"
                onClick={handleDownload}
                className="flex-1 px-space-md py-space-sm bg-primary-container text-on-primary-fixed border-2 border-on-surface shadow-[6px_6px_0px_#111116] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#111116] transition-transform flex items-center justify-center gap-space-xs font-code-md text-body-md font-bold uppercase tracking-wide cursor-pointer"
              >
                {downloading ? (
                  <RiRestartLine className="w-5 h-5 animate-spin" />
                ) : (
                  <RiDownloadLine className="w-5 h-5" />
                )}
                <span>{downloading ? 'RENDERING 4K SCREENSHOT...' : 'DOWNLOAD POSTER (TWITTER / LINKEDIN)'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className={`px-space-md py-space-sm border-2 border-on-surface shadow-[6px_6px_0px_#111116] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#111116] transition-colors flex items-center justify-center gap-space-xs font-code-md text-body-md font-bold uppercase tracking-wide cursor-pointer ${copied ? 'bg-[#CCFF00] text-on-surface' : 'bg-surface-container-lowest text-on-surface hover:bg-[#FFE500]'
                  }`}
              >
                <RiFileCopyLine className="w-5 h-5" />
                <span>{copied ? 'COPIED TO CLIPBOARD! ⚡' : 'COPY BRAG LINK'}</span>
              </button>
            </div>

            {/* Flip to Detailed Timeline Accordion */}
            <div className="w-full max-w-2xl mt-space-md flex flex-col items-center">
              <button
                type="button"
                onClick={() => setTimelineExpanded((prev) => !prev)}
                className="w-full py-space-sm px-space-md bg-[#22222B] text-[#FBF8FF] border-2 border-on-surface shadow-[4px_4px_0px_#111116] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#111116] flex items-center justify-between font-code-md text-code-md uppercase tracking-wider font-bold hover:bg-[#30303D] cursor-pointer"
              >
                <div className="flex items-center gap-space-xs">
                  <RiArrowLeftRightLine className="w-5 h-5 text-[#CCFF00]" />
                  <span>🔄 FLIP TO VIEW DETAILED TIMELINE BREAKDOWN</span>
                </div>
                <span className="font-label-sm text-[#FFE500]">
                  {timelineExpanded ? '[-] COLLAPSE SCRAPBOOK' : '[+] EXPAND SCRAPBOOK'}
                </span>
              </button>

              {timelineExpanded && (
                <div className="w-full bg-surface-container-lowest border-2 border-t-0 border-on-surface shadow-[4px_4px_0px_#111116] p-space-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between border-b-2 border-on-surface pb-space-xs">
                    <span className="font-headline-md text-headline-md uppercase font-bold text-on-surface">
                      THE 14-DAY REDEMPTION LOG
                    </span>
                    <span className="font-label-sm text-label-sm uppercase bg-primary-container px-2 py-0.5 text-on-primary-fixed border border-on-surface font-bold">
                      14/14 DAYS ACTIVE
                    </span>
                  </div>

                  <div className="flex flex-col gap-space-sm">
                    <div className="p-space-sm bg-surface-container border-2 border-on-surface flex items-start justify-between gap-space-sm">
                      <div className="flex items-start gap-space-sm">
                        <span className="font-code-md text-label-md font-bold bg-[#111116] text-[#FFFFFF] px-2 py-1">
                          DAY 14
                        </span>
                        <div>
                          <p className="font-headline-md text-body-lg font-bold text-on-surface">
                            Median of Two Sorted Arrays (Hard)
                          </p>
                          <p className="font-code-md text-code-md text-on-surface-variant">
                            Conquered binary search on partition cuts. Runtime: 2ms (Beats 98.4%).
                          </p>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2 py-1 uppercase font-bold">
                        W STAMP ✅
                      </span>
                    </div>

                    <div className="p-space-sm bg-surface-container border-2 border-on-surface flex items-start justify-between gap-space-sm">
                      <div className="flex items-start gap-space-sm">
                        <span className="font-code-md text-label-md font-bold bg-[#111116] text-[#FFFFFF] px-2 py-1">
                          DAY 11
                        </span>
                        <div>
                          <p className="font-headline-md text-body-lg font-bold text-on-surface">
                            Alien Dictionary (Topological Sort)
                          </p>
                          <p className="font-code-md text-code-md text-on-surface-variant">
                            DAG cycle detection broke the villain era curse. Kahn's algorithm applied.
                          </p>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm bg-secondary text-on-secondary px-2 py-1 uppercase font-bold">
                        BIG GLOW ⚡
                      </span>
                    </div>

                    <div className="p-space-sm bg-surface-container border-2 border-on-surface flex items-start justify-between gap-space-sm">
                      <div className="flex items-start gap-space-sm">
                        <span className="font-code-md text-label-md font-bold bg-[#111116] text-[#FFFFFF] px-2 py-1">
                          DAY 03
                        </span>
                        <div>
                          <p className="font-headline-md text-body-lg font-bold text-on-surface">
                            Longest Palindromic Substring
                          </p>
                          <p className="font-code-md text-code-md text-on-surface-variant">
                            Survived 4 O(n³) TLE submissions before switching to expand-around-center.
                          </p>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm bg-[#111116] text-[#FFE500] px-2 py-1 uppercase font-bold">
                        VILLAIN ERA 💀
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Community Quote Sticker */}
            <div className="w-full max-w-2xl p-space-md bg-[#FFE500] border-2 border-on-surface shadow-[6px_6px_0px_#111116] -rotate-1 flex flex-col sm:flex-row items-center justify-between gap-space-sm mt-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 bg-[#111116] text-[#FFE500] flex items-center justify-center shrink-0 border-2 border-on-surface -rotate-1">
                  <RiDoubleQuotesL className="w-6 h-6" />
                </div>
                <p className="font-headline-md text-body-md font-bold text-on-surface">
                  "The jump from brute-force O(N²) to memoized recursion felt like stepping out of the Matrix."
                </p>
              </div>
              <div className="shrink-0 font-code-md text-label-sm uppercase font-bold text-[#111116] bg-surface-container-lowest px-2 py-1 border border-on-surface">
                #ARCWRAPPED25
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default YourWrapped;
