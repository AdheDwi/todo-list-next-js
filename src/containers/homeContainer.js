import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { FormGroup, Input } from "reactstrap";
import _ from "lodash";
import { Link } from "../routes";

import Menu from "../components/menu";
import CardProduct from "../components/cardProduct";
import { searchProductAction } from "../actions/product";

const HomeContainer = (props) => {
  const [loved, setLoved] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => searchRef.current(searchValue), [searchValue]);

  useEffect(() => {
    if (searchValue.length > 0) {
      setTimeout(() => {
        setIsSearch(true);
      }, 700);
    }
  }, [searchValue]);

  useEffect(() => {
    if (
      props.dataProduct.productPromo &&
      props.dataProduct.productPromo.length > 0
    ) {
      const getLoved = props.dataProduct.productPromo.map(
        (product) => product.loved
      );
      setLoved(getLoved);
    }
  }, [props.dataProduct]);

  const addWislist = (e, id, number) => {
    e.preventDefault();
    const productLoved = [...loved];
    productLoved[id] = number === 0 ? 1 : 0;
    setLoved(productLoved);
  };

  const searchRef = useRef(
    _.debounce((searchValue) => {
      props.searchProductAction(searchValue.trim());
    }, 1000)
  );

  const closeSearch = () => {
    setIsSearch(false);
    setSearchValue("");
  };

  return (
    <div className="full-page-wrapper">
      <div className="header-wrapper d-flex align-items-center">
        {isSearch && (
          <a href="javascript:void(0)" onClick={() => closeSearch()}>
            <i className={`fa fa-arrow-left`} />
          </a>
        )}
        <FormGroup className="mb-0 w-100">
          <Input
            type="text"
            name="search"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </FormGroup>
      </div>
      {!isSearch ? (
        <>
          <div className="category-wrapper">
            <h1>Categories</h1>
            <div className="category-scroll">
              {props.dataProduct.category
                ? props.dataProduct.category.map((item) => (
                    <Link route="/">
                      <div className="category" key={item.id}>
                        <img src={item.imageUrl} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    </Link>
                  ))
                : ""}
            </div>
          </div>
          <div className="product-wrapper">
            <h1>Product List</h1>
            {props.dataProduct.productPromo
              ? props.dataProduct.productPromo.map((product, i) => (
                  <div className="card-product" key={product.id}>
                    <Link href={`/detail/${product.id}`}>
                      <img src={product.imageUrl} alt={product.title} />
                    </Link>
                    <div className="product-desc">
                      <Link href={`/detail/${product.id}`}>
                        <h2>{product.title}</h2>
                      </Link>
                      <a onClick={(e) => addWislist(e, i, loved[i])}>
                        <i
                          className={`fa fa-${
                            loved[i] > 0 ? "heart" : "heart-o"
                          }`}
                        />
                      </a>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </>
      ) : (
        <div className="product-list-wrapper">
          {props.dataSearch.length > 0 ? (
            <>
              {props.dataSearch
                ? props.dataSearch.map((product, i) => (
                    <CardProduct
                      i={i}
                      product={product}
                      loved={loved}
                      addWislist={addWislist}
                    />
                  ))
                : ""}
            </>
          ) : (
            !props.loadingSearch &&
            searchValue.length > 2 && (
              <p className="empty-state">Product not found</p>
            )
          )}
        </div>
      )}
      <Menu page={"home"} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataProduct: state.product.dataProduct,
  dataSearch: state.product.dataSearch,
  loadingSearch: state.product.loadingSearch,
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchProductAction: (data) => dispatch(searchProductAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
