import { Box } from "./contentBox";
import { Show } from "./show";
import { Button } from "./button";

type OutsideBoxType = {
  count: number;
  addNumber: () => void;
  resetNumber: () => void;
  changeBox: () => void;
  maxValue: number;
};

export const OutsideBox = (props: OutsideBoxType) => {
  return (
    <>
      <Box>
        <Box>
          <Show count={props.count} maxValue={props.maxValue} />
        </Box>
        <Box>
          <Button
            disabled={props.count === props.maxValue}
            onClick={props.addNumber}
          >
            Count
          </Button>
          <Button disabled={props.count === 0} onClick={props.resetNumber}>
            Reset
          </Button>
          <Button onClick={props.changeBox}>Send</Button>
        </Box>
      </Box>
    </>
  );
};
