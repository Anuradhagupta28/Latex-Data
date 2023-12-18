import logo from './logo.svg';
import "katex/dist/katex.min.css"; // Import KaTeX styles

import './App.css';
import LatexComponent from './Components/Latex';
import DefaultDelimitersComponent from './Components/DefaultDelimeter';
import MathComponentsWithDelimiters from './Components/MathComponent';
import MathJaxComponent from './Components/MathJaxComponent';

function App() {
  const mathString = 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}'; // Quadratic formula
console.log(mathString)
  return (
    <div className="App">
      <LatexComponent/>
   {/*<MathComponentsWithDelimiters/>
     <DefaultDelimitersComponent/> */}
     {/* <MathJaxComponent mathString={mathString}/> */}
    </div>
  );
}

export default App;
