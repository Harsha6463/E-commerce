import React from "react";
import { fridgeData } from "../Stores/Data/fridge";

function Fridges() {
  const fiveImages = fridgeData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Refrigirators</h2>
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

export default Fridges;
