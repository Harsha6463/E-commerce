import React from "react";
import { furnitureData } from "../Stores/Data/furniture";

function Furniture() {
  const fiveImages = furnitureData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Furniture</h2>
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

export default Furniture;
