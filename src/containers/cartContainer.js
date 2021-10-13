import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Menu from "../components/menu";
import CardProduct from "../components/cardProduct";
import { useRouter } from "next/router";

const CartContainer = () => {
  const router = useRouter();
  const cookies = new Cookies();

  const [products, setProducts] = useState([]);
  const [loved, setLoved] = useState([]);

  useEffect(() => {
    if (products.length < 1 && cookies.get("cart") !== undefined) {
      setProducts(cookies.get("cart"));
    }
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      const getLoved = products.map((product) => product.loved);
      setLoved(getLoved);
    }
  }, [products]);

  const addWislist = (e, id, number) => {
    e.preventDefault();
    const productLoved = [...loved];
    productLoved[id] = number === 0 ? 1 : 0;
    setLoved(productLoved);
  };
  return (
    <div className="full-page-wrapper">
      <div className="header-wrapper d-flex align-items-center">
        <a href="javascript:void(0)" onClick={() => router.back()}>
          <i className={`fa fa-arrow-left`} />
        </a>

        <h1>Cart</h1>
      </div>
      <div className="product-list-wrapper">
        {products.length > 0 ? (
          <>
            {products.map((product, i) => (
              <CardProduct
                i={i}
                product={product}
                loved={loved}
                addWislist={addWislist}
              />
            ))}
          </>
        ) : (
          <p className="empty-state">Your Cart is Empty</p>
        )}
      </div>
      <Menu page={"cart"} />
    </div>
  );
};

export default CartContainer;
