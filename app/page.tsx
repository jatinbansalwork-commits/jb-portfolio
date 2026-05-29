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

  style={{

    width: "620px",
    height: "120px",
    margin: "0 auto",
    background: "#C0C0C0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    fontSize: "42px",
    fontWeight: 500,
    cursor: "pointer",

    borderTop: "8px solid #FFFFFF",
    borderLeft: "8px solid #FFFFFF",
    borderRight: "8px solid #7A7A7A",
    borderBottom: "8px solid #7A7A7A",
    boxShadow: "12px 12px 0 #8A8A8A",
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