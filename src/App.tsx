import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const fun = (name: string) => {
    alert("hello" + " " + name);
  };

  return (
    <div>
      <SelectedControll
        value={"menu"}
        arr={[24, "hey", "vlad", "yooo!!", 54]}
        change={fun}
      />
    </div>
  );
};

type SelectedType = {
  value: string;
  arr: Array<any>;
  change: (name: string) => void;
};

const SelectedControll = (props: SelectedType) => {
  let [a, setA] = useState<boolean>(false);

  return (
    <div className="selected-container">
      <div className="selected-header" onClick={() => setA(!a)}>
        {props.value}
      </div>
      <ul className={a ? "selected-list open" : "selected-list"}>
        {props.arr.map((el, index) => (
          <li
            key={index}
            className="selected-item"
            onClick={() => props.change(el)}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
