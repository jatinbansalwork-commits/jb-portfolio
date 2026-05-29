"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const goToPlayground = () => {
    router.push("/ai-playground");
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
        router.push("/ai-playground");
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
        <h1
          style={{
            margin: 0,
            fontSize: "84px",
            fontWeight: 700,
            color: "#8A8A8A",
            textShadow: "3px 3px #FFFFFF",
          }}
        >
          Jatin Bansal
        </h1>

        <p
          style={{
            marginTop: "20px",
            marginBottom: "80px",
            fontSize: "28px",
            color: "#8A8A8A",
          }}
        >
          Product & Motion Designer
        </p>

        <div
          onClick={goToPlayground}
          onMouseDown={(e) => {
            e.currentTarget.style.transform =
              "translate(6px,6px)";
            e.currentTarget.style.boxShadow =
              "4px 4px 0 #8A8A8A";

            e.currentTarget.style.borderTop =
              "8px solid #7A7A7A";
            e.currentTarget.style.borderLeft =
              "8px solid #7A7A7A";
            e.currentTarget.style.borderRight =
              "8px solid #FFFFFF";
            e.currentTarget.style.borderBottom =
              "8px solid #FFFFFF";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform =
              "translate(0px,0px)";
            e.currentTarget.style.boxShadow =
              "10px 10px 0 #8A8A8A";

            e.currentTarget.style.borderTop =
              "8px solid #FFFFFF";
            e.currentTarget.style.borderLeft =
              "8px solid #FFFFFF";
            e.currentTarget.style.borderRight =
              "8px solid #7A7A7A";
            e.currentTarget.style.borderBottom =
              "8px solid #7A7A7A";
          }}
          style={{
            width: "460px",
            height: "74px",

            margin: "0 auto",

            background: "#C0C0C0",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "18px",
            fontWeight: 500,
            color: "#000",

            cursor: "pointer",

            borderTop: "3px solid #FFFFFF",
            borderLeft: "3px solid #FFFFFF",
            borderRight: "3px solid #7A7A7A",
            borderBottom: "3px solid #7A7A7A",


            userSelect: "none",
          }}
        >
          Push Button for AI Playground
        </div>

        <p
          style={{
            marginTop: "70px",
            fontSize: "24px",
            color: "#9AA3B0",
          }}
        >
          or press SPACE to explore the portfolio
        </p>
      </div>
    </main>
  );
}