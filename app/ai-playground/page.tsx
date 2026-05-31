"use client";

import Image from "next/image";

export default function AIPlaygroundPage() {
  const projects = [
    {
      title: "DOODLELAB",
      status: "PROTOTYPE",
      category: "AI Design Tool",
      subtitle:
        "An early prototype exploring AI-assisted visual ideation and doodle generation.",
      image: "/thumbnails/motionlab-ai.png",
      url: "https://doodlelab-ai.vercel.app/",
    },
  
    {
      title: "SUPER OPINION BROS",
      status: "PLAYABLE",
      category: "Multiplayer AI Game",
      subtitle:
        "A chaotic multiplayer opinion battle where hot takes decide your fate.",
      image: "/thumbnails/super-opinion-bros.png",
      url: "https://super-opinion-bros.vercel.app/",
    },
  
    {
      title: "LOCK-IN POLICE",
      status: "EXPERIMENT",
      category: "Computer Vision Project",
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
        padding: "40px 24px 100px",
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
            marginTop: "42px",
            marginBottom: "42px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              color: "#666",
              lineHeight: 1.5,
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
            gap: "28px",
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

                padding: "14px",
              }}
            >
              {/* TITLE BAR */}

              <div
  style={{
    background: "#000080",
    color: "#FFF",

    padding: "10px 12px",
    marginBottom: "14px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    fontWeight: 700,
    fontSize: "16px",
  }}
>
  <span>{project.title}.exe</span>

  <span
    style={{
      background: "#C0C0C0",
      color: "#000080",

      padding: "2px 8px",

      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.5px",
    }}
  >
    {project.status}
  </span>
</div>

              {/* TITLE */}

              <h2
                style={{
                  margin: 0,
                  fontSize: "48px",
                  color: "#444",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {project.title}
              </h2>

              {/* DESCRIPTION */}

              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "12px",

                  color: "#666",
                  fontSize: "17px",
                  lineHeight: 1.4,
                }}
              >
                {project.subtitle}
              </p>

              {/* THUMBNAIL */}

              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 8",

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
                  marginTop: "10px",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div

style={{
color: "#666",
fontSize: "15px",
fontWeight: 500,
}}

>

{project.category}

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

                      padding: "10px 22px",

                      fontSize: "17px",
                      cursor: "pointer",

                      borderTop: "2px solid #FFFFFF",
                      borderLeft: "2px solid #FFFFFF",
                      borderRight: "2px solid #808080",
                      borderBottom: "2px solid #808080",

                      appearance: "none",
                      WebkitAppearance: "none",
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
            marginTop: "60px",
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