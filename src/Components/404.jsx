import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f3ec",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(50px, 8vw, 120px)",
          margin: "0",
          color: "#2c3e50",
          fontWeight: "700",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "clamp(20px, 3vw, 30px)",
          color: "#555",
          margin: "10px 0 20px 0",
        }}
      >
        Oops! Page not found
      </h2>
      <p
        style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          color: "#666",
          maxWidth: "500px",
          marginBottom: "30px",
        }}
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          backgroundColor: "#d8af72",
          color: "#fff",
          padding: "12px 25px",
          borderRadius: "8px",
          fontSize: "clamp(16px, 1.5vw, 18px)",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#c59b60")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#d8af72")}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;