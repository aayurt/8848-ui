"use client";

import * as React from "react";
import { cn } from "@aayurt/8848-ui-utils";

export interface MountainContourProps extends React.SVGAttributes<SVGSVGElement> {
  density?: "sparse" | "normal" | "dense";
  elevationLabel?: string;
  showPeak?: boolean;
}

export const MountainContour = React.forwardRef<SVGSVGElement, MountainContourProps>(
  ({ className, density: _density = "normal", elevationLabel = "8,848 m", showPeak = true, ...props }, ref) => {
    return (
      <div className={cn("relative w-full overflow-hidden select-none pointer-events-none", className)}>
        {/* Subtle radial ambient mountain glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[220px] bg-alpine-500/10 dark:bg-alpine-500/15 blur-[90px] rounded-full pointer-events-none transition-all duration-700" />

        <svg
          ref={ref}
          viewBox="0 0 1200 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-auto text-slate-300 dark:text-slate-500 transition-colors duration-500"
          {...props}
        >
          <defs>
            <style>{`
              @keyframes cometFly {
                0% {
                  transform: translate(0, 0) scale(0.45);
                  opacity: 0;
                }
                15% {
                  opacity: 0.6;
                }
                55% {
                  transform: translate(140px, 80px) scale(0.75);
                  opacity: 0.5;
                }
                100% {
                  transform: translate(220px, 130px) scale(0.6);
                  opacity: 0;
                }
              }

              @keyframes starTwinkle {
                0%, 100% { opacity: 0.25; transform: scale(0.85); }
                50% { opacity: 0.95; transform: scale(1.2); }
              }

              @keyframes sunPulse {
                0%, 100% { transform: scale(1); opacity: 0.35; }
                50% { transform: scale(1.08); opacity: 0.65; }
              }

              .anim-comet {
                animation: cometFly 8.5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
              }

              .anim-star-1 { animation: starTwinkle 3.2s ease-in-out infinite; }
              .anim-star-2 { animation: starTwinkle 4.5s ease-in-out infinite 1.2s; }
              .anim-star-3 { animation: starTwinkle 2.8s ease-in-out infinite 0.7s; }
              .anim-star-4 { animation: starTwinkle 3.9s ease-in-out infinite 2.1s; }
              .anim-star-5 { animation: starTwinkle 4.1s ease-in-out infinite 1.6s; }

              .anim-sun-halo {
                transform-origin: 950px 85px;
                animation: sunPulse 4s ease-in-out infinite;
              }
            `}</style>

            {/* Shaded mountain gradients */}
            <linearGradient id="summitGrad" x1="600" y1="50" x2="600" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.22" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.00" />
            </linearGradient>

            <linearGradient id="ridgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
            </linearGradient>

            {/* Subtle small comet tail gradient */}
            <linearGradient id="cometTail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.8" />
            </linearGradient>

            {/* Sun flare gradient */}
            <radialGradient id="sunFlare" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="35%" stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>

            {/* Moon glow gradient */}
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ========================================================= */}
          {/* LAYER 1: DEEP SKY BACKGROUND (COMET & STARS)               */}
          {/* (Rendered behind mountain polygons so ridges occlude them) */}
          {/* ========================================================= */}

          {/* Shooting Comet (Small & deep in background) */}
          <g className="transition-opacity duration-700 opacity-0 dark:opacity-75 pointer-events-none">
            <g className="anim-comet" style={{ transformOrigin: "180px 25px" }}>
              <line
                x1="180"
                y1="25"
                x2="225"
                y2="52"
                stroke="url(#cometTail)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="225" cy="52" r="1.3" fill="#f0f9ff" className="drop-shadow-[0_0_4px_#38bdf8]" />
            </g>
          </g>

          {/* Twinkling Himalayan Stars (Deep sky layer) */}
          <g className="transition-opacity duration-700 opacity-0 dark:opacity-100 pointer-events-none fill-sky-200">
            {/* Star 1 (High North) */}
            <g className="anim-star-1" style={{ transformOrigin: "420px 48px" }}>
              <polygon points="420,44 421.5,47.5 425,48 421.5,49.5 420,53 418.5,49.5 415,48 418.5,47.5" />
            </g>

            {/* Star 2 (North Mid) */}
            <g className="anim-star-2" style={{ transformOrigin: "520px 35px" }}>
              <polygon points="520,32 521,34.5 523.5,35 521,36.5 520,39 519,36.5 516.5,35 519,34.5" />
            </g>

            {/* Star 3 (Mid West) */}
            <g className="anim-star-3" style={{ transformOrigin: "150px 75px" }}>
              <circle cx="150" cy="75" r="1.4" />
            </g>

            {/* Star 4 (Above South Col) */}
            <g className="anim-star-4" style={{ transformOrigin: "730px 85px" }}>
              <circle cx="730" cy="85" r="1.2" />
            </g>

            {/* Star 5 (Far West) */}
            <g className="anim-star-5" style={{ transformOrigin: "80px 110px" }}>
              <circle cx="80" cy="110" r="1.5" />
            </g>
          </g>

          {/* ========================================================= */}
          {/* LAYER 2: CELESTIAL BODIES (SUN & MOON AT SAME RIGHT SIDE)  */}
          {/* ========================================================= */}

          {/* 1. SUN (Light Mode: Centered at 950px, 85px) */}
          <g className="transition-all duration-700 ease-out transform opacity-100 translate-y-0 scale-100 dark:opacity-0 dark:translate-y-10 dark:scale-90 pointer-events-none">
            {/* Ambient Sun Halo */}
            <circle cx="950" cy="85" r="50" fill="url(#sunFlare)" className="anim-sun-halo" />

            {/* Sun Core */}
            <circle cx="950" cy="85" r="20" className="fill-amber-400 stroke-amber-200" strokeWidth="2" />

            {/* Radiant Sun Rays */}
            <g stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.75">
              <line x1="950" y1="55" x2="950" y2="45" />
              <line x1="950" y1="115" x2="950" y2="125" />
              <line x1="920" y1="85" x2="910" y2="85" />
              <line x1="980" y1="85" x2="990" y2="85" />
              <line x1="929" y1="64" x2="921" y2="56" />
              <line x1="971" y1="106" x2="979" y2="114" />
              <line x1="929" y1="106" x2="921" y2="114" />
              <line x1="971" y1="64" x2="979" y2="56" />
            </g>
          </g>

          {/* 2. MOON (Dark Mode: Positioned at exactly the SAME position: 950px, 85px) */}
          <g className="transition-all duration-700 ease-out transform opacity-0 -translate-y-10 scale-90 dark:opacity-100 dark:translate-y-0 dark:scale-100 pointer-events-none">
            {/* Moon Ambient Halo */}
            <circle cx="950" cy="85" r="48" fill="url(#moonGlow)" />

            {/* Crescent Moon matching the 950, 85 coordinate */}
            <path
              d="M956 64 C944 67 935 77 935 89 C935 103 946 114 960 114 C966 114 972 112 976 109 C964 112 952 103 952 89 C952 78 960 68 971 65 C966 64 961 63 956 64 Z"
              fill="#e0f2fe"
              className="drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]"
            />
          </g>

          {/* ========================================================= */}
          {/* LAYER 3: FOREGROUND MOUNTAIN TOPOGRAPHY & RIDGE LINES     */}
          {/* ========================================================= */}

          {/* Shaded mountain fill beneath the ridge */}
          <polygon
            points="320,250 520,135 600,55 680,120 860,250 1020,300 1200,350 0,350 180,300"
            fill="url(#summitGrad)"
          />

          {/* Contour Line 1 - Base foot */}
          <path
            d="M0 350 C 200 350, 320 320, 480 290 C 600 260, 680 220, 800 280 C 940 340, 1050 350, 1200 350"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />

          {/* Contour Line 2 - Lower approaches */}
          <path
            d="M0 325 C 220 325, 360 285, 520 245 C 640 215, 720 175, 840 235 C 980 305, 1080 325, 1200 325"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />

          {/* Contour Line 3 - Mid flank */}
          <path
            d="M60 300 C 260 300, 420 250, 560 200 C 640 170, 720 120, 820 190 C 920 260, 1020 300, 1140 300"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeOpacity="0.6"
          />

          {/* Contour Line 4 - High ridge approach */}
          <path
            d="M180 270 C 340 270, 480 210, 600 160 C 680 125, 740 90, 820 150 C 890 210, 960 270, 1020 270"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeOpacity="0.75"
          />

          {/* Signature Ridge & Pyramid Peak (Accent Gradient Line) */}
          <path
            d="M320 250 L 520 135 L 600 55 L 680 120 L 860 250"
            stroke="url(#ridgeGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Topographic Altitude Marks */}
          <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5">
            <line x1="600" y1="55" x2="600" y2="43" />
            <line x1="520" y1="135" x2="520" y2="123" />
            <line x1="680" y1="120" x2="680" y2="108" />
          </g>

          {/* Peak Telemetry Marker */}
          {showPeak && (
            <g>
              {/* Outer pulsing ring */}
              <circle
                cx="600"
                cy="55"
                r="7"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeOpacity="0.7"
              />
              {/* Core beacon dot */}
              <circle
                cx="600"
                cy="55"
                r="3.5"
                className="fill-alpine-500 dark:fill-alpine-400 stroke-white dark:stroke-[#09090B]"
                strokeWidth="1.5"
              />
              {/* Altitude Tag */}
              <rect
                x="545"
                y="18"
                width="110"
                height="22"
                rx="6"
                className="fill-white/90 dark:fill-[#09090B]/90 stroke-slate-200 dark:stroke-white/20 shadow-sm"
                strokeWidth="1"
              />
              <text
                x="600"
                y="33"
                textAnchor="middle"
                className="fill-slate-900 dark:fill-white font-mono text-[11px] font-semibold tracking-wider"
              >
                ▲ {elevationLabel}
              </text>
            </g>
          )}
        </svg>
      </div>
    );
  }
);
MountainContour.displayName = "MountainContour";