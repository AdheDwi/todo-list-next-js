import React from "react";
import { Link } from "../routes";

const CardProduct = (props) => {
  return (
    <div className="card-product d-flex align-item-start">
      <div className="image-wrapper">
        <Link href={`/detail/${props.product && props.product.id}`}>
          <img
            src={props.product && props.product.imageUrl}
            alt={props.product && props.product.title}
          />
        </Link>
      </div>
      <div className="text-wrapper">
        <div className="detail-product-title mb-0">
          <Link href={`/detail/${props.product && props.product.id}`}>
            <h2>{props.product && props.product.title}</h2>
          </Link>
          <a
            href="javascript:void(0)"
            onClick={(e) => props.addWislist(e, props.i, props.loved[props.i])}
          >
            <i
              className={`fa fa-${
                props.loved[props.i] > 0 ? "heart" : "heart-o"
              }`}
            />
          </a>
        </div>
        <p>{props.product && props.product.price}</p>
      </div>
    </div>
  );
};

export default CardProduct;
