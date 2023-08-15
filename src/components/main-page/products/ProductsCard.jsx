import React, { useState } from "react";
import "./ProductsCard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "react-modal";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./modal.css";

Modal.setAppElement("#root"); // Set the root element for the modal

function ProductsCard(props) {
  const [heartColor, setHeartColor] = useState("disabled");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantiy, setQuantity] = useState(1);

  function handleHeartClick() {
    setHeartColor((prevColor) =>
      prevColor === "disabled" ? "error" : "disabled"
    );
  }

  function handleSubtract() {
    if (quantiy > 1) {
      setQuantity((prev) => prev - 1);
    }
  }
  function handleAdd() {
    if (quantiy < 5) {
      setQuantity((prev) => prev + 1);
    }
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="product-card">
      <img src={props.imgUrl} alt="productImg" />
      <div className="disp-flex">
        <div className="name-and-price">
          <p className="product-name">{props.name}</p>
          <p className="product-price">$ {props.price}</p>
        </div>
        <div
          title="Add to favourites"
          className="add-fav"
          onClick={handleHeartClick}
        >
          <FavoriteIcon color={heartColor} />
        </div>
      </div>
      <div className="quick-view-btn">
        <button onClick={openModal}>Quick View</button>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <button className="close-modal-btn" onClick={closeModal}>
          <CloseIcon />
        </button>
        {/* Modal Content */}
        <div className="modal-content">
          <div className="modal-image">
            <img src={props.imgUrl} alt="productImg" />
          </div>
          <div className="modal-details">
            <p className="modal-product-name">{props.name}</p>
            <p className="modal-product-price">${props.price}</p>
            <p className="modal-product-description">
              {props.desc}
            </p>
            {/* Add more details like description, size dropdown, etc. */}
            <div className="modal-size-select">
              <div className="size-selector-dropdown">
                <label htmlFor="sizes">Select Size</label>
                <select name="sizes" id="size">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
            </div>
            <div className="quantity-select">
              <button onClick={handleSubtract}>
                <RemoveIcon />
              </button>
              <input
                type="number"
                name="qty"
                id="qty"
                value={quantiy}
                readOnly
              />
              <button onClick={handleAdd}>
                <AddIcon />
              </button>
            </div>
            <div className="flex">
              <button className="cart-btn">Add to Cart</button>
              <button className="cart-btn">Buy Now</button>
            </div>
            <p className="article-number">article# {props.prod_id}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProductsCard;
