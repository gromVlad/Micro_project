import { useState } from "react";
import { OutsideBox } from "./components/OutsideBox";
import { UnsideBox } from "./components/InsideBox";
import "./index.css"

export default function App() {

  const getLocal = () => {
    let getLocalNumberMin = localStorage.getItem("minValue");
    
    let getLocalNumber = localStorage.getItem("count");

    if (getLocalNumber) {
      return +JSON.parse(getLocalNumber);
    } else if (getLocalNumberMin) {
      return +JSON.parse(getLocalNumberMin);
    } else {
      return 0;
    }
  }

  const getmaxvalue = () => {
    let getLocalNumberMax = localStorage.getItem("maxValue");

    if (getLocalNumberMax) {
      return +JSON.parse(getLocalNumberMax);
    } else {
      return 5
    }
  }
  
  let [count, setCount] = useState<number>(getLocal());
  let [change, setChange] = useState<boolean>(false);
  let [maxValue, setValue] = useState<number>(getmaxvalue());

  const addNumber = () => {
    setCount(count + 1);
    localStorage.setItem("count", (count+1).toString())
  };

  const resetNumber = () => {
    setCount(0);
    localStorage.setItem("minValue", (0).toString());
    localStorage.setItem("count", (0).toString());
  };

  const changeBox = () => {
    setChange(!change);
  };

  const maxValueFun = (value: string) => {
    setValue(+value);
  };

  const startValue = (value:string) => {
    setCount(+value)
  }

  return (
    <div className="App">
      {!change && (
        <OutsideBox
          count={count}
          addNumber={addNumber}
          resetNumber={resetNumber}
          changeBox={changeBox}
          maxValue={maxValue}
        />
      )}
      {change && (
        <UnsideBox
          changeBox={changeBox}
          maxValueFun={maxValueFun}
          startValue={startValue}
        />
      )}
    </div>
  );
}
