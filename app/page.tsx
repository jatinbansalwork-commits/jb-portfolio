"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const playButtonSound = () => {
    try {
      const audio = new Audio("/click.wav");
      audio.volume = 0.5;
      audio.play();
    } catch (err) {
      console.log(err);
    }
  };

  const goToPlayground = () => {
    playButtonSound();

    setTimeout(() => {
      router.push("/ai-playground");
    }, 120);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;

      if (
        e.code === "Space" &&
        target.tagName !== "INPUT" &&
        target.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();

        playButtonSound();

        setTimeout(() => {
          router.push("/ai-playground");
        }, 120);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#E5E5E5",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

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

            textShadow: "3px 3px #FFFFFF",
          }}
        >
          Jatin Bansal
        </h1>

        {/* ROLE */}

        <p
          style={{
            marginTop: "20px",
            marginBottom: "100px",

            color: "#8A8A8A",

            fontSize: "32px",
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

        {/* HINT */}

        <p
          style={{
            marginTop: "100px",

            color: "#9AA3B0",

            fontSize: "32px",
          }}
        >
          or hit spacebar for portfolio
        </p>
      </div>
    </main>
  );
}