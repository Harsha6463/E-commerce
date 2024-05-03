import React from "react";
import { kitchenData } from "../Stores/Data/kitchen";

function Kitchen() {
  const fiveImages = kitchenData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Kitchen</h2>
      </div>
      <div className="allImages">
        {fiveImages.map((product) => {
          return (
            <div className="imgDiv">
              <img className="image" src={product.image} alt=""></img>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Kitchen;
