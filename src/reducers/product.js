import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
  GET_PRODUCT_WISHLIST_REQUEST,
  GET_PRODUCT_WISHLIST_SUCCESS,
  GET_PRODUCT_WISHLIST_FAILURE,
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from "../constants";

export const initialState = {
  loadingProduct: false,
  errProduct: null,
  dataProduct: {},
  loadingDetailProduct: false,
  errDetailProduct: null,
  detailProduct: {},
  loadingWishlist: false,
  errWishlist: null,
  dataWishlist: {},
  loadingSearch: false,
  errSearch: null,
  dataSearch: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loadingProduct: true,
        errProduct: null,
        dataProduct: {},
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingProduct: false,
        errProduct: null,
        dataProduct: action.data,
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,

        loadingProduct: false,
        errProduct: action.err,
        dataProduct: {},
      };

    case GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loadingDetailProduct: true,
        errDetailProduct: null,
        detailProduct: {},
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loadingDetailProduct: false,
        errDetailProduct: null,
        detailProduct: action.data,
      };
    case GET_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        loadingDetailProduct: false,
        errDetailProduct: action.err,
        detailProduct: {},
      };

    case GET_PRODUCT_WISHLIST_REQUEST:
      return {
        ...state,
        loadingWishlist: true,
        errWishlist: null,
        dataWishlist: {},
      };
    case GET_PRODUCT_WISHLIST_SUCCESS:
      return {
        ...state,
        loadingWishlist: false,
        errWishlist: null,
        dataWishlist: action.data,
      };
    case GET_PRODUCT_WISHLIST_FAILURE:
      return {
        ...state,
        loadingWishlist: false,
        errWishlist: action.err,
        dataWishlist: {},
      };

    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        loadingSearch: true,
        errSearch: null,
        dataSearch: [],
      };
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
        errSearch: null,
        dataSearch: action.data,
      };
    case SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        loadingSearch: false,
        errSearch: action.err,
        dataSearch: [],
      };

    default:
      return state;
  }
};
