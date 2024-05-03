import React from "react";
import { acData } from "../Stores/Data/ac";

function Ac() {
  const fiveImages = acData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Air Conditioning</h2>
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

export default Ac;
