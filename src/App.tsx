import React, { useState } from 'react';
import './App.css';
import { Form } from './form/form';
import { List } from './list/list';

export function App() {

  

  let [arrMy, setArr] = useState([{ mes: "Kate", myAge: "35" }]);

  const funval = (val: string, age: string) => {
    const list:any = {mes: val, myAge:age};
    setArr([list,...arrMy]);
  };
  console.log(arrMy);
  
  let [newarr, setArra] = useState("all");
  let copyArr = arrMy;
  if (newarr === "all") copyArr = arrMy;
  if (newarr === "18") copyArr = arrMy.filter((el) => +el.myAge >= 18);
  
  const filterAge = (str:string) => {
    setArra(str)
  }

  return (
    <div className="main">
      <Form funval={funval} />
      <List addList={copyArr} filterAge={filterAge} />
    </div>
  );
}

