import React from "react";
import { useParams } from "react-router-dom";
import { computerData } from "../Stores/Data/computers";
import Navbar from "../components/Navbar";

function ComputersIndividual() {
  const { id } = useParams();
  const singleData = computerData.find((itm) => itm.id === id);
  return (
   <>
   <Navbar/>
    <div className="sin-section">
      <div className="sin-image">
        <img src={singleData.image} alt=""></img>
      </div>
      <div className="sin-details space">
        <div className="sin-company  space">
          <h3>{singleData.company}</h3>
        </div>
        <div className="sin-model space">
          <h2>{singleData.model}</h2>
        </div>
        <div className="sin-price space">
          <h3>{singleData.price}</h3>
        </div>
        <div className="sin-des space ">
          <p>{singleData.description}</p>
        </div>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
   </>
  );
}

export default ComputersIndividual;
