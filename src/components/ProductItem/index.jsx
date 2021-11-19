import { React, useState } from "react";
import PropTypes from "prop-types";
import "../../App.css";

const ProductItem = ({
  name,
  cost,
  img,
  description,
  index,
  supplier,
  group,
}) => {
  const [selecteditem, setSelectedItem] = useState(0);

  return (
    <>
      {selecteditem == index ? (
        <div
          className="product-hover"
          onMouseEnter={() => {
            setSelectedItem(index);
          }}
          onMouseLeave={() => {
            setSelectedItem(0);
          }}
        >
          <p className="product-description">{description}</p>
          <div className="product-groups">
            <p className="product-supplier">Fornecedor: {supplier}</p>
            <p className="product-group">Categoria: {group}</p>
          </div>
        </div>
      ) : (
        <div
          className="product-item"
          onMouseEnter={() => {
            setSelectedItem(index);
          }}
          onMouseLeave={() => {
            setSelectedItem(-1);
          }}
        >
          <img className="img-product" src={img} alt={name} />
          <div className="product-body">
            <p className="product-name">{name}</p>
            <p className="product-cost">R${cost}</p>
          </div>
        </div>
      )}
    </>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  description: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default ProductItem;
