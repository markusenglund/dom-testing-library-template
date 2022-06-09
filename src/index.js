import React from "react";

const ComponentWithPrefixedStyles = () => (
  <div
    style={{
      background: "red",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    }}
  >
    Hello
  </div>
);

export default ComponentWithPrefixedStyles;
