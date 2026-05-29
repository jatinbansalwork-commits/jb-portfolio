"use client";

import Image from "next/image";

export default function AIPlaygroundPage() {
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

  const playClick = () => {
    try {
      const audio = new Audio("/sounds/click.mp3");
      audio.volume = 0.5;
      audio.play();
    } catch {}
  };

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#E5E5E5",
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
        {/* HEADER */}

        <div
          style={{
            background: "#000080",
            color: "#FFFFFF",

            padding: "12px 16px",

            borderTop: "2px solid #C0C0C0",
            borderLeft: "2px solid #C0C0C0",
            borderRight: "2px solid #000000",
            borderBottom: "2px solid #000000",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          <span>AI Playground</span>
          <span>Jatin Bansal</span>
        </div>

        {/* INTRO */}

        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            marginBottom: "56px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              color: "#666",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            A collection of experiments, games, AI prototypes and internet
            ideas.
          </p>
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

                borderTop: "3px solid #FFFFFF",
                borderLeft: "3px solid #FFFFFF",
                borderRight: "3px solid #808080",
                borderBottom: "3px solid #808080",

                padding: "18px",
              }}
            >
              <div
                style={{
                  background: "#000080",
                  color: "#FFF",

                  padding: "10px 12px",
                  marginBottom: "22px",

                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                {project.title}.exe
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: "58px",
                  color: "#444",
                  fontWeight: 700,
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  marginTop: "12px",
                  marginBottom: "20px",

                  color: "#666",
                  fontSize: "18px",
                  lineHeight: 1.5,
                }}
              >
                {project.subtitle}
              </p>

              {/* THUMBNAIL */}

              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 9",

                  position: "relative",

                  background: "#FFF",

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
                  marginTop: "18px",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  Internet Experiment
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <button
                    style={{
                      background: "#C0C0C0",
                      color: "#000",

                      padding: "12px 26px",

                      fontSize: "18px",
                      cursor: "pointer",

                      borderTop: "2px solid #FFFFFF",
                      borderLeft: "2px solid #FFFFFF",
                      borderRight: "2px solid #808080",
                      borderBottom: "2px solid #808080",

                      appearance: "none",
                      WebkitAppearance: "none",

                      opacity: 1,
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
              color: "#666",
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