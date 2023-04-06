import React, { ChangeEvent, FormEvent, useState } from "react";
import style from "./form.module.css"
import { BoxStyle } from "../styleBox/stylebox";

type FormType = {
  funval:(values: string, age: string) => void
};


export const Form = (props: FormType) => {
  let [valuesName, seValuesName] = useState("");
  let [valuesAge, seValuesAge] = useState("");

  const nameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    seValuesName(event.currentTarget.value);
  };

  const ageHandler = (event: ChangeEvent<HTMLInputElement>) => {
    seValuesAge(event.currentTarget.value);
  };

  const formHandler = (event: FormEvent) => {
    event.preventDefault();
    props.funval(valuesName, valuesAge);
    seValuesName("");
    seValuesAge("");
  };

  return (
    <BoxStyle>
      <form onSubmit={formHandler}>
        <div className={style.inputBox}>
          <label htmlFor="" className={style.label}>
            Enter names
          </label>
          <input
            type="text"
            className={style.input}
            onChange={nameHandler}
            value={valuesName}
          />
        </div>
        <div className={style.inputBox}>
          <label htmlFor="" className={style.label}>
            Enter age
          </label>
          <input
            type="text"
            className={style.input}
            onChange={ageHandler}
            value={valuesAge}
          />
        </div>
        <button className={style.but} type="submit">
          ADD
        </button>
      </form>
    </BoxStyle>
  );
};
