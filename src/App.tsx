import React, { useReducer, useState } from "react";
import "./App.css";

//create new const type
const NEW_FIRST_VALUE = "NEW_FIRST_VALUE";
const NEW_VALUE = "NEW_VALUE";

//copy with action creater type
type ActionTypeCH = ReturnType<typeof funActionStateAC>;

//create action creater
export const funActionStateAC = (name:string) => {
  return {
    type: NEW_FIRST_VALUE,
    playBox: {
      name,
    },
  } as const
};

type ActionTypeAdd = ReturnType<typeof funAddNewEl>;

export const funAddNewEl = (name:string) => {
  return {
    type: NEW_VALUE,
    playBox: {
      name,
    },
  } as const
}

type Action = ActionTypeCH | ActionTypeAdd;

//create reduser
export const reduserState = (state: string[], action: Action) => {
  switch (action.type) {
    case NEW_FIRST_VALUE:
      return [
        action.playBox.name,
        ...state.filter((el) => el !== action.playBox.name),
      ];
    case NEW_VALUE:
      return [...state, action.playBox.name];
    default:
      return state;
  }
};

export const App = () => {
  //one element state / two return state = (fun reduser, state)
  let [state, dispatch] = useReducer(reduserState,[
    "menu",
    "hey",
    "vlad",
    "yooo!!",
  ]);

  const funAddNewelementStartSelected = (name: string) => {
    //use dispatch with function action state
    dispatch(funActionStateAC(name))
  };

  return (
    <div>
      <SelectedControll
        value={"menu"}
        arr={state}
        change={funAddNewelementStartSelected}
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

  const funAddNewElandHidden = (name: string) => {
    props.change(name);
    setA(!a);
  };


  return (
    <div className="selected-container">
      <div className="selected-header" onClick={() => setA(!a)}>
        {props.arr[0]}
      </div>
      <ul className={a ? "selected-list open" : "selected-list"}>
        {props.arr.map((el, index) => (
          <li
            key={index}
            className="selected-item"
            onClick={() => funAddNewElandHidden(el)}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
