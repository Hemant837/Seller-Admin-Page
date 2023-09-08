import React, { useState, useEffect } from "react";
import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";

const AddItem = () => {
  const [listDatas, setListDatas] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const savedListData = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    setListDatas(savedListData);
  }, []); 

  const addListDataHandler = (listData) => {
    setListDatas((prevListData) => [...prevListData, listData]);
    localStorage.setItem(listData.productId, JSON.stringify(listData));
  };

  const filteredElectronicItem = listDatas.filter(
    (filteredlist) => filteredlist.productCategory === "Electronic"
  );

  const filteredFoodItem = listDatas.filter(
    (filteredlist) => filteredlist.productCategory === "Food"
  );

  const filteredSkincareItem = listDatas.filter(
    (filteredlist) => filteredlist.productCategory === "Skincare"
  );

  const deleteProduct = (productIdToDelete) => {
    // Remove the product from listDatas
    const updatedListDatas = listDatas.filter(
      (item) => item.productId !== productIdToDelete
    );
    setListDatas(updatedListDatas);

    // Remove the product from localStorage
    localStorage.removeItem(productIdToDelete);
  };

  return (
    <React.Fragment>
      <ItemsForm onAddListData={addListDataHandler} />
      <h1>Products</h1>
      <div className="add-items">
        <div className="electronic-items-list">
          <h3>Electronic Items</h3>
          <ItemsList savedListDatas={filteredElectronicItem} onDelete={deleteProduct} />
        </div>
        <div className="food-items-list">
          <h3>Food Items</h3>
          <ItemsList savedListDatas={filteredFoodItem} onDelete={deleteProduct} />
        </div>
        <div className="skincare-items-list">
          <h3>Skincare Items</h3>
          <ItemsList savedListDatas={filteredSkincareItem} onDelete={deleteProduct} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddItem;
