import React, {useContext} from 'react'
import './checkout.css';
import '../cart/CartPage';

import '../cart/cartCard.css';
import '../cart/cart.css';
import '../cart/CartCard';
import { Context } from 'react';
import CartContext from '../context/CartContext';
import CartCard from '../cart/CartCard';
import { NavLink } from 'react-router-dom';

function Checkout() {

  const breadcrumbStyle = {
    content: '">"', // Set the separator as >
  };

  const { cartItems } = useContext(CartContext);


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
            {/* <a href="#">Home</a> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Checkout
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
                prod_id={cartItem.prod_id}
                img={cartItem.imgUrl}
                name={cartItem.name}
                qty={cartItem.qty}
                price={cartItem.price}
              />
            ))}
          </tbody>
        </table>
        <div className="cart-totals">
          <h5>CHECKOUT NOW</h5>

          <div className="subtotals">
            <p className="bold">Subtotal:</p>
            <p>$ {calculateSubTotal()}</p>
          </div>
          <br />
          <div className="subtotals">
            <p className="bold">Payment Method:</p>
            <p className="light-text">
              Pay Online
            </p>
          </div>

          <div className="subtotals">
            <p className="bold">Total:</p>
            <p>$ {calculateSubTotal()}</p>
          </div>
          <div className="checkout-btn">
            <NavLink to="/cart/register">
              <button type="submit">Pay Now</button>
              {/* Checkout */}
            </NavLink>
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
  )
}

export default Checkout