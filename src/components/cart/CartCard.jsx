import React from "react";
import './cartCard.css';

function CartCard(props) {
  return (
    
    <tr>
      <td>
      <img src={props.img} alt="Product image" />
      {props.name}
      </td>
    
      <td>
      <p className="prod-name">
      $ {props.price}

      </p>
      </td>
      <td>
      {props.qty}
      </td>
      <td>{props.qty * props.price}</td>
    </tr>
  );
}

export default CartCard;
