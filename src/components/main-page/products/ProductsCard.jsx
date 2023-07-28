import React, { useState } from "react";
import "./ProductsCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ProductsCard(props) {
  const [heartColor, setHeartColor] = useState("disabled");

  function handleHeartClick() {
    setHeartColor((prevColor) => (prevColor === "disabled" ? "error" : "disabled"));
  }

  return (
    <div className="product-card">
      <img src={props.imgUrl} alt="productImg" />
      <div className="disp-flex">
        <div className="name-and-price">
          <p className="product-name">{props.name}</p>
          <p className="product-price">$ {props.price}</p>
        </div>
        <div title="Add to favourites" className="add-fav" onClick={handleHeartClick}>
          <FavoriteIcon color={heartColor} />
        </div>
      </div>
      <div className="quick-view-btn">
        <button>Quick View</button>
      </div>
    </div>
  );
}

export default ProductsCard;
