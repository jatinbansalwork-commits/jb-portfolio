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
          window.open(
            "https://itsjatin.framer.website/",
            "_blank",
            "noopener,noreferrer"
          );
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
        width: "100%",
        height: "100vh",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "24px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* NAME */}

        <h1
          style={{
            margin: 0,
            color: "#7A7A7A",
            fontSize: "92px",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-3px",

            textShadow: `
              2px 2px 0 #FFFFFF,
              4px 4px 0 #BDBDBD
            `,
          }}
        >
          Jatin Bansal
        </h1>

        {/* DESIGNATION */}

        <div
          style={{
            marginTop: "20px",
            marginBottom: "80px",

            color: "#8E8E8E",

            fontSize: "34px",
            fontWeight: 400,

            textShadow: `
              1px 1px 0 #FFFFFF
            `,
          }}
        >
          Product & Motion Designer
        </div>

        {/* MAIN BUTTON */}

        <button
          onClick={() => {
            playButtonSound();

            setTimeout(() => {
              window.location.href = "/ai-playground";
            }, 120);
          }}
          style={{
            background: "#E5E5E5",
            color: "#000000",

            fontSize: "42px",
            fontWeight: 400,

            whiteSpace: "nowrap",

            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "100px",
            paddingRight: "100px",

            borderTop: "12px solid #FFFFFF",
            borderLeft: "12px solid #FFFFFF",
            borderRight: "12px solid #7A7A7A",
            borderBottom: "12px solid #7A7A7A",

            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",

            boxSizing: "border-box",

            cursor: "pointer",

            minWidth: "720px",

            userSelect: "none",

            transition: "background 0.05s linear",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#DADADA";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#E5E5E5";

            e.currentTarget.style.borderTop = "12px solid #FFFFFF";
            e.currentTarget.style.borderLeft = "12px solid #FFFFFF";
            e.currentTarget.style.borderRight = "12px solid #7A7A7A";
            e.currentTarget.style.borderBottom = "12px solid #7A7A7A";

            e.currentTarget.style.paddingTop = "40px";
            e.currentTarget.style.paddingLeft = "100px";
            e.currentTarget.style.paddingBottom = "40px";
            e.currentTarget.style.paddingRight = "100px";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.background = "#CFCFCF";

            e.currentTarget.style.borderTop = "12px solid #7A7A7A";
            e.currentTarget.style.borderLeft = "12px solid #7A7A7A";
            e.currentTarget.style.borderRight = "12px solid #FFFFFF";
            e.currentTarget.style.borderBottom = "12px solid #FFFFFF";

            e.currentTarget.style.paddingTop = "44px";
            e.currentTarget.style.paddingLeft = "104px";

            e.currentTarget.style.paddingBottom = "36px";
            e.currentTarget.style.paddingRight = "96px";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.background = "#E5E5E5";

            e.currentTarget.style.borderTop = "12px solid #FFFFFF";
            e.currentTarget.style.borderLeft = "12px solid #FFFFFF";
            e.currentTarget.style.borderRight = "12px solid #7A7A7A";
            e.currentTarget.style.borderBottom = "12px solid #7A7A7A";

            e.currentTarget.style.paddingTop = "40px";
            e.currentTarget.style.paddingLeft = "100px";

            e.currentTarget.style.paddingBottom = "40px";
            e.currentTarget.style.paddingRight = "100px";
          }}
        >
          Push Button for AI Playground
        </button>

        {/* SPACEBAR */}

        <div
          style={{
            marginTop: "60px",

            color: "#9AA5B1",

            fontSize: "42px",
            fontWeight: 400,
          }}
        >
          or hit spacebar for portfolio
        </div>
      </div>
    </main>
  );
}