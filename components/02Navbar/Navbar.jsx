"use client";
import React, { useContext } from "react";
import Link from "next/link";
// Import Context (cretead only)
import { authContext } from "../../context/Authentication";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {
  const { token, setToken } = useContext(authContext);
  const { numOfCartItems } = useContext(CartContext);

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand active" href="/" id="logo">
          Store
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            {token && (
              <li className="nav-item">
                <Link className="nav-link" href="/allorders" id="orders">
                  Orders
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {token ? (
              <>
                <li className="nav-item me-lg-2" title="Cart">
                  <Link
                    className="shopCart nav-link position-relative"
                    href="/cart"
                    id="cart"
                  >
                    <i className="fa-solid fa-cart-shopping text-dark"></i>
                    <span className="position-absolute translate-middle badge rounded-2 bg-main">
                      {numOfCartItems}
                    </span>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link href="/signin">
                    <span
                      onClick={logout}
                      style={{ cursor: "pointer" }}
                      className="nav-link"
                    >
                      SignOut
                    </span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    href="/signup"
                    id="signup"
                  >
                    SignUp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/signin" id="signin">
                    SignIn
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
