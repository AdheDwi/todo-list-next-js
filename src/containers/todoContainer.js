import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleLeft,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../components/button";
import EmptyImage from "../static/images/todo-empty-state.svg";

const TodoContainer = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="content-wrap" data-cy="todo-page">
      <div className="container">
        <div className="sub-header">
          <div className="todo-title">
            <a className="btn btn-icon back" href="#">
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
            <h1 className="title-page" data-cy="todo-title">
              Nama Todo
            </h1>
            <button className="btn btn-icon">
              <FontAwesomeIcon icon={faPencilAlt} />
            </button>
          </div>
          <button
            className={`btn btn-big btn-cyan btn-rounded ${
              loading ? "btn-loading" : ""
            }`}
            disabled={loading}
            onClick={() => setLoading(true)}
            data-cy="button-add-todo"
          >
            {loading ? (
              "Proses..."
            ) : (
              <>
                <span className="mr-2">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                Tambah
              </>
            )}
          </button>
        </div>
        <div className="content-body">
          <div className="empty-state">
            <img
              src={EmptyImage}
              alt={EmptyImage}
              data-cy={`image-${EmptyImage}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // dataProduct: state.product.dataProduct,
  // dataSearch: state.product.dataSearch,
  // loadingSearch: state.product.loadingSearch,
});

const mapDispatchToProps = (dispatch) => {
  // return {
  //   searchProductAction: (data) => dispatch(searchProductAction(data)),
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
