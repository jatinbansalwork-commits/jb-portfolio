"use client";

import Image from "next/image";
import Link from "next/link";

export default function AIPlaygroundPage() {
  const projects = [
    {
      title: "Super Opinion Bros",
      description:
        "A chaotic multiplayer opinion battle where hot takes decide your fate.",
      image: "/thumbnails/not-a-robot.png",
      url: "https://super-opinion-bros.vercel.app/",
    },
    {
      title: "Lock-In Police",
      description:
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
        background: "#FFFFFF",
        padding: "80px 32px",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <h1
          style={{
            fontSize: "88px",
            lineHeight: 1,
            margin: 0,
            color: "#7A7A7A",
            fontWeight: 700,
            letterSpacing: "-3px",
            textAlign: "center",
          }}
        >
          Playground
        </h1>

        <p
          style={{
            marginTop: "24px",
            marginBottom: "100px",
            textAlign: "center",
            color: "#9A9A9A",
            fontSize: "28px",
            lineHeight: 1.5,
          }}
        >
          A collection of experiments, games,
          <br />
          AI prototypes and internet ideas.
        </p>

        {/* PROJECTS */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "100px",
          }}
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                {/* THUMBNAIL */}

                <div
                  style={{
                    width: "100%",
                    height: "560px",

                    position: "relative",

                    background: "#E5E5E5",

                    borderTop: "10px solid #FFFFFF",
                    borderLeft: "10px solid #FFFFFF",
                    borderRight: "10px solid #7A7A7A",
                    borderBottom: "10px solid #7A7A7A",

                    overflow: "hidden",

                    transition: "all 0.15s ease",
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

                {/* TITLE */}

                <h2
                  style={{
                    marginTop: "28px",
                    marginBottom: "8px",

                    color: "#555555",

                    fontSize: "54px",
                    fontWeight: 700,
                  }}
                >
                  {project.title}
                </h2>

                {/* DESCRIPTION */}

                <p
                  style={{
                    margin: 0,

                    color: "#8C8C8C",

                    fontSize: "22px",
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* FOOTER */}

        <div
          style={{
            marginTop: "120px",
            textAlign: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#8E8E8E",
              fontSize: "24px",
              textDecoration: "underline",
            }}
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}