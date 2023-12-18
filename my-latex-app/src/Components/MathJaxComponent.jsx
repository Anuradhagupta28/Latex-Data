import React, { useEffect, useState } from "react";
import MathJax from "react-mathjax";

function MathJaxComponent({ mathString }) {
  const [math, setMath] = useState(mathString);

  useEffect(() => {
    setMath(mathString);
  }, [mathString]);

  return (
    <div>
      <h2>MathJax Delimiter Demo</h2>

      <MathJax.Provider>
        <div>
          <h3>Inline Math with $...$:</h3>
          <MathJax.Node inline formula={`${math}`} />

          <h3>Display Math with $$...$$:</h3>
          <MathJax.Node formula={`$$${math}$$`} />

          <h3>Inline Math with \\(...\\):</h3>
          <MathJax.Node inline formula={`\\(${math}\\)`} />
        </div>
      </MathJax.Provider>
    </div>
  );
}

export default MathJaxComponent;
