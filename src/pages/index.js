import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";

import ActivityContainer from "../containers/activityContainer";
import TodoContainer from "../containers/todoContainer";
import Header from "../components/header";

import { getProductAction } from "../actions/product";

const Home = () => {
  return (
    <>
      <Head>
        <title>To do List</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <TodoContainer />
    </>
  );
};
export default Home;
