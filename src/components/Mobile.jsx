import React from "react";
import { mobileData } from "../Stores/Data/mobiles";

function Mobile() {
  const fiveImages = mobileData.slice(0, 5);
  return (
    <>
      <div className="allTitles">
        <h2>Mobiles</h2>
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

export default Mobile;
