"use client";

import Image from "next/image";

export default function AIPlaygroundPage() {
  const playLaunchSound = () => {
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
      type: "Internet Experiment",
    },
    {
      title: "LOCK-IN POLICE",
      subtitle:
        "AI catches you touching your phone and tries to force productivity.",
      image: "/thumbnails/lock_in_police.png",
      url: "https://lock-in-police.vercel.app/",
      type: "Internet Experiment",
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#ECECEC",
        padding: "48px 24px 120px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* WINDOW HEADER */}

        <div
          style={{
            background: "#000080",
            color: "#FFFFFF",

            padding: "12px 16px",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            borderTop: "2px solid #C0C0C0",
            borderLeft: "2px solid #C0C0C0",
            borderRight: "2px solid #000000",
            borderBottom: "2px solid #000000",

            boxShadow: "2px 2px 0px #7A7A7A",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            AI Playground
          </div>

          <div
            style={{
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Jatin Bansal
          </div>
        </div>

        {/* INTRO */}

        <div
          style={{
            marginTop: "40px",
            marginBottom: "50px",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              margin: 0,

              maxWidth: "700px",

              textAlign: "center",

              fontSize: "22px",
              lineHeight: 1.6,

              color: "#666666",
            }}
          >
            A collection of experiments, games, AI prototypes and internet
            ideas.
          </p>
        </div>

        {/* PROJECT LIST */}

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

                borderTop: "4px solid #FFFFFF",
                borderLeft: "4px solid #FFFFFF",
                borderRight: "4px solid #7A7A7A",
                borderBottom: "4px solid #7A7A7A",
              }}
            >
              {/* TITLE BAR */}

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

              {/* TITLE */}

              <h2
                style={{
                  margin: 0,

                  color: "#404040",

                  fontSize: "40px",
                  fontWeight: 700,
                }}
              >
                {project.title}
              </h2>

              {/* SUBTITLE */}

              <p
                style={{
                  marginTop: "12px",
                  marginBottom: "24px",

                  fontSize: "18px",
                  lineHeight: 1.5,

                  color: "#6F6F6F",
                }}
              >
                {project.subtitle}
              </p>

              {/* THUMBNAIL */}

              <div
                style={{
                  width: "100%",
                  height: "500px",

                  position: "relative",

                  background: "#FFFFFF",

                  overflow: "hidden",

                  borderTop: "3px solid #7A7A7A",
                  borderLeft: "3px solid #7A7A7A",
                  borderRight: "3px solid #FFFFFF",
                  borderBottom: "3px solid #FFFFFF",
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
                  marginTop: "20px",

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
                  {project.type}
                </div>

                <button
                  onClick={() => {
                    playLaunchSound();

                    setTimeout(() => {
                      window.open(project.url, "_blank");
                    }, 120);
                  }}
                  style={{
                    background: "#C0C0C0",

                    color: "#000000",

                    fontSize: "18px",
                    fontWeight: 500,

                    padding: "12px 24px",

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
              </div>
            </div>
          ))}
        </div>

        {/* BACK HOME */}

        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "#666666",
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