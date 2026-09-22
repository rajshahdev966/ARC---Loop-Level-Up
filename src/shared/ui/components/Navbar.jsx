import React, { useState } from "react";
import {
  RiSunLine,
  RiMoonLine,
  RiUserFill,
  RiMenuLine,
  RiCloseLine,
} from "@remixicon/react";
import { NavLink, useNavigate } from "react-router";
import useNavbar from "../../hooks/useNavbar";

const Navbar = React.memo(({ isDark: propIsDark, onToggleTheme: propOnToggleTheme, onNavigate }) => {
  const { NAV_ITEMS, handle, archetype, isDark: hookIsDark, toggleTheme: hookToggleTheme } = useNavbar();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = propIsDark !== undefined ? propIsDark : hookIsDark;
  const onToggleTheme = propOnToggleTheme || hookToggleTheme;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas-bg/90 backdrop-blur-md border-b border-on-surface/10 transition-colors">
      <div className="h-20 w-full px-gutter lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        {/* Brand Logo & Home Link */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-space-sm cursor-pointer group shrink-0"
          title="ARC Home"
        >
          <img
            src={isDark ? "/arc_dark_logo.png" : "/arc_logo.png"}
            alt="ARC - Loop & Level Up"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105"
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
        <div className="flex items-center gap-2 sm:gap-space-sm">
          {/* Functional Light / Dark Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-2 sm:px-space-xs py-1 bg-surface-container-lowest border border-on-surface text-on-surface shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] font-mono text-[11px] sm:text-label-sm uppercase font-bold hover:bg-surface-container transition-colors cursor-pointer"
            title="Toggle Light / Dark theme"
          >
            {isDark ? (
              <>
                <RiSunLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFE500]" />
                <span className="hidden sm:inline">LIGHT</span>
              </>
            ) : (
              <>
                <RiMoonLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
                <span className="hidden sm:inline">DARK</span>
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
            className="flex items-center gap-1 sm:gap-space-xs bg-surface-container-lowest px-1.5 sm:px-2 py-0.5 border border-on-surface shadow-[2px_2px_0px_#111116] sm:shadow-[3px_3px_0px_#111116] cursor-pointer hover:bg-surface-container active:translate-x-[1px] active:translate-y-[1px] transition-all relative"
            title="Open Dev Handle Claim / Login"
          >
            <div className="rounded-full bg-primary flex items-center justify-center p-1">
              <RiUserFill className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-on-primary" />
              {archetype  && (
                <div className="absolute hidden lg:flex -bottom-4 -right-4 sm:-right-5 -rotate-2 px-1 py-0.2 bg-primary-container text-on-primary-fixed font-code-md text-[8px] sm:text-[9px] font-black border border-on-surface shadow-sm pointer-events-none uppercase">
                  {archetype}
                </div>
              )}
            </div>

            <span className="hidden md:inline font-code-md text-label-sm font-bold text-on-surface">
              {handle || "@dev_handle"}
            </span>
          </div>

          {/* Cool Neo-Brutalist Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden flex items-center justify-center p-1.5 bg-surface-container-lowest border-2 border-on-surface text-on-surface shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none hover:bg-surface-container transition-all cursor-pointer font-mono"
            aria-label="Toggle Navigation Menu"
            title="Toggle Console Menu"
          >
            {mobileMenuOpen ? (
              <RiCloseLine className="w-4 h-4 text-secondary" />
            ) : (
              <span className="flex items-center font-bold text-xs tracking-tighter">
                <RiMenuLine className="w-4 h-4" />
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Cool Console-Website Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-canvas-bg border-b-2 border-on-surface px-4 py-3 shadow-[0px_4px_0px_#111116]">
          
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                end
                key={item.id}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 border-2 border-on-surface uppercase tracking-wider transition-all font-mono text-xs flex items-center justify-between ${
                    isActive
                      ? "bg-primary-container text-on-primary-fixed font-black shadow-[3px_3px_0px_#111116] -translate-y-0.5"
                      : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container shadow-[2px_2px_0px_#111116] active:translate-x-[1px] active:translate-y-[1px]"
                  }`
                }
              >
                <span className="flex items-center gap-1.5 font-bold">
                  <span className="text-secondary font-black">&gt;</span>
                  <span>{item.label}</span>
                </span>
                <span className="font-mono text-[9px] opacity-70 tracking-widest font-bold">[EXEC]</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
});

export default Navbar;
