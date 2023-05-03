import { type } from "os"

//неявная типизация для примитивных типов данных 
let a = 4
//a ="hello" -> error

//явная типизация для примитивов - это избыточно не надо писать для примитивов
let str:string ="hello"

//-----------------------
//Array
//начиная с массивов их обязательно явно типизировать

let ages:Array<number> = [18,26,27]
let ages1:number[] = [18,26,27]

// или -> | 
let ages2:Array<number | string | boolean> = [18,true,26,27,"hello"]

let ages3:(number | string | boolean)[] = [18,true,26,27,"hello"]

// !!! значение any означает что мы пишем опять на js -> лучше не использовать

//----------------------------
//Objects
//при типизации нам подсказывает ключи этой типизацией, очень убодно работать 

let man1:{name:string,height:number} = {name:'vlad',height:1.78}

//c interface
//называть всегда с большой буквы можем писать сначало I чтобы знать что это interface
interface IMan {
  name: string
  height:number
}

let man2:IMan = {name:'vlad',height:1.78}

//c type
//c заглавной буквы обычно добовляем Type на конце
type Man3Type = {
  name: string;
  height: number;
};

let man3: Man3Type = { name: "vlad", height: 1.78 };

//--------------------------------
// 9) Создайте массив в котором будут сидеть 2 элемента man1 и man2 и явно типизируйте его. 
// (man1 и man2 - объекты из 5 задания)
//<> - уточнение

type PeopleType = {
  name: string;
  height: number;
};

const people: PeopleType[] = [
  { name: "Oleg", height: 1.98 },
  { name: "vlad", height: 1.71 },
];

//-----------------------------------
//В объекте могут быть необязательные свойства, которые мы можем указать через ?
type ManType = {
  name: string;
  height: number;
  surname?:string
};

let man_1: ManType = { name: "vlad", height: 1.78, surname: "grom" };
let man_2: ManType = { name: "vlad", height: 1.78 };

//----------------------------------------
//function
//Должны писать то что функция принимает и что возврощает

//если функция ничего не возврощает то ставим void
function sum(a:number,b:number):void {
  let c = a + b 
  console.log(c);
}

//если return то ставим что возврощает
function sum1 (a:number,b:number):number {
  return a + b 
}

function touperr(str: Array<string>): Array<string> | Array<number> {
  return str.map((el) => el.toUpperCase());
}

//обавьте строгую типизацию функции
type СreateType = {
  name: string;
  height: number;
};

let createMan = (name:string, height:number): СreateType => {
  return {
    name,
    height,
  };
};

// Расширить интерфейс ICar, чтобы компилятор не ругался:
type ICarType = {
  model: string;
  year: number;
  on: boolean;
  //turnON():void;
  turnON:() => void
  rename: (model: string) => void;
};

let car: ICarType = {
  model: "Reno Stepway",
  year: 2016,
  on: false,
  turnON() {
    this.on = true;
  },
  rename(model) {
    this.model = model;
  },
};

//Создайте type IGarage и типизируйте этот кусок кода:(используя те интерфейсы, которые у вас есть)
type CreateGarageType = {
  addCar: (car: ICarType) => void;
  logAllCarsNames: () => void;
  getAllCars:() => ICarType[]
}

let createGarage = (): CreateGarageType => {
  let _cars: ICarType[]= [];

  return {
    addCar(car) {
      _cars.push(car);
    },
    logAllCarsNames() {
      console.log("Cars in the garage: ");
      _cars.forEach((c) => console.log(c.model));
    },
    getAllCars() {
      return _cars;
    },
  };
};

//----------------------------------------
//Переводим todolist на Typescript
//обычно типизацию переносим в отдельный файл
type Todolist = {
  id:number,
  adddate:string,
  order:number
  title:string
}

type Initstate = {
  todolist: Todolist[]
};


const initalState :Initstate = {
  todolist:[]
}