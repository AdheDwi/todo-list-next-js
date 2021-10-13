import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { Alert } from "reactstrap";

const DetailContainer = (props) => {
  const router = useRouter();
  const cookies = new Cookies();

  const [loved, setLoved] = useState(0);
  const [showAllert, setShowAllert] = useState(false);

  useEffect(() => {
    setLoved(props.detailProduct.loved);
  }, [props.detailProduct]);

  useEffect(() => {
    if (showAllert) {
      setTimeout(() => {
        setShowAllert(false);
      }, 3000);
    }
  }, [showAllert]);

  const addWislist = (e, number) => {
    e.preventDefault();
    const setNumber = number === 0 ? 1 : 0;
    setLoved(setNumber);
  };

  const buyProduct = (data) => {
    let productCart;
    if (cookies.get("cart") === undefined) {
      productCart = [data];
      cookies.set("cart", productCart, { path: "/" });
    } else {
      const previousCart = cookies.get("cart");
      productCart = previousCart.concat(data);
      cookies.set("cart", productCart, { path: "/" });
    }
    setTimeout(() => {
      setShowAllert(true);
    }, 200);
  };

  return (
    <div className="full-page-wrapper pt-3">
      {showAllert && (
        <Alert className="alert-success" color="success">
          Success add to cart
        </Alert>
      )}
      <div className="detail-product-image">
        <div className="abolute-wrapp">
          <a href="javascript:void(0)" onClick={() => router.back()}>
            <i className={`fa fa-arrow-left`} />
          </a>

          <a href="#">
            <i className={`fa fa-share-alt`} />
          </a>
        </div>
        <img
          src={props.detailProduct.imageUrl}
          alt={`image-${props.detailProduct.title}`}
        />
      </div>
      <div className="detail-product-desc">
        <div className="detail-product-title">
          <h2>{props.detailProduct.title}</h2>

          <a href="#" onClick={(e) => addWislist(e, loved)}>
            <i className={`fa fa-${loved > 0 ? "heart" : "heart-o"}`} />
          </a>
        </div>
        <p>{props.detailProduct.description}</p>
      </div>
      <div className="detail-product-action">
        <p>{props.detailProduct.price}</p>
        <button
          className="btn button-primary"
          onClick={() =>
            buyProduct({
              title: props.detailProduct.title,
              imageUrl: props.detailProduct.imageUrl,
              loved: props.detailProduct.loved,
              price: props.detailProduct.price,
              id: props.detailProduct.id,
              description: props.detailProduct.description,
            })
          }
        >
          Buy
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  detailProduct: state.product.detailProduct,
});

export default connect(mapStateToProps)(DetailContainer);
