import React, { useState } from "react";
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
import useLogin from "../../hooks/useLogin";

const LoginPage = () => {
  const {
    ARCHETYPES,
    handle,
    setHandle,
    selectedArchetype,
    setSelectedArchetype,
    handleSubmit
  } = useLogin();

  return (
    <div className="min-h-screen w-full bg-canvas-bg desk-grid flex items-center justify-center p-4 selection:bg-primary-container selection:text-on-primary-fixed">
      {/* Centered Identity Forge Card */}
      <div className="relative w-full max-w-[520px] bg-surface-container-lowest border-2 border-on-surface shadow-[8px_8px_0px_#111116] p-5 sm:p-6 text-on-surface">
        {/* Top Attached Tag: ARC // IDENTITY FORGE */}
        <div className="absolute -top-3.5 left-4 sm:left-6 px-2.5 py-0.5 bg-primary-container text-on-primary-fixed border-2 border-on-surface shadow-[2px_2px_0px_#111116] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-on-primary-fixed inline-block" />
          <span className="font-mono text-[11px] font-black tracking-wider uppercase">
            ARC
          </span>
        </div>

        {/* Section 1: Header Row */}
        <div className="flex items-center justify-between pt-1 pb-3.5 border-b border-on-surface/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-secondary inline-block" />
            <h1 className="font-mono text-xs font-black uppercase tracking-wider text-on-surface">
              CLAIM YOUR DEV HANDLE
            </h1>
          </div>
        </div>

        {/* Section 2: Permanent Dev Handle Box */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1 text-on-surface font-mono text-xs font-bold uppercase tracking-wide">
              <span className="text-on-surface-variant font-bold">@</span>
              <span>DEV HANDLE</span>
            </div>
          </div>

          {/* Input & URL Card Container */}
          <div className="border-2 border-on-surface shadow-[2px_2px_0px_#111116] overflow-hidden">
            {/* Input Row */}
            <div className="bg-[#F0ECF4] dark:bg-surface-container-high px-3 py-2 flex items-center justify-between gap-2 border-b border-on-surface/20">
              <input
                type="text"
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
                className="bg-transparent font-mono text-lg font-bold text-on-surface outline-none w-full placeholder:text-on-surface-variant/50"
                placeholder="@dev_handle"
              />
            </div>

            {/* Public URL Sub-bar */}
            {/* <div className="bg-[#EAE7EE] dark:bg-surface-container px-3 py-1.5 flex items-center justify-between font-mono text-[11px]">
              <span className="text-on-surface-variant">
                ∞ PUBLIC URL:{" "}
                <span className="text-on-surface font-bold">
                  arc.dev/{handle.replace(/^@/, "")}
                </span>
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-secondary font-black hover:underline uppercase cursor-pointer"
              >
                {copied ? "[COPIED!]" : "[COPY]"}
              </button>
            </div> */}
          </div>
        </div>

        {/* Section 3: Dev Archetype Badges */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1 text-on-surface font-mono text-xs font-bold uppercase tracking-wide">
              <span className="text-on-surface-variant font-bold">@</span>
              <span>DEV ARCHETYPE BADGE</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
              CHOOSE ANY ONE
            </span>
          </div>

          {/* Badges Grid (2 cols x 3 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ARCHETYPES.map((badge) => {
              const isSelected = selectedArchetype === badge.label;
              const Icon = badge.icon;
              return (
                <button
                  key={badge.id}
                  type="button"
                  onClick={() => setSelectedArchetype(badge.label)}
                  className={`w-full px-2.5 py-2 flex items-center gap-2 text-left font-mono text-xs transition-all cursor-pointer truncate ${
                    isSelected
                      ? "bg-primary-container text-on-primary-fixed border-2 border-on-surface font-bold shadow-[2px_2px_0px_#111116] -translate-y-0.5"
                      : "bg-surface-container-lowest text-on-surface border border-on-surface font-medium hover:bg-surface-container-high"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{badge.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 4: Action Buttons */}
        <div className="mt-5 flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="flex-1 py-3 px-3 sm:px-4 bg-primary-container text-on-primary-fixed border-2 border-on-surface shadow-[4px_4px_0px_#111116] font-mono text-xs sm:text-sm font-black uppercase tracking-wide flex items-center justify-center gap-2 hover:brightness-105 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#111116] transition-all cursor-pointer"
          >
            <RiFlashlightFill className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="truncate">STAMP &amp; CLAIM HANDLE</span>
          </button>
        </div>

        {/* Section 5: Card Footer */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-on-surface/10 font-mono text-[11px] text-on-surface-variant font-bold">
          <div className="flex items-center gap-1.5">
            <RiShieldCheckLine className="w-3.5 h-3.5 text-on-surface-variant" />
            <span>Verifiable Hacker Credentials</span>
          </div>
          <span>ARC-TERMS v1.9</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
