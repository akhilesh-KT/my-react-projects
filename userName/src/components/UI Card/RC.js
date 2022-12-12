import classes from "./RC.module.css";

const RC = (props) => {
  return (
    <div className={`${classes.RC} ${props.className}`}>{props.children}</div>
  );
};
export default RC;
