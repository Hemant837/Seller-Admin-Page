import React, { useState } from "react";
import "./ItemsForm.css";

const ItemsForm = (props) => {
  const [enteredProductId, setEnteredProductId] = useState("");
  const [enteredSellingPrice, setEnteredSellingPrice] = useState("");
  const [enteredProductName, setEnteredProductName] = useState("");
  const [enteredProductCategory, setEnteredProductCategory] = useState("");

  const productIdHandler = (event) => {
    setEnteredProductId(event.target.value);
  };

  const sellingPriceHandler = (event) => {
    setEnteredSellingPrice(event.target.value);
  };

  const productNameHandler = (event) => {
    setEnteredProductName(event.target.value);
  };

  const productCategoryHandler = (event) => {
    setEnteredProductCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ItemsData = {
      productId: enteredProductId,
      sellingPrice: enteredSellingPrice,
      productName: enteredProductName,
      productCategory: enteredProductCategory,
    };

    props.onAddListData(ItemsData);

    setEnteredProductId("");
    setEnteredSellingPrice("");
    setEnteredProductName("");
    setEnteredProductCategory("");
  };

  return (
    <form className="Items-form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="product-id">Product ID:</label>
        <input
          type="number"
          id="product-id"
          value={enteredProductId}
          onChange={productIdHandler}
        />
      </div>
      <div>
        <label htmlFor="selling-price">Selling Price:</label>
        <input
          type="number"
          id="selling-price"
          value={enteredSellingPrice}
          onChange={sellingPriceHandler}
        />
      </div>
      <div>
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-id"
          value={enteredProductName}
          onChange={productNameHandler}
        />
      </div>
      <div>
        <label htmlFor="product-category">Choose a Category:</label>
        <select
          value={enteredProductCategory}
          onChange={productCategoryHandler}
        >
          <option value="Electronic">Electronic</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default ItemsForm;
