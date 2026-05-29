"use client";

import Image from "next/image";
import Link from "next/link";

export default function AIPlaygroundPage() {
  const projects = [
    {
      image: "/thumbnails/not-a-robot.png",
      page: "/not-a-robot",
    },
    {
      image: "/thumbnails/lock_in_police.png",
      page: "/projects/project-2",
    },
    {
      image: "/thumbnails/project-3.png",
      page: "/projects/project-3",
    },
    {
      image: "/thumbnails/project-4.png",
      page: "/projects/project-4",
    },
    {
      image: "/thumbnails/project-5.png",
      page: "/projects/project-5",
    },
    {
      image: "/thumbnails/project-6.png",
      page: "/projects/project-6",
    },
    {
      image: "/thumbnails/project-7.png",
      page: "/projects/project-7",
    },
    {
      image: "/thumbnails/project-8.png",
      page: "/projects/project-8",
    },
    {
      image: "/thumbnails/project-9.png",
      page: "/projects/project-9",
    },
    {
      image: "/thumbnails/project-10.png",
      page: "/projects/project-10",
    },
  ];

  return (
    <main
      style={{
        background: "#262FF6",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "30% 40% 30%",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* LEFT PANEL */}
        <section
          style={{
            borderRight: "1px solid rgba(255,255,255,0.1)",
            padding: "32px",
            position: "relative",
          }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              fontSize: "22px",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            Back
          </Link>
        </section>

        {/* CENTER PANEL */}
        <section
          style={{
            height: "100vh",
            overflowY: "scroll",
            padding: "40px 24px 120px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          <h1
            style={{
              color: "white",
              fontSize: "72px",
              lineHeight: "72px",
              marginTop: "0",
              marginBottom: "40px",
              fontWeight: 600,
            }}
          >
            AI Playground
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.page}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "320px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.15)",
                    transition: "0.3s ease",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`project-${index}`}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.1)",
          }}
        />
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}