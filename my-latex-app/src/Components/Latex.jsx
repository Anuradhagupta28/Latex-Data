import React, { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";

function LatexComponent() {
  const [latexInput, setLatexInput] = useState("");

  const handleInputChange = (e) => {
    setLatexInput(e.target.value);
  };

  const equationsArray = latexInput
    .split("\n")
    .filter((eq) => eq.trim() !== "");

  return (
    <div>
      <h2>LaTeX in React</h2>
      <p>Example of rendering LaTeX expressions:</p>
      <textarea
        value={latexInput}
        placeholder="Write your equations (each on a new line)"
        onChange={handleInputChange}
        rows={5}
        cols={50}
      />
      {equationsArray.map((expression, index) => (
        <div key={index}>
          <h3>Block Maths example</h3>
          <BlockMath math={expression} />
          <div>
            <h3>Inline Maths example</h3>
            <InlineMath math={expression} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatexComponent;
