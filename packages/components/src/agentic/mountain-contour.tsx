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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[220px] bg-alpine-500/10 blur-[90px] rounded-full pointer-events-none" />

        <svg
          ref={ref}
          viewBox="0 0 1200 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-auto text-slate-400 dark:text-slate-400"
          {...props}
        >
          <defs>
            <linearGradient id="summitGrad" x1="600" y1="40" x2="600" y2="340" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.00" />
            </linearGradient>
            <linearGradient id="ridgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Shaded mountain fill beneath the ridge */}
          <polygon
            points="320,240 520,130 600,50 680,115 860,240 1020,290 1200,340 0,340 180,290"
            fill="url(#summitGrad)"
          />

          {/* Contour Line 1 - Base foot */}
          <path
            d="M0 340 C 200 340, 320 310, 480 280 C 600 250, 680 210, 800 270 C 940 330, 1050 340, 1200 340"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />

          {/* Contour Line 2 - Lower approaches */}
          <path
            d="M0 315 C 220 315, 360 275, 520 235 C 640 205, 720 165, 840 225 C 980 295, 1080 315, 1200 315"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />

          {/* Contour Line 3 - Mid flank */}
          <path
            d="M60 290 C 260 290, 420 240, 560 190 C 640 160, 720 110, 820 180 C 920 250, 1020 290, 1140 290"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />

          {/* Contour Line 4 - High ridge approach */}
          <path
            d="M180 260 C 340 260, 480 200, 600 150 C 680 115, 740 80, 820 140 C 890 200, 960 260, 1020 260"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeOpacity="0.70"
          />

          {/* Signature Ridge & Pyramid Peak (Accent Gradient Line) */}
          <path
            d="M320 240 L 520 130 L 600 50 L 680 115 L 860 240"
            stroke="url(#ridgeGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Topographic Altitude Marks */}
          <g stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5">
            <line x1="600" y1="50" x2="600" y2="38" />
            <line x1="520" y1="130" x2="520" y2="118" />
            <line x1="680" y1="115" x2="680" y2="103" />
          </g>

          {/* Peak Telemetry Marker */}
          {showPeak && (
            <g>
              {/* Outer pulsing ring */}
              <circle
                cx="600"
                cy="50"
                r="7"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              {/* Core beacon dot */}
              <circle
                cx="600"
                cy="50"
                r="3.5"
                className="fill-alpine-400 stroke-[#09090B]"
                strokeWidth="1.5"
              />
              {/* Altitude Tag */}
              <rect
                x="545"
                y="14"
                width="110"
                height="22"
                rx="6"
                className="fill-[#09090B]/90 stroke-white/20"
                strokeWidth="1"
              />
              <text
                x="600"
                y="29"
                textAnchor="middle"
                className="fill-white font-mono text-[11px] font-semibold tracking-wider"
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