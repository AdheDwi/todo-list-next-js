import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Menu from "../components/menu";
import CardProduct from "../components/cardProduct";

const WishlistContainer = (props) => {
  const router = useRouter();

  const [loved, setLoved] = useState([]);
  const [lengthWishlist, setLengthWishlist] = useState(0);

  useEffect(() => {
    if (props.dataWishlist && props.dataWishlist.length > 0) {
      const getLoved = props.dataWishlist.map((product) => product.loved);
      setLoved(getLoved);
    }
  }, [props.dataWishlist]);

  useEffect(() => {
    if (loved.length > 0) {
      const countWishlist = loved.filter((love) => love === 1);
      setLengthWishlist(countWishlist.length);
    }
  }, [loved]);

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

        <h1>Wishlist</h1>
      </div>
      <div className="product-list-wrapper">
        {lengthWishlist > 0 ? (
          <>
            {props.dataWishlist
              ? props.dataWishlist.map(
                  (product, i) =>
                    loved[i] === 1 && (
                      <CardProduct
                        i={i}
                        product={product}
                        loved={loved}
                        addWislist={addWislist}
                      />
                    )
                )
              : ""}
          </>
        ) : (
          <p className="empty-state">Your Wishlist is Empty</p>
        )}
      </div>
      <Menu page={"wishlist"} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataWishlist: state.product.dataWishlist,
});

export default connect(mapStateToProps)(WishlistContainer);
