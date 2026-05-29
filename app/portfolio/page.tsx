"use client";

export default function PortfolioPage() {
  return (
    <main
      style={{
        width: "100%",
        height: "100vh",
        background: "#2E2BFF",

        display: "flex",
        flexDirection: "column",

        paddingTop: "28px",
        paddingLeft: "28px",
        paddingRight: "28px",

        boxSizing: "border-box",

        fontFamily: "Arial, sans-serif",

        overflow: "hidden",
      }}
    >
      {/* BACK BUTTON */}
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        style={{
          background: "transparent",
          border: "none",

          color: "#FFFFFF",

          fontSize: "24px",
          fontWeight: 400,

          textDecoration: "underline",

          cursor: "pointer",

          padding: 0,
          margin: 0,

          width: "fit-content",
        }}
      >
        Back
      </button>

      {/* CENTER */}
      <div
        style={{
          flex: 1,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#FFFFFF",

            fontSize: "78px",
            fontWeight: 400,

            letterSpacing: "-3px",
          }}
        >
          Portfolio Page
        </div>
      </div>
    </main>
  );
}