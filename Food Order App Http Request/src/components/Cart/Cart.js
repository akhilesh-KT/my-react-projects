import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [orderSubmitting, setOrderSubmitting] = useState(false);
  const [orderDidSubmit, setOrderDidSubmit] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const oerderHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setOrderSubmitting(true);
    await fetch("http restAPI", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setOrderSubmitting(false);
    setOrderDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalBtnAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={oerderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModelContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {checkout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!checkout && modalBtnAction}
    </Fragment>
  );

  const submittingModelContent = <p>Sending order...</p>;
  const didSubmitModelContent = <p>order submitted successfully!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!orderSubmitting && !orderDidSubmit && cartModelContent}
      {orderSubmitting && submittingModelContent}
      {!orderSubmitting && orderDidSubmit && didSubmitModelContent}
    </Modal>
  );
};

export default Cart;
