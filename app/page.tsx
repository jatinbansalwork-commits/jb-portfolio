"use client";

import { useEffect, useRef } from "react";

export default function HomePage() {
  const triggered = useRef(false);

  const openPortfolio = () => {
    if (triggered.current) return;

    triggered.current = true;

    try {
      const audio = new Audio("/sounds/space.mp3");
      audio.volume = 0.7;
      audio.play().catch(() => {});
    } catch {}

    window.location.href = "https://itsjatin.framer.website/";
  };

  const openPlayground = () => {
    try {
      const audio = new Audio("/sounds/button.mp3");
      audio.volume = 0.7;
      audio.play().catch(() => {});
    } catch {}

    window.location.href = "/ai-playground";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;

      e.preventDefault();

      openPortfolio();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#E5E5E5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "100%",
          maxWidth: "900px",
          padding: "24px",
        }}
      >
        {/* NAME */}

        <h1
          style={{
            margin: 0,
            fontSize: "96px",
            fontWeight: 700,
            color: "#808080",
            textShadow: "4px 4px 0 #ffffff",
            lineHeight: 1,
          }}
        >
          Jatin Bansal
        </h1>

        {/* ROLE */}

        <p
          style={{
            marginTop: "24px",
            marginBottom: "80px",
            fontSize: "32px",
            color: "#909090",
          }}
        >
          Product & Motion Designer
        </p>

        {/* BUTTON */}

        <button
          onClick={openPlayground}
          style={{
            width: "640px",
            maxWidth: "100%",
            height: "120px",
            background: "#D8D8D8",
            fontSize: "32px",
            cursor: "pointer",
            border: "none",

            boxShadow: `
              inset 4px 4px 0 #ffffff,
              inset -4px -4px 0 #7a7a7a,
              8px 8px 0 #7a7a7a
            `,
          }}
        >
          Push Button for AI Playground
        </button>

        {/* SPACEBAR */}

        <p
          style={{
            marginTop: "72px",
            fontSize: "28px",
            color: "#9AA3B2",
          }}
        >
          or hit spacebar for portfolio
        </p>
      </div>
    </main>
  );
}