import React, { useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Button from "../components/button";
import EmptyImage from "../static/images/activity-empty-state.svg";

const ActivityContainer = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="content-wrap" data-cy="activity-page">
      <div className="container">
        <div className="sub-header">
          <h1 className="title-page" data-cy="activity-title">
            Activity
          </h1>
          <button
            className={`btn btn-big btn-cyan btn-rounded ${
              loading ? "btn-loading" : ""
            }`}
            disabled={loading}
            onClick={() => setLoading(true)}
            data-cy="button-add-activity"
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

export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer);
