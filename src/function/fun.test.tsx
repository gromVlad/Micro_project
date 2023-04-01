import { fun1, fun2, fun3 } from "./fun"

////values defoult
let a:number
let b:number

beforeEach (() =>{
  a = 6
  b = 5
})

test("check +", () => {

  //values defoult

  //go
  const result = fun1(a,b)

  //result
  expect(result).toBe(11)
})

test("check -", () => {
  const result = fun2(a,b)

  
  expect(result).toBe(30)
})

test("check +", () => {
  const result = fun3(a,b)

  expect(result).toBe(15)
})