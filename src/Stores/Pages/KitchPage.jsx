import React, { useState } from "react";
import Navbar from "../../components/Navbar";

import { Link } from "react-router-dom";

import { kitchenData } from "../Data/kitchen";

function KitchPage() {
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
      ? kitchenData
      : kitchenData.filter((data) => selectedProduct.includes(data.brand));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="selected-pro">
          {kitchenData.map((object) => {
            return (
              <div className="pro-input company">
                <label>
                  <input
                    className="input"
                    type="checkbox"
                    checked={selectedProduct.includes(object.brand)}
                    onChange={() => Brand(object.brand)}
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
                <Link to={`/kitchen/${product.id}`}>
                  <div className="pageImg">
                    <img src={product.image} alt=""></img>
                  </div>
                </Link>

                <div className="allModels">{product.type},</div>
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

export default KitchPage;
