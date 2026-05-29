"use client";

import Image from "next/image";

export default function AIPlaygroundPage() {
  const playClickSound = () => {
    const audio = new Audio("/sounds/button.mp3");
    audio.volume = 1;
    audio.play();
  };

  const projects = [
    {
      title: "SUPER OPINION BROS",
      subtitle:
        "A chaotic multiplayer opinion battle where hot takes decide your fate.",
      image: "/thumbnails/super-opinion-bros.png",
      url: "https://super-opinion-bros.vercel.app/",
    },
    {
      title: "LOCK-IN POLICE",
      subtitle:
        "AI catches you touching your phone and tries to force productivity.",
      image: "/thumbnails/lock_in_police.png",
      url: "https://lock-in-police.vercel.app/",
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",

        background: "#F0F0F0",

        padding: "60px 24px 120px",

        boxSizing: "border-box",

        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            background: "#000080",

            color: "#FFF",

            padding: "12px 16px",

            display: "flex",
            justifyContent: "space-between",

            borderTop: "2px solid #C0C0C0",
            borderLeft: "2px solid #C0C0C0",
            borderRight: "2px solid #000",
            borderBottom: "2px solid #000",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            AI_PLAYGROUND.EXE
          </span>

          <span
            style={{
              fontSize: "18px",
            }}
          >
            Version 1.0
          </span>
        </div>

        {/* INTRO */}

        <div
          style={{
            textAlign: "center",

            marginTop: "50px",
            marginBottom: "60px",

            color: "#666",

            fontSize: "22px",
            lineHeight: 1.7,
          }}
        >
          A collection of experiments, games,
          AI prototypes and internet ideas.
        </div>

        {/* PROJECTS */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: "#C0C0C0",

                padding: "18px",

                borderTop: "4px solid #FFF",
                borderLeft: "4px solid #FFF",
                borderRight: "4px solid #7A7A7A",
                borderBottom: "4px solid #7A7A7A",
              }}
            >
              <div
                style={{
                  background: "#000080",

                  color: "#FFF",

                  padding: "10px 12px",

                  fontSize: "18px",
                  fontWeight: 700,

                  marginBottom: "20px",
                }}
              >
                {project.title}.exe
              </div>

              <h2
                style={{
                  margin: 0,

                  fontSize: "42px",

                  color: "#444",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: "#666",

                  marginTop: "10px",
                  marginBottom: "20px",

                  fontSize: "20px",
                }}
              >
                {project.subtitle}
              </p>

              {/* FIXED IMAGE RATIO */}

              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 10",

                  position: "relative",

                  background: "#FFF",

                  borderTop: "3px solid #7A7A7A",
                  borderLeft: "3px solid #7A7A7A",
                  borderRight: "3px solid #FFF",
                  borderBottom: "3px solid #FFF",

                  overflow: "hidden",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: "20px",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  Internet Experiment
                </span>

                <button
                  onClick={() => {
                    playClickSound();

                    setTimeout(() => {
                      window.open(
                        project.url,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }, 120);
                  }}
                  style={{
                    background: "#C0C0C0",

                    padding: "12px 28px",

                    fontSize: "18px",

                    cursor: "pointer",

                    borderTop: "3px solid #FFF",
                    borderLeft: "3px solid #FFF",
                    borderRight: "3px solid #7A7A7A",
                    borderBottom: "3px solid #7A7A7A",
                  }}
                >
                  Launch →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            textAlign: "center",

            marginTop: "80px",
          }}
        >
          <a
            href="/"
            style={{
              color: "#666",
              fontSize: "20px",
            }}
          >
            ← Back Home
          </a>
        </div>
      </div>
    </main>
  );
}