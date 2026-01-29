import React, { useState } from "react";
import { motion } from "framer-motion";

export default function UploadBox({ onUpload, loading }) {
  const [file, setFile] = useState(null);

  const handleFile = (e) => setFile(e.target.files[0]);

  return (
    <motion.div
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      style={{
        width: "350px",
        margin: "auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <label
        style={{
          display: "block",
          width: "100%",
          padding: "25px",
          border: "2px dashed #a855f7",
          borderRadius: "15px",
          cursor: "pointer",
          background: "#faf5ff",
        }}
      >
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        ) : (
          "Click to upload an image"
        )}
        <input type="file" className="hidden" onChange={handleFile} hidden />
      </label>

      <button
        onClick={() => onUpload(file)}
        disabled={loading}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          background: "linear-gradient(to right, #8b5cf6, #ec4899)",
          color: "#fff",
          borderRadius: "10px",
          border: "none",
          fontWeight: "600",
        }}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </motion.div>
  );
}
