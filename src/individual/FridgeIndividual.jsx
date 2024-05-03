import React from "react";
import Navbar from "../components/Navbar";
import { fridgeData } from "../Stores/Data/fridge";
import { useParams } from "react-router-dom";

function FridgeIndividual() {
  const { id } = useParams();

  const singleData = fridgeData.find((item) => item.id === id);

  console.log(singleData);
  return (
    <>
      <Navbar />
      <div className="sin-section">
        <div className="sin-image">
          <img src={singleData.image} alt="" />
        </div>
        <div className="sin-details space">
          <div className="sin-company space">
            <h2>{singleData.brand}</h2>
          </div>
          <div className="sin-model space">
            <h3>{singleData.model}</h3>
          </div>
          <div className="sin-price space">
            <h2>{singleData.price}</h2>
          </div>
          <div className="sin-desc space">
            <p>{singleData.description}</p>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default FridgeIndividual;
