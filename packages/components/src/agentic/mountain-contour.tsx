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
        <svg
          ref={ref}
          viewBox="0 0 1200 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-slate-300 dark:text-slate-800"
          {...props}
        >
          {/* Base Contour Level 1 */}
          <path
            d="M0 310 C 200 310, 320 285, 480 250 C 600 220, 680 180, 800 240 C 940 300, 1050 310, 1200 310"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.35"
          />

          {/* Contour Level 2 */}
          <path
            d="M0 290 C 220 290, 360 250, 520 210 C 640 180, 720 140, 840 200 C 980 270, 1080 290, 1200 290"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.45"
          />

          {/* Contour Level 3 */}
          <path
            d="M60 270 C 260 270, 420 220, 560 170 C 640 140, 720 90, 820 160 C 920 230, 1020 270, 1140 270"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.55"
          />

          {/* Contour Level 4 - Ridge approach */}
          <path
            d="M180 240 C 340 240, 480 180, 600 130 C 680 95, 740 60, 820 120 C 890 180, 960 240, 1020 240"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.65"
          />

          {/* Ridge & Summit Pyramid Profile */}
          <path
            d="M320 210 L 520 110 L 600 45 L 680 95 L 860 210"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeOpacity="0.85"
          />

          {/* Topographic Elevation Tick Marks */}
          <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.4">
            <line x1="600" y1="45" x2="600" y2="35" />
            <line x1="520" y1="110" x2="520" y2="100" />
            <line x1="680" y1="95" x2="680" y2="85" />
          </g>

          {/* Summit Peak Marker */}
          {showPeak && (
            <g>
              <circle cx="600" cy="45" r="3" className="fill-alpine-500 stroke-white dark:stroke-slate-950" strokeWidth="1.5" />
              <text
                x="600"
                y="24"
                textAnchor="middle"
                className="fill-slate-600 dark:fill-slate-400 font-mono text-[11px] font-semibold tracking-wider"
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