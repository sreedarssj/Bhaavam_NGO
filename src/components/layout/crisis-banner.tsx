"use client";

import { useState } from "react";
import { Phone, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { crisisHelplines } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Sticky crisis intervention bar — highly visible emergency helplines.
 * Collapsible on mobile to save space while keeping access one tap away.
 */
export function CrisisBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      role="region"
      aria-label="Crisis support helplines"
      className="border-b border-sage-600/30 bg-sage-600 text-white shadow-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 py-2 sm:flex-row sm:items-center sm:justify-between sm:py-2.5">
          <div className="flex items-center gap-2 text-sm font-medium">
            <AlertCircle
              className="h-4 w-4 shrink-0"
              aria-hidden
            />
            <span>
              <strong className="font-semibold">Need help right now?</strong>
              <span className="hidden sm:inline">
                {" "}
                — Free, confidential crisis lines:
              </span>
            </span>
          </div>

          {/* Desktop: always show helplines */}
          <ul
            className="hidden flex-wrap items-center gap-x-4 gap-y-1 sm:flex"
            aria-label="Emergency phone numbers"
          >
            {crisisHelplines.map((line) => (
              <li key={line.name}>
                <a
                  href={line.tel}
                  className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium underline-offset-2 transition-colors hover:bg-white/15 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={`Call ${line.name} at ${line.number}`}
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden />
                  <span>{line.name}:</span>
                  <span className="font-semibold">{line.number}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile: toggle to expand */}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm font-medium sm:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-expanded={expanded}
            aria-controls="crisis-helplines-mobile"
          >
            <span>View crisis helplines</span>
            {expanded ? (
              <ChevronUp className="h-4 w-4" aria-hidden />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>

        <ul
          id="crisis-helplines-mobile"
          className={cn(
            "space-y-2 border-t border-white/20 pb-3 pt-2 sm:hidden",
            !expanded && "hidden"
          )}
        >
          {crisisHelplines.map((line) => (
            <li key={line.name}>
              <a
                href={line.tel}
                className="flex flex-col rounded-lg bg-white/10 px-3 py-2 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="font-semibold">{line.name}</span>
                <span className="text-lg font-bold tracking-wide">
                  {line.number}
                </span>
                <span className="text-xs text-white/80">{line.hours}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
