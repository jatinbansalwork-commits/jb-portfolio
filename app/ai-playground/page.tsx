"use client";

import Image from "next/image";

export default function AIPlaygroundPage() {
  const projects = [
    {
      title: "SUPER OPINION BROS",
      subtitle: "Multiplayer debate game.",
      image: "/thumbnails/super-opinion-bros.png",
      url: "https://super-opinion-bros.vercel.app/",
    },
    {
      title: "LOCK-IN POLICE",
      subtitle: "Phone addiction intervention.",
      image: "/thumbnails/lock_in_police.png",
      url: "https://lock-in-police.vercel.app/",
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#FFFFFF",
        padding: "48px 24px 120px",
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
        {/* WINDOW HEADER */}

        <div
          style={{
            background: "#000080",
            color: "#FFFFFF",
            padding: "10px 14px",

            fontSize: "28px",
            fontWeight: 700,

            borderTop: "2px solid #C0C0C0",
            borderLeft: "2px solid #C0C0C0",
            borderRight: "2px solid #000000",
            borderBottom: "2px solid #000000",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>AI Playground</span>

          <span
            style={{
              fontSize: "18px",
              opacity: 0.9,
            }}
          >
            Jatin Bansal
          </span>
        </div>

        {/* INTRO */}

        <div
          style={{
            marginTop: "40px",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              color: "#666666",
              lineHeight: 1.6,
            }}
          >
            A collection of experiments, games,
            AI prototypes and internet ideas.
          </div>
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

                borderTop: "4px solid #FFFFFF",
                borderLeft: "4px solid #FFFFFF",
                borderRight: "4px solid #7A7A7A",
                borderBottom: "4px solid #7A7A7A",

                padding: "20px",
              }}
            >
              {/* PROJECT HEADER */}

              <div
                style={{
                  background: "#000080",
                  color: "#FFFFFF",

                  padding: "8px 12px",

                  fontSize: "18px",
                  fontWeight: 700,

                  marginBottom: "20px",
                }}
              >
                {project.title}.exe
              </div>

              {/* PROJECT TITLE */}

              <h2
                style={{
                  margin: 0,
                  color: "#3F3F3F",
                  fontSize: "42px",
                  fontWeight: 700,
                }}
              >
                {project.title}
              </h2>

              {/* SUBTITLE */}

              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "24px",

                  color: "#6F6F6F",

                  fontSize: "20px",
                  lineHeight: 1.5,
                }}
              >
                {project.subtitle}
              </p>

              {/* IMAGE FRAME */}

              <div
                style={{
                  width: "100%",
                  height: "360px",

                  position: "relative",

                  background: "#FFFFFF",

                  borderTop: "3px solid #7A7A7A",
                  borderLeft: "3px solid #7A7A7A",
                  borderRight: "3px solid #FFFFFF",
                  borderBottom: "3px solid #FFFFFF",

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

              {/* FOOTER */}

              <div
                style={{
                  marginTop: "24px",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    color: "#666666",
                  }}
                >
                  Internet Experiment
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button
                    style={{
                      background: "#C0C0C0",

                      color: "#000000",

                      fontSize: "18px",
                      fontWeight: 500,

                      padding: "12px 28px",

                      cursor: "pointer",

                      borderTop: "3px solid #FFFFFF",
                      borderLeft: "3px solid #FFFFFF",
                      borderRight: "3px solid #7A7A7A",
                      borderBottom: "3px solid #7A7A7A",
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.borderTop =
                        "3px solid #7A7A7A";
                      e.currentTarget.style.borderLeft =
                        "3px solid #7A7A7A";
                      e.currentTarget.style.borderRight =
                        "3px solid #FFFFFF";
                      e.currentTarget.style.borderBottom =
                        "3px solid #FFFFFF";
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.borderTop =
                        "3px solid #FFFFFF";
                      e.currentTarget.style.borderLeft =
                        "3px solid #FFFFFF";
                      e.currentTarget.style.borderRight =
                        "3px solid #7A7A7A";
                      e.currentTarget.style.borderBottom =
                        "3px solid #7A7A7A";
                    }}
                  >
                    Launch →
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BACK */}

        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "#6F6F6F",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            ← Back Home
          </a>
        </div>
      </div>
    </main>
  );
}