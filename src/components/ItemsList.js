import React from "react";

const ItemsList = (props) => {
  const handleDelete = (productId) => {
    props.onDelete(productId);
  };
  return (
    <ul>
      {props.savedListDatas.map((savedListData) => {
        return (
          <li key={savedListData.productId}>
            <p>
              {`$${savedListData.sellingPrice} - 
              ${savedListData.productName} - 
              ${savedListData.productCategory}`}{" "}
              <button
                type="submit"
                onClick={() => handleDelete(savedListData.productId)}
              >
                Delete Product
              </button>
            </p>
          </li>
        );
      })}
    </ul>
  );
};
export default ItemsList;
