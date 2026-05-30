"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const PORTFOLIO_URL = "https://itsjatin.framer.website/";

  // Windows-style click sound
  const playClickSound = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as any).webkitAudioContext;

      const audioContext = new AudioContextClass();

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = "square";
      oscillator.frequency.value = 900;

      gainNode.gain.value = 0.04;

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();

      setTimeout(() => {
        oscillator.stop();
      }, 40);
    } catch (err) {
      console.log(err);
    }
  };

  // AI Playground Button
  const goToPlayground = () => {
    playClickSound();

    setTimeout(() => {
      router.push("/ai-playground");
    }, 120);
  };

  // Portfolio Link
  const goToPortfolio = () => {
    playClickSound();

    setTimeout(() => {
      window.location.href = PORTFOLIO_URL;
    }, 120);
  };

  // Spacebar Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isTyping) return;

      if (e.code === "Space") {
        e.preventDefault();
        goToPortfolio();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: "24px",

        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          textAlign: "center",
        }}
      >
        {/* NAME */}

        <h1
          style={{
            margin: 0,

            fontSize: "clamp(52px, 10vw, 96px)",
            fontWeight: 700,

            color: "#8A8A8A",

            textShadow: "4px 4px 0 #FFFFFF",

            lineHeight: 1,
          }}
        >
          Jatin Bansal
        </h1>

        {/* ROLE */}

        <p
          style={{
            marginTop: "20px",
            marginBottom: "90px",

            fontSize: "clamp(18px, 3vw, 28px)",

            color: "#8A8A8A",
          }}
        >
          Product & Motion Designer
        </p>

        {/* AI PLAYGROUND BUTTON */}

        <button
          onClick={goToPlayground}
          style={{
            background: "#E5E5E5",
            color: "#000000",

            fontSize: "clamp(20px, 4vw, 42px)",
            fontWeight: 400,
            lineHeight: "1",

            whiteSpace: "nowrap",

            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "32px",
            paddingRight: "32px",

            width: "100%",
            maxWidth: "720px",

            borderTop: "12px solid #FFFFFF",
            borderLeft: "12px solid #FFFFFF",
            borderRight: "12px solid #7A7A7A",
            borderBottom: "12px solid #7A7A7A",

            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            cursor: "pointer",
            userSelect: "none",

            outline: "none",
            appearance: "none",
            WebkitAppearance: "none",

            transition: "background 0.05s linear",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#D9D9D9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#E5E5E5";

            e.currentTarget.style.borderTop =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderLeft =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderRight =
              "12px solid #7A7A7A";
            e.currentTarget.style.borderBottom =
              "12px solid #7A7A7A";

            e.currentTarget.style.paddingTop = "40px";
            e.currentTarget.style.paddingLeft = "32px";
            e.currentTarget.style.paddingBottom = "40px";
            e.currentTarget.style.paddingRight = "32px";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.background = "#CFCFCF";

            e.currentTarget.style.borderTop =
              "12px solid #7A7A7A";
            e.currentTarget.style.borderLeft =
              "12px solid #7A7A7A";
            e.currentTarget.style.borderRight =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderBottom =
              "12px solid #FFFFFF";

            e.currentTarget.style.paddingTop = "44px";
            e.currentTarget.style.paddingLeft = "36px";
            e.currentTarget.style.paddingBottom = "36px";
            e.currentTarget.style.paddingRight = "28px";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.background = "#E5E5E5";

            e.currentTarget.style.borderTop =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderLeft =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderRight =
              "12px solid #7A7A7A";
            e.currentTarget.style.borderBottom =
              "12px solid #7A7A7A";

            e.currentTarget.style.paddingTop = "40px";
            e.currentTarget.style.paddingLeft = "32px";
            e.currentTarget.style.paddingBottom = "40px";
            e.currentTarget.style.paddingRight = "32px";
          }}
        >
          Push Button for AI Playground
        </button>

        {/* HINT */}

        <div
          style={{
            marginTop: "80px",
            fontSize: "clamp(18px, 3vw, 32px)",
            color: "#9AA3B0",
          }}
        >
          or hit spacebar for{" "}
          <span
            onClick={goToPortfolio}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            portfolio
          </span>
        </div>
      </div>
    </main>
  );
}