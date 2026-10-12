"use client";

import { useState } from "react";
import { WorkflowSplash, type WorkflowSplashProps } from "./WorkflowSplash";

/**
 * Drop-in mount for the root layout. Holds the "splash complete" state so the
 * layout itself can stay a Server Component:
 *
 *   <body>
 *     <WorkflowSplashGate />
 *     {children}
 *   </body>
 *
 * Pass `ready={false}` while the app initialises and `ready` once it is done
 * if you want the splash to hold or accelerate; otherwise it plays in full.
 */
export function WorkflowSplashGate({
  onComplete,
  ...props
}: Omit<WorkflowSplashProps, "show">) {
  const [complete, setComplete] = useState(false);

  return (
    <WorkflowSplash
      {...props}
      show={!complete}
      onComplete={() => {
        setComplete(true);
        onComplete?.();
      }}
    />
  );
}
