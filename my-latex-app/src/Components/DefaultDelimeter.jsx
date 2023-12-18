import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';

function DefaultDelimitersComponent() {
  return (
    <div>
      <h2>Default Delimiters Example</h2>
      <p>
        Inline math using default delimiters: <InlineMath math="c = \sqrt{a^2 + b^2}" />.
      </p>
      <p>
        Block math using default delimiters:
        <BlockMath math="\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}" />
      </p>
    </div>
  );
}

export default DefaultDelimitersComponent;
