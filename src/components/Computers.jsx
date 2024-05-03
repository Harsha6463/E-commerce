import React from "react";
import { computerData } from "../Stores/Data/computers";
function Computers() {
  const fiveImages = computerData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Computers</h2>
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

export default Computers;
