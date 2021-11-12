import React from "react";
import PropTypes from "prop-types";
import "../../App.css"

const ProductItem = ({ name, cost, img, description }) => {
  return (
    <div className="product-item">
        <img className="img-product" src={img} alt={name} />
        <div className="product-body">
        <p className="product-name">{name}</p>
        <p className="product-cost">R${cost}</p>
        <p className="product-description">Descrição: {description}</p>
        </div>
    </div>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  description: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default ProductItem;
