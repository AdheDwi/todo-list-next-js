import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

import CartContainer from "../containers/cartContainer";

const Cart = () => {
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const userId = cookies.get("userId");
    if (!userId) {
      router.push("/login");
    }
  }, [cookies]);
  return (
    <Fragment>
      <Head>
        <title>MiniCommerce - Cart</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="MiniCommerce - Cart" />
        <meta name="description" content="MiniCommerce cart page" />
        <meta name="keywords" content="MiniCommerce, Cart" />
      </Head>
      <CartContainer />
    </Fragment>
  );
};
export default Cart;
