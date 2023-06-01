import "./contentBox.css";

export const Box = ({ ...props }) => {
  return <div className={"box"}>{props.children}</div>;
};
