import React from "react";
import  s  from "./costItem.module.css";


export const Cost = () => {
  return (
    <div className={s.costitem}>
      <div>dec 2012</div>
      <div className={s.costitem__description}>
        <h2>CAR</h2>
        <div className={s.costitem__price}>10000$</div>
      </div>
    </div>
  );
}