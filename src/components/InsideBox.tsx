import { ChangeEvent, useState } from "react";
import { Button } from "./button";
import { Box } from "./contentBox";
import { useSelector } from "react-redux";
import { AppStateType } from "../store/index_state";
import { GetInputValueThunk, InitStateReduserType } from "../store/reduser_count";
import { useDispatch } from "react-redux";


export const InsideBox = () => {
  const state = useSelector<AppStateType, InitStateReduserType>(
    (state) => state.stateCount
  );
  const dispatch = useDispatch();

  let [inputValue, setInputValue] = useState<string>("");
  let [inputValueStart, setInputValueStart] = useState<string>("");

  const fun = () => {
    dispatch(GetInputValueThunk(inputValue, inputValueStart))
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box>
        <form>
          <div>
            <Box>
              <label>Max value </label>
              <input
                style={{ fontSize: "20px" }}
                value={inputValue}
                type="number"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.currentTarget.value)
                }
              />
            </Box>
          </div>
          <div>
            <Box>
              <label>Start value </label>
              <input
                style={{ fontSize: "20px" }}
                value={inputValueStart}
                type="number"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputValueStart(e.currentTarget.value)
                }
              />
            </Box>
          </div>
        </form>
        <Button onClick={fun}>Send</Button>
      </Box>
    </div>
  );
};
