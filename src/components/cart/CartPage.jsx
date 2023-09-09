import React, { useContext } from "react";
import "./cart.css";
import CartContext from "../context/CartContext";
import CartCard from "./CartCard";

function CartPage(props) {
  const { cartItems } = useContext(CartContext);

  // Define a custom style for the breadcrumb separator using ::before
  const breadcrumbStyle = {
    content: '">"', // Set the separator as >
  };

  function calculateSubTotal() {
    var subTotal = 0;
    cartItems.map((item) => {
      subTotal += item.qty * item.price;
    });
    // console.log(subTotal);
    return subTotal.toFixed(2);
  }

  return (
    <div className="cart-page">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Library
          </li>
        </ol>
      </nav>
      <div className="dispFlex">
        <table className="cart-items">
          <thead>
            <tr className="cart-table-header">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody className="cart-cards">
            {cartItems.map((cartItem) => (
              <CartCard
                img={cartItem.imgUrl}
                name={cartItem.name}
                qty={cartItem.qty}
                price={cartItem.price}
              />
            ))}
          </tbody>
        </table>
        <div className="cart-totals">
          <h5>CART TOTALS</h5>
          
          <div className="subtotals">
            <p className="bold">Subtotal:</p>
            <p>$ {calculateSubTotal()}</p>
          </div>
          <br />
          <div className="subtotals">
            <p className="bold">Shipping:</p>
            <p className="light-text">
              No shipping method chosen. Please Login or Signup and proceed to checkout for shipping
              methods.
            </p>
          </div>
          
          <div className="subtotals">
            <p className="bold">Total:</p>
            <p>$ {calculateSubTotal()}</p>
          </div>
          <div className="checkout-btn">
            <button type="submit">Proceed To Checkout</button>
          </div>
        </div>
      </div>
      <style>
        {`
          /* Apply the custom breadcrumb separator style */
          .breadcrumb::before {
            ${breadcrumbStyle}
          }
        `}
      </style>
    </div>
  );
}

export default CartPage;
