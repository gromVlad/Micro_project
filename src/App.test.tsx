import { funActionStateAC, funAddNewEl, reduserState } from "./App"

test('check reduser',() => {
  //state
  let arr = ["a","b","c","d"]

  //action
  let a = reduserState(arr,funActionStateAC("d"))
  let b = reduserState(arr, funAddNewEl("245"));

  //expect
  expect(a).toEqual(["d", "a", "b", "c"]);
  expect(b).toEqual(["a", "b", "c", "d", "245"]);

})