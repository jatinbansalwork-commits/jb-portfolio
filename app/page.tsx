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

  // Button Navigation
  const goToPlayground = () => {
    playClickSound();

    setTimeout(() => {
      router.push("/ai-playground");
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

        playClickSound();

        setTimeout(() => {
          window.location.href = PORTFOLIO_URL;
        }, 120);
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
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        {/* NAME */}

        <h1
          style={{
            margin: 0,
            fontSize: "96px",
            fontWeight: 700,
            color: "#8A8A8A",
            textShadow: "4px 4px 0 #FFFFFF",
          }}
        >
          Jatin Bansal
        </h1>

        {/* ROLE */}

        <p
          style={{
            marginTop: "20px",
            marginBottom: "90px",
            fontSize: "28px",
            color: "#8A8A8A",
          }}
        >
          Product & Motion Designer
        </p>

        {/* PLAYGROUND BUTTON */}

        <button
          onClick={goToPlayground}
          style={{
            background: "#E5E5E5",
            color: "#000",

            fontSize: "42px",
            fontWeight: 400,

            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "100px",
            paddingRight: "100px",

            minWidth: "720px",

            borderTop: "12px solid #FFFFFF",
            borderLeft: "12px solid #FFFFFF",
            borderRight: "12px solid #7A7A7A",
            borderBottom: "12px solid #7A7A7A",

            cursor: "pointer",

            appearance: "none",
            WebkitAppearance: "none",

            userSelect: "none",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.borderTop =
              "12px solid #7A7A7A";
            e.currentTarget.style.borderLeft =
              "12px solid #7A7A7A";
            e.currentTarget.style.borderRight =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderBottom =
              "12px solid #FFFFFF";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.borderTop =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderLeft =
              "12px solid #FFFFFF";
            e.currentTarget.style.borderRight =
              "12px solid #7A7A7A";
            e.currentTarget.style.borderBottom =
              "12px solid #7A7A7A";
          }}
        >
          Push Button for AI Playground
        </button>

        {/* HINT */}

        <p
          style={{
            marginTop: "80px",
            fontSize: "32px",
            color: "#9AA3B0",
          }}
        >
          or hit spacebar for portfolio
        </p>
      </div>
    </main>
  );
}