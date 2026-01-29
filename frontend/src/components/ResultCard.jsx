import React from "react";
import { motion } from "framer-motion";

export default function ResultCard({ result }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        width: "350px",
        margin: "20px auto",
        padding: "20px",
        background: "#f3e8ff",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#7e22ce", fontWeight: "900" }}>
        Result: {result.label.toUpperCase()}
      </h2>
      <p style={{ color: "#6b21a8", marginTop: "5px" }}>
        Confidence: {Math.round(result.confidence * 100)}%
      </p>
    </motion.div>
  );
}
