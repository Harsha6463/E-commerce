import React from "react";
import { womanData } from "../Stores/Data/woman";

function Womens() {
  const fiveImages = womanData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Women's Fashion</h2>
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

export default Womens;
