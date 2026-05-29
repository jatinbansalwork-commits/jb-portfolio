"use client";

import { useEffect } from "react";

export default function HomePage() {
  const playButtonSound = () => {
    const audio = new Audio("/sounds/button.mp3");
    audio.volume = 1;
    audio.play();
  };

  const playSpaceSound = () => {
    const audio = new Audio("/sounds/space.mp3");
    audio.volume = 1;
    audio.play();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();

        playSpaceSound();

        setTimeout(() => {
          const link = document.createElement("a");

          link.href = "https://itsjatin.framer.website/";
          link.target = "_blank";
          link.rel = "noopener noreferrer";

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 120);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        background: "#F0F0F0",

        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",

        padding: "24px",

        boxSizing: "border-box",

        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h1
          style={{
            margin: 0,

            fontSize: "88px",
            fontWeight: 700,

            color: "#6D6D6D",

            textShadow:
              "2px 2px 0 #FFFFFF, 4px 4px 0 #808080",
          }}
        >
          Jatin Bansal
        </h1>

        <div
          style={{
            marginTop: "20px",

            fontSize: "30px",

            color: "#8A8A8A",
          }}
        >
          Product & Motion Designer
        </div>
      </div>

      <button
        onClick={() => {
          playButtonSound();

          setTimeout(() => {
            window.location.href = "/ai-playground";
          }, 120);
        }}
        style={{
          background: "#E5E5E5",

          color: "#000",

          fontSize: "42px",

          padding: "40px 100px",

          minWidth: "620px",

          borderTop: "12px solid #FFFFFF",
          borderLeft: "12px solid #FFFFFF",
          borderRight: "12px solid #7A7A7A",
          borderBottom: "12px solid #7A7A7A",

          cursor: "pointer",
        }}
      >
        Launch AI Playground
      </button>

      <div
        style={{
          marginTop: "50px",

          color: "#919EAB",

          fontSize: "42px",
        }}
      >
        or hit spacebar for portfolio
      </div>
    </main>
  );
}