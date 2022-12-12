import { Fragment } from "react";
import MealsImg from "../../Images/meals1.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Indian Kitchen</h1>
        <HeaderCartButton onClick={props.onVisibleCart}></HeaderCartButton>
      </header>
      <div className={classes["main - image"]}>
        <img src={MealsImg} alt="A table of Meals" />
      </div>
    </Fragment>
  );
};

export default Header;
