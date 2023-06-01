import "./button.css";

export const Button = ({ ...props }) => {
  return (
    <button {...props} className={"btn"}>
      {props.children}
    </button>
  );
};
