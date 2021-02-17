import React from 'react'
import ShopCart from "./images/shopping-cart.png"
import { Link } from 'react-router-dom';

function CartWidget({ quantity }) {
    return(
        <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/cart">
          <img style={{ height: "32px" }} src={ShopCart} alt="Carrito" />{" "}
          <span
            style={{
              position: "absolute",
              fontSize: "15px",
              bottom: "10px",
              left: "15px",
              fontWeight: "bold",
            }}>
            <p>
            {quantity}
            </p>
          </span>
        </Link>
      </div>
    )}

export default CartWidget;