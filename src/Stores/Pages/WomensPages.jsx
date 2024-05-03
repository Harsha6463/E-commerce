import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { womanData } from "../Data/woman";
import { Link } from "react-router-dom";

function WomensPages() {
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
      ? womanData
      : womanData.filter((data) => selectedProduct.includes(data.model));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="selected-pro">
          {womanData.map((object) => {
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
                <Link to={`/women/${product.id}`}>
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

export default WomensPages;
