import React from "react";
import colors from "../tokens/colors"
export default function box({ children }) {
  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: colors.primary ,
      }}
    >
      {children}
    </div>
  );
}
