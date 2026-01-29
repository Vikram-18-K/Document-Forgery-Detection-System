import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        padding: "30px",
        textAlign: "center",
        color: "#4c1d95",
      }}
    >
      <h1 style={{ fontSize: "40px", fontWeight: "900" }}>
        AI-Powered Forgery Detection
      </h1>
      <p style={{ fontSize: "18px", color: "#6b21a8", marginTop: "10px" }}>
        Upload any document image to classify it as <b>Genuine</b> or <b>Forged</b>.
      </p>
    </motion.div>
  );
}
