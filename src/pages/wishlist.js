import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import LoginContainer from "../containers/loginContainer";
import WishlistContainer from "../containers/wishlistContainer";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

import { getProductWishlistAction } from "../actions/product";

const Wishlist = () => {
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const userId = cookies.get("userId");
    if (userId === undefined) {
      router.push("/login");
    }
  }, [cookies]);
  return (
    <Fragment>
      <Head>
        <title>MiniCommerce - Wishlist</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="MiniCommerce - Wishlist" />
        <meta name="description" content="MiniCommerce wishlist page" />
        <meta name="keywords" content="MiniCommerce, Wishlist " />
      </Head>
      <WishlistContainer />
    </Fragment>
  );
};

Wishlist.getInitialProps = async (ctx) => {
  ctx.store.dispatch(getProductWishlistAction());

  return {};
};

export default Wishlist;
