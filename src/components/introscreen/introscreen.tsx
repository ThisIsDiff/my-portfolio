'use client';

import { useEffect, useState } from 'react';
interface IntroScreenProps {
  name?: string;
  role?: string;
  holdDuration?: number;
  fadeDuration?: number;
}
 
export default function IntroScreen({
  name = "Your Name",
  role = "Cloud & DevOps · Software Developer",
  holdDuration = 2400,
  fadeDuration = 900,
}: IntroScreenProps) {
  const [phase, setPhase] = useState<"intro" | "fading" | "done">("intro");
  const [visibleChars, setVisibleChars] = useState(0);
  const [showRole, setShowRole] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [barWidth, setBarWidth] = useState("0%");
 
  useEffect(() => {
    const charDelay = 60;
    const timers: ReturnType<typeof setTimeout>[] = [];
 
    // Reveal name char by char
    name.split("").forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleChars(i + 1), 300 + i * charDelay)
      );
    });
 
    const afterName = 300 + name.length * charDelay;
 
    timers.push(setTimeout(() => setShowLine(true), afterName + 80));
    timers.push(setTimeout(() => setShowRole(true), afterName + 260));
 
    // Start loading bar right away
    timers.push(setTimeout(() => setBarWidth("100%"), 50));
 
    // Fade out
    timers.push(setTimeout(() => setPhase("fading"), holdDuration));
    timers.push(setTimeout(() => setPhase("done"), holdDuration + fadeDuration));
 
    return () => timers.forEach(clearTimeout);
  }, [name, holdDuration, fadeDuration]);
 
  if (phase === "done") return null;
 
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#050505",
        opacity: phase === "fading" ? 0 : 1,
        transition: `opacity ${fadeDuration}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)",
        }}
      />
 
      {/* Corner brackets */}
      {(["top-6 left-6 border-t border-l", "top-6 right-6 border-t border-r", "bottom-6 left-6 border-b border-l", "bottom-6 right-6 border-b border-r"] as const).map((cls, i) => (
        <div
          key={i}
          className={`absolute w-7 h-7 ${cls}`}
          style={{ borderColor: "rgba(255,255,255,0.18)" }}
        />
      ))}
 
      {/* Center content */}
      <div className="relative z-10 text-center px-8">
 
        {/* Year label */}
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.22)",
            marginBottom: "28px",
            textTransform: "uppercase",
            opacity: showRole ? 1 : 0,
            transition: "opacity 700ms",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Portfolio · {new Date().getFullYear()}
        </div>
 
        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: 0,
            lineHeight: 1,
            fontFamily: "'Georgia', 'Times New Roman', serif",
          }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              style={{
                display: char === " " ? "inline" : "inline-block",
                opacity: i < visibleChars ? 1 : 0,
                transform: i < visibleChars ? "translateY(0px)" : "translateY(14px)",
                transition: "opacity 220ms ease, transform 350ms cubic-bezier(0.34, 1.4, 0.64, 1)",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {/* Blinking cursor */}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "0.75em",
              backgroundColor: "rgba(255,255,255,0.55)",
              marginLeft: "6px",
              verticalAlign: "middle",
              animation: "cur 1s step-end infinite",
              opacity: visibleChars < name.length ? 1 : 0,
              transition: "opacity 300ms",
            }}
          />
        </h1>
 
        {/* Divider line */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.12)",
            marginTop: "22px",
            marginBottom: "18px",
            width: showLine ? "100%" : "0%",
            transition: "width 700ms cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />
 
        {/* Role */}
        <p
          style={{
            fontSize: "clamp(0.6rem, 1.4vw, 0.72rem)",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.38)",
            margin: 0,
            textTransform: "uppercase",
            fontFamily: "'Courier New', monospace",
            opacity: showRole ? 1 : 0,
            transform: showRole ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          {role}
        </p>
      </div>
 
      {/* Progress bar at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.35)",
            width: barWidth,
            transition: `width ${holdDuration - 50}ms linear`,
          }}
        />
      </div>
 
      <style>{`
        @keyframes cur {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
 