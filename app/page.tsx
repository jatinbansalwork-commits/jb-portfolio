"use client";

import { useEffect } from "react";

export default function HomePage() {
  /* ---------------- SOUNDS ---------------- */

  const playButtonSound = () => {
    const audio = new Audio("/sounds/button.mp3");
    audio.volume = 1;
    audio.play();
  };

  const playClickSound = () => {
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 1;
    audio.play();
  };

  const playSpaceSound = () => {
    const audio = new Audio("/sounds/space.mp3");
    audio.volume = 1;
    audio.play();
  };

  /* ---------------- SPACEBAR ---------------- */

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

        fontFamily:
          '"MS Sans Serif", Tahoma, Verdana, Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          justifyContent: "center",

          textAlign: "center",

          gap: "48px",
        }}
      >
        {/* TITLE */}

        <div>
          <h1
            style={{
              margin: 0,

              fontSize: "86px",
              fontWeight: 700,

              letterSpacing: "-3px",

              color: "#808080",

              textShadow: `
                1px 1px 0 #FFFFFF,
                -1px -1px 0 #808080
              `,
            }}
          >
            Jatin Bansal
          </h1>

          <div
            style={{
              marginTop: "14px",

              fontSize: "28px",
              fontWeight: 400,

              color: "#7A7A7A",

              textShadow: `
                1px 1px 0 #FFFFFF
              `,
            }}
          >
            Product & Motion Designer
          </div>
        </div>

        {/* AI PLAYGROUND BUTTON */}

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
            lineHeight: "1",

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
            userSelect: "none",

            outline: "none",
            appearance: "none",
            WebkitAppearance: "none",

            minWidth: "720px",

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
            e.currentTarget.style.paddingLeft = "100px";
            e.currentTarget.style.paddingBottom = "40px";
            e.currentTarget.style.paddingRight = "100px";
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
            e.currentTarget.style.paddingLeft = "104px";

            e.currentTarget.style.paddingBottom = "36px";
            e.currentTarget.style.paddingRight = "96px";
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
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#919EAB",
              fontSize: "42px",
              fontWeight: 400,
            }}
          >
            or hit spacebar for portfolio
          </div>

          <div
            style={{
              color: "#B5B5B5",
              fontSize: "16px",
            }}
          >
            Opens in a new tab
          </div>
        </div>
      </div>
    </main>
  );
}