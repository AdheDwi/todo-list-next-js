import React from "react";
import { Link } from "../routes";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

const Menu = (props) => {
  const cookies = new Cookies();
  const router = useRouter();

  const logout = () => {
    cookies.remove("userId");
    setTimeout(() => {
      router.push("/login");
    }, 400);
  };
  return (
    <div className="menu-list">
      <Link href="/">
        <a className={`menu ${props.page === "home" ? "active" : ""}`}>
          <i className="fa fa-home" aria-hidden="true"></i>
          <span>Home</span>
        </a>
      </Link>
      <Link href="/wishlist">
        <a className={`menu ${props.page === "wishlist" ? "active" : ""}`}>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <span>Wishlist</span>
        </a>
      </Link>
      <Link href="/cart">
        <a className={`menu ${props.page === "cart" ? "active" : ""}`}>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <span>Cart</span>
        </a>
      </Link>

      <a href="javascript:void(0)" className="menu" onClick={() => logout()}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <span>Logout</span>
      </a>
    </div>
  );
};

export default Menu;
