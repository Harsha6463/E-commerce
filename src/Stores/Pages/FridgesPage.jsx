import React, { useState } from "react";
import { fridgeData } from "../Data/fridge";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function FridgesPage() {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const Brand = (obj) => {
    if (selectedProduct.includes(obj)) {
      setSelectedProduct(selectedProduct.filter((itm) => itm !== obj));
    } else {
      setSelectedProduct([...selectedProduct, obj]);
    }
  };
  const fiterdProduct =
    selectedProduct.length === 0
      ? fridgeData
      : fridgeData.filter((data) => selectedProduct.includes(data.model));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="selected-pro">
          {fridgeData.map((object) => {
            return (
              <div className="pro-input company">
                <label>
                  <input
                    className="input"
                    type="checkbox"
                    checked={selectedProduct.includes(object.model)}
                    onChange={() => Brand(object.model)}
                  />

                  <b className="brand">{object.brand}</b>
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageView">
          {fiterdProduct.map((product) => {
            return (
              <div>
                <Link to={`/fridges/${product.id}`}>
                  <div className="pageImg">
                    <img src={product.image} alt=""></img>
                  </div>
                </Link>

                <div className="allModels">{product.brand},</div>
                <div className="allModels">{product.model},</div>
                <div className="allModels">{product.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FridgesPage;
