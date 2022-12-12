import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isFormEmpty = (value) => value.trim().length === 0;
const isPinSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputsStatus, setFormInputsStatus] = useState({
    name: true,
    address: true,
    city: true,
    pinCode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const pinCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const customerName = nameInputRef.current.value;
    const customerAddress = addressInputRef.current.value;
    const customerPinCode = pinCodeInputRef.current.value;
    const customerCity = cityInputRef.current.value;

    const enteredNameIsTrue = !isFormEmpty(customerName);
    const enteredAddressIsTrue = !isFormEmpty(customerAddress);
    const enteredCityIsTrue = !isFormEmpty(customerCity);
    const enteredPinCodeIsTrue = isPinSixChars(customerPinCode);

    setFormInputsStatus({
      name: enteredNameIsTrue,
      address: enteredAddressIsTrue,
      city: enteredCityIsTrue,
      pinCode: enteredPinCodeIsTrue,
    });

    const formIsValid =
      enteredNameIsTrue &&
      enteredAddressIsTrue &&
      enteredCityIsTrue &&
      enteredPinCodeIsTrue;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: customerName,
      address: customerAddress,
      city: customerCity,
      pinCode: customerPinCode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsStatus.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsStatus.name && <p>Please enter your name!!!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsStatus.address ? "" : classes.invalid
        }`}
      >
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef}></input>
        {!formInputsStatus.address && <p>Please enter your address!!!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsStatus.pinCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="pin">Pin code</label>
        <input type="text" id="pin" ref={pinCodeInputRef}></input>
        {!formInputsStatus.pinCode && <p>Please enter valid pin-code!!!</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsStatus.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsStatus.city && <p>Please enter your city name!!!</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm Order</button>
      </div>
    </form>
  );
};

export default Checkout;
