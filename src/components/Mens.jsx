import React from "react";
import { menData } from "../Stores/Data/men";

function Mens() {
  const fiveImages = menData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Men's Fashion</h2>
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

export default Mens;
