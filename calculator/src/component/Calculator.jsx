import { useState } from "react";
import "../component/Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };
  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
      console.log(toString);
    } catch {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="inputbox">
        <form>
          <input type="text" className="inputarea" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button onClick={backspace} id="backspace">
            c
          </button>
          <button value="/" onClick={handleClick}>
            &divide;
          </button>
          <button value="%" onClick={handleClick}>
            %
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="*" onClick={handleClick}>
            &times;
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button value="-" onClick={handleClick}>
            &ndash;
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="=" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
