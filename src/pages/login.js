import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

import LoginContainer from "../containers/loginContainer";
import HomeContainer from "../containers/homeContainer";

import { getProductAction } from "../actions/product";

const Home = () => {
  const cookies = new Cookies();
  const router = useRouter();
  useEffect(() => {
    const userId = cookies.get("userId");
    if (userId !== undefined) {
      router.push("/");
    }
  }, [cookies]);
  return (
    <Fragment>
      <Head>
        <title>MiniCommerce - Login</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="MiniCommerce - Login" />
        <meta name="description" content="MiniCommerce login page" />
        <meta name="keywords" content="MiniCommerce, login" />
      </Head>
      <LoginContainer />
    </Fragment>
  );
};

Home.getInitialProps = async (ctx) => {
  ctx.store.dispatch(getProductAction());

  return {};
};

export default Home;
