# Workflow splash screen

Real frontend animation (SVG + GSAP), about 5.5s end to end. Brand geometry is
traced from your supplied PNGs into vector paths, so the logo is not redesigned.

## Copy into your Next.js app
    components/splash/*          (WorkflowSplash, WorkflowSplashGate, WorkflowMark,
                                  WorkflowPaths, WorkflowModules, WorkflowWordmark,
                                  splash-layout.ts, brand-paths.ts)
    hooks/useWorkflowSplashAnimation.ts
    styles/workflow-splash.css
    public/brand/workflow-mark.svg, workflow-logo.svg, workflow-logo-dark.svg
    npm install gsap

## Mount (app/layout.tsx, inside <body>, before {children})
    import { WorkflowSplashGate } from "@/components/splash/WorkflowSplashGate";
    <WorkflowSplashGate />

## Props (WorkflowSplash / WorkflowSplashGate)
    show, onComplete, minimumDuration (ms, default 2400), skipAnimation,
    className, plus:
    ready        omit = play in full; false = hold final lockup; true = leave
                 (accelerates if early, never before minimumDuration)
    maxDuration  hard ceiling, default 12000 ms; the splash never traps the user

## Behaviour
- Reduced motion or skipAnimation: static lockup, brief fade, then leaves.
- Tap/click or Escape hurries the sequence.
- aria-hidden, position: fixed (no layout shift), never loops, no-JS failsafe.
- Fonts: the tagline uses the system/Montserrat stack; the wordmark is vector.
