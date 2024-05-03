import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="ecommerce">
        <div className="h1">
          <h1>E-MART</h1>
        </div>
      </div>
      <div className="navsection">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <div className="title">
          <h2>E-Mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search"></input>
        </div>
        <div className="user">
          <div className="user-detail">SignIN/SignUp</div>
        </div>
        <div className="cart">Cart</div>
      </div>
      <div className="subMenu">
        <ul className="link">
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers">
            <li>Computers</li>
          </Link>
          <Link to="/fridges">
            <li>Refrigirators</li>
          </Link>
          <Link to="/mensfashions">
            <li>Men's Fashion</li>
          </Link>
          <Link to="/womenfashions">
            {" "}
            <li>Women's Fashion</li>
          </Link>
          <Link to="/kitchen">
            <li>Kitchen</li>
          </Link>
          <Link to="/furniture">
            <li>Furniture</li>
          </Link>
          <Link to="/ac">
            <li>Air Conditioning</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
