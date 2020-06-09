import React from "react";

export default function layout({ children }) {
  return (
    <section
      style={{
        display: "block",
        maxWidth: "650px",
        margin: "2rem auto",
      }}
    >
      {children}
    </section>
  );
}
