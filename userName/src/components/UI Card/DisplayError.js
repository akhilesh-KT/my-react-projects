import RC from "./RC";
import Button from "./Button";
import classes from "./DisplayError.module.css";

const DisplayError = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onHandleError}>
      <RC className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onHandleError}>Ok</Button>
        </footer>
      </RC>
    </div>
  );
};

export default DisplayError;
