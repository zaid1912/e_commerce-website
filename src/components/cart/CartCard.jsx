import React, { useContext } from "react";
import './cartCard.css';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from "../context/CartContext";

function CartCard(props) {

  const { removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeFromCart(props.prod_id); // Assuming `props.name` is a unique identifier for the product
  };
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
      <td><button className="deleteIcon" onClick={handleRemoveFromCart}>
        <DeleteIcon />
      </button></td>
    </tr>
  );
}

export default CartCard;
