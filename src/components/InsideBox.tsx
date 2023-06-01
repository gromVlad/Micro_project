import { ChangeEvent, useState } from "react";
import { Button } from "./button";
import { Box } from "./contentBox";

type UnsideBoxType = {
  changeBox: () => void;
  maxValueFun: (value: string) => void;
  startValue: (value: string) => void;
};

export const UnsideBox = (props: UnsideBoxType) => {
  let [inputValue, setInputValue] = useState<string>("");
  let [inputValueStart, setInputValueStart] = useState<string>("");

  const fun = () => {
    props.maxValueFun(inputValue);
    localStorage.setItem("maxValue", inputValue);
    props.startValue(inputValueStart);
    localStorage.setItem("minValue", inputValueStart);
    localStorage.setItem("count", inputValueStart);
    props.changeBox();
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
