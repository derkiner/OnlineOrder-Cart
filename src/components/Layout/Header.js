import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Grill & Chill</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg"
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
