import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { furnitureData } from "../Data/furniture";
import { Link } from "react-router-dom";

function FurniturePage() {
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
      ? furnitureData
      : furnitureData.filter((data) => selectedProduct.includes(data.brand));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="selected-pro">
          {furnitureData.map((object) => {
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
                <Link to={`/furniture/${product.id}`}>
                  <div className="pageImg">
                    <img src={product.image} alt=""></img>
                  </div>
                </Link>

                <div className="allModels">{product.brand},</div>
                <div className="allModels">{product.type},</div>
                <div className="allModels">{product.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default FurniturePage;
