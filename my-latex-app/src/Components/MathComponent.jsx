import React from "react";
import { InlineMath, BlockMath, InlineStyle, Tex } from "react-katex";
import "katex/dist/katex.min.css";

function MathComponentsWithDelimiters() {
  const customInlineDelimiter = { left: "\\(", right: "\\)", display: false };
  const customBlockDelimiter = { left: "\\[", right: "\\]", display: true };
  const customStyle = { color: "blue" }; // Custom CSS style object

  return (
    <div>
      <h2>Math Components with Custom Delimiters</h2>

      <InlineMath
        math="c = \sqrt{a^2 + b^2}"
        delimiters={customInlineDelimiter}
      />

      <BlockMath
        math="\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}"
        delimiters={customBlockDelimiter}
      />
    </div>
  );
}

export default MathComponentsWithDelimiters;
