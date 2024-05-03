import React, { useState } from "react";
import { mobileData } from "../Data/mobiles";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
function MobilePage() {
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
      ? mobileData
      : mobileData.filter((data) => selectedProduct.includes(data.company));
  return (
    <>
      <Navbar />
      <div className="full-page">
        <div className="selected-pro">
          {mobileData.map((object) => {
            return (
              <div className="pro-input company">
                <label>
                  <input
                    className="input"
                    type="checkbox"
                    checked={selectedProduct.includes(object.company)}
                    onChange={() => Brand(object.company)}
                  />

                  <b className="brand">{object.company}</b>
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageView">
          {fiterdProduct.map((product) => {
            return (
              <div>
                <Link to={`/mobiles/${product.id}`}>
                  <div className="pageImg">
                    <img src={product.image} alt=""></img>
                  </div>
                </Link>

                <div className="allModels">{product.company},</div>
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

export default MobilePage;
