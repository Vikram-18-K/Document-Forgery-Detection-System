import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#4c1d95",
      }}
    >
      📄 Document Forgery Detector
    </nav>
  );
}
