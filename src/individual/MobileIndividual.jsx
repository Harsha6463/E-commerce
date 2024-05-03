import React from "react";
import { mobileData } from "../Stores/Data/mobiles";
import {  useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function MobileIndividual() {
  const { id } = useParams();

  const singleData = mobileData.find((item) => item.id === id);

  console.log(singleData);
  return (
    <>
    <Navbar/>
    <div className="sin-section">
      <div className="sin-image">
        <img src={singleData.image} alt="" />
      </div>
      <div className="sin-details space">
        <div className="sin-company space">
          <h2>{singleData.company}</h2>
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

export default MobileIndividual;
