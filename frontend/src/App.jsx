import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";
import { API_URL } from "./config";

export default function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeDocument = async (file) => {
    setError(null);
    setResult(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${API_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setResult(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <UploadBox onUpload={analyzeDocument} loading={loading} />
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {result && <ResultCard result={result} />}
      <Footer />
    </>
  );
}
