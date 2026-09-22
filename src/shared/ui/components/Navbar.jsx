import React from "react";
import {
  RiSunLine,
  RiMoonLine,
  RiUserFill,
} from "@remixicon/react";
import { NavLink, useNavigate } from "react-router";
import useNavbar from "../../hooks/useNavbar";

const Navbar = React.memo(({ isDark: propIsDark, onToggleTheme: propOnToggleTheme, onNavigate }) => {
  const { NAV_ITEMS, handle, archetype, isDark: hookIsDark, toggleTheme: hookToggleTheme } = useNavbar();
  const navigate = useNavigate();

  const isDark = propIsDark !== undefined ? propIsDark : hookIsDark;
  const onToggleTheme = propOnToggleTheme || hookToggleTheme;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas-bg/90 backdrop-blur-md border-b border-on-surface/10 transition-colors">
      <div className="h-20 w-full px-gutter lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        {/* Brand Logo & Home Link */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-space-sm cursor-pointer group"
          title="ARC Home"
        >
          <img
            src={isDark ? "/arc_dark_logo.png" : "/arc_logo.png"}
            alt="ARC - Loop & Level Up"
            className="h-24 sm:h-28 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-space-xs">
          {NAV_ITEMS.map((item) => {
            return (
              <NavLink
                end
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `px-space-sm py-1.5 border border-on-surface uppercase tracking-wider transition-all cursor-pointer font-label-md text-label-md ${
                    isActive
                      ? "bg-primary-container text-on-primary-fixed font-bold shadow-[3px_3px_0px_#111116] -translate-y-0.5"
                      : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high active:translate-x-[2px] active:translate-y-[2px]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Stats & Profile Controls */}
        <div className="flex items-center gap-space-sm">
          {/* Functional Light / Dark Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-space-xs py-1 bg-surface-container-lowest border border-on-surface text-on-surface shadow-[2px_2px_0px_#111116] active:translate-x-[2px] active:translate-y-[2px] font-label-sm text-label-sm uppercase font-bold hover:bg-surface-container transition-colors cursor-pointer"
            title="Toggle Light / Dark theme"
          >
            {isDark ? (
              <>
                <RiSunLine className="w-4 h-4 text-[#FFE500]" />
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <RiMoonLine className="w-4 h-4 text-secondary" />
                <span>DARK</span>
              </>
            )}
          </button>

          {/* User Profile Badge */}
          <div
            onClick={() => {
              if (typeof onNavigate === "function") {
                onNavigate("login");
              } else {
                navigate("/login");
              }
            }}
            className="flex items-center gap-space-xs bg-surface-container-lowest px-2 py-0.5 border border-on-surface shadow-[3px_3px_0px_#111116] cursor-pointer hover:bg-surface-container active:translate-x-[1px] active:translate-y-[1px] transition-all relative"
            title="Open Dev Handle Claim / Login"
          >
            <div className="rounded-full bg-primary flex items-center justify-center p-1">
              <RiUserFill className="w-4 h-4 text-on-primary" />
              {archetype && (
                <div className="absolute -bottom-4 -right-5 -rotate-2 px-1 py-0.2 bg-primary-container text-on-primary-fixed font-code-md text-[9px] font-black border border-on-surface shadow-sm pointer-events-none uppercase">
                  {archetype}
                </div>
              )}
            </div>

            <span className="hidden lg:inline font-code-md text-label-sm font-bold text-on-surface">
              {handle || "@dev_handle"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navbar;
