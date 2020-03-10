import React from "react";

const style = {
  textAlign: "left",
  color: "#f035e9",
  backgroundColor: "rgba(52, 52, 52, 0.0)",
  textDecoration: "none",
  padding: "16px",
  height: "600px",
  width: "800px",
  paddingRight: "500px",
  display: "flex",
  fontFamily: "Papyrus",
  textShadowColor: "#f035e9",
  textShadowOffset: { width: 25, height: 25 },
  fontSize: "14pt"
};

const DarkTheme = ({ children }) => <div style={style}>{children}</div>;

export default DarkTheme;
