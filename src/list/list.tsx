import React from "react";
import style from "./list.module.css";
import { BoxStyle } from "../styleBox/stylebox";

type ListTypetwo = {
  mes?: string;
  myAge?:string
};

type ListType = {
  addList: ListTypetwo[];
  filterAge: (str: string) => void;
};
export const List = (props:ListType) => {

  const filterAgeFunction18 = () => {
    props.filterAge("18")
  }

  const filterAgeFunctionAll = () => {
    props.filterAge("all");
  }

  return (
    <BoxStyle>
      <div className={style.list}>
        {props.addList.map((el, index, arr) => {
          return (
            <p key={index} className={style.text}>
              My name is {el.mes}, my age {el.myAge} .Hello!!!!
            </p>
          );
        })}
        <button onClick={filterAgeFunction18}>Sort 18 + </button>
        <button onClick={filterAgeFunctionAll}>Sort All + </button>
      </div>
    </BoxStyle>
  );
};
