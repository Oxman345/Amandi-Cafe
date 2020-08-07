import React from "react";
import { connect } from "react-redux";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductCard = ({ product }) => (
    <div>
      <div>{`Price: $${product.price}`}</div>
      <br />
      <img src={product.img} alt={product.description}></img>
      <br />
      <div>{product.description}</div>
      <div onClick={() => alert(`${product.description} added to cart`)}>
        <AddToCartButton className='btn'/>
      </div>
    </div>
  );

  const mapStateToProps = (reduxState) => ({
    reduxState,
  });
  export default connect(mapStateToProps)(ProductCard);