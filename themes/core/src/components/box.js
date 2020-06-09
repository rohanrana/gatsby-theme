import React from "react";
import colors from "../tokens/colors";
export default function box({ children }) {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: colors.primary,
      }}
    >
      <h1>INNNNNN</h1>
      {children}
    </div>
  );
}
