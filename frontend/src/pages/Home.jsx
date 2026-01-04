import { useEffect, useState } from "react";

function Home() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/health`)
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(() => {
        setError("Backend not reachable");
        setMessage("");
      });
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      {message && <h1>{message}</h1>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Home;
