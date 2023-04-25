import "./show.css";

type ShowType = {
  count: number;
  maxValue: number;
};

export const Show = (props: ShowType) => {
  return (
    <div
      className={
        props.count > props.maxValue - 1 ? "red" + " " + "content" : "content"
      }
    >
      {props.count}
    </div>
  );
};
