import React from "react";
import style from "./stylebox.module.css"

export const BoxStyle = (props:any) => {
  return (
    <div className={style.content}>
      {props.children}
    </div>
  )
}