import { useEffect} from "react";
import { OutsideBox } from "./components/OutsideBox";
import { InsideBox } from "./components/InsideBox";
import "./index.css"
import { useSelector } from "react-redux";
import { AppStateType } from "./store/index_state";
import { AddNumberThunk, GetLocalThunk, GetMaxValueThunk, InitStateReduserType, ResetNumberThunk, actionChangeBox } from "./store/reduser_count";
import { useDispatch } from "react-redux";

export default function App() {
  const state = useSelector<AppStateType, InitStateReduserType>(
    (state) => state.stateCount
  );
  const dispatch = useDispatch();
  console.log(state);


  useEffect(() => {
    dispatch(GetLocalThunk());
    dispatch(GetMaxValueThunk());
  }, [dispatch]);


  const addNumber = () => {
    dispatch(AddNumberThunk(state.count))
  };

  
  const resetNumber = () => {
    dispatch(ResetNumberThunk())
  };

  
  const changeBox = () => {
    dispatch(actionChangeBox());
  }

  return (
    <div className="App">
      {!state.change && (
        <OutsideBox
          count={state.count}
          addNumber={addNumber}
          resetNumber={resetNumber}
          changeBox={changeBox}
          maxValue={state.maxCount}
        />
      )}
      {state.change && <InsideBox />}
    </div>
  );
}



