import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faAngleLeft,
  faPencilAlt,
  faExchangeAlt,
  faCheck,
  faSortAmountDown,
  faSortAmountUp,
  faSortAlphaDown,
  faSortAlphaDownAlt,
} from "@fortawesome/free-solid-svg-icons";

import EmptyImage from "../static/images/todo-empty-state.svg";

const TodoContainer = () => {
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState({ open: false, sortBy: null });
  const [edit, setEdit] = useState({ open: false, value: "" });

  console.log("edit", edit);

  const changeSort = (data) => {
    setSorting({ ...sorting, sortBy: data });
    setTimeout(() => {
      setSorting({ open: false, sortBy: data });
    }, 300);
  };
  return (
    <div className="content-wrap" data-cy="todo-page">
      <div className="container">
        <div className="sub-header">
          <div className="todo-title">
            <a className="btn btn-icon back" href="#">
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
            {edit.open ? (
              <input
                className="input-todo-title mx-3"
                data-cy="input-todo-title"
                value="Nama Todo"
                onBlur={() => setEdit({ ...edit, open: false })}
              />
            ) : (
              <h1 className="title-page mx-3" data-cy="todo-title">
                Nama Todo
              </h1>
            )}
            <button
              className="btn btn-icon"
              data-cy="edit-todo-title"
              onClick={() => setEdit({ ...edit, open: !edit.open })}
            >
              <FontAwesomeIcon icon={faPencilAlt} color="#a4a4a4" />
            </button>
          </div>
          <div className="sub-header-btn">
            <div className="sort-dropdown">
              <button
                className="btn btn-icon sorted"
                onClick={() => setSorting({ ...sorting, open: !sorting.open })}
                data-cy="button-sorting"
              >
                <FontAwesomeIcon icon={faExchangeAlt} color="#a4a4a4" />
              </button>
              <div
                className={`sort-menu ${sorting.open ? "d-block" : "d-none"}`}
                data-cy="menu-sorting"
              >
                <div
                  className="sort-item"
                  onClick={() => changeSort("sorting-terbaru")}
                  data-cy="sorting-terbaru"
                >
                  <span className="sort-icon">
                    <FontAwesomeIcon icon={faSortAmountDown} color="#16ABF8" />
                  </span>
                  <span className="sort-name">Terbaru</span>
                  <span className="sort-check">
                    {sorting.sortBy === "sorting-terbaru" && (
                      <FontAwesomeIcon icon={faCheck} color="#a4a4a4" />
                    )}
                  </span>
                </div>
                <div
                  className="sort-item"
                  onClick={() => changeSort("sorting-terlama")}
                  data-cy="sorting-terlama"
                >
                  <span className="sort-icon">
                    <FontAwesomeIcon icon={faSortAmountUp} color="#16ABF8" />
                  </span>
                  <span className="sort-name">Terlama</span>
                  <span className="sort-check">
                    {sorting.sortBy === "sorting-terlama" && (
                      <FontAwesomeIcon icon={faCheck} color="#a4a4a4" />
                    )}
                  </span>
                </div>
                <div
                  className="sort-item"
                  onClick={() => changeSort("sorting-a-z")}
                  data-cy="sorting-a-z"
                >
                  <span className="sort-icon">
                    <FontAwesomeIcon icon={faSortAmountDown} color="#16ABF8" />
                  </span>
                  <span className="sort-name">A-Z</span>
                  <span className="sort-check">
                    {sorting.sortBy === "sorting-a-z" && (
                      <FontAwesomeIcon icon={faCheck} color="#a4a4a4" />
                    )}
                  </span>
                </div>
                <div
                  className="sort-item"
                  onClick={() => changeSort("sorting-z-a")}
                  data-cy="sorting-z-a"
                >
                  <span className="sort-icon">
                    <FontAwesomeIcon icon={faSortAmountUp} color="#16ABF8" />
                  </span>
                  <span className="sort-name">Z-A</span>
                  <span className="sort-check">
                    {sorting.sortBy === "sorting-z-a" && (
                      <FontAwesomeIcon icon={faCheck} color="#a4a4a4" />
                    )}
                  </span>
                </div>
                <div
                  className="sort-item"
                  onClick={() => changeSort("sorting-belum-selesai")}
                  data-cy="sorting-belum-selesai"
                >
                  <span className="sort-icon rotate">
                    <FontAwesomeIcon icon={faExchangeAlt} color="#16ABF8" />
                  </span>
                  <span className="sort-name">Belum Selesai</span>
                  <span className="sort-check">
                    {sorting.sortBy === "sorting-belum-selesai" && (
                      <FontAwesomeIcon icon={faCheck} color="#a4a4a4" />
                    )}
                  </span>
                </div>
              </div>
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
